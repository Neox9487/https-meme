function escapeHtml(s) {
    return String(s)
        .replaceAll("&", "&amp;")
        .replaceAll("<", "&lt;")
        .replaceAll(">", "&gt;")
        .replaceAll('"', "&quot;")
        .replaceAll("'", "&#39;");
}

function categoryLabel(category) {
    switch (category) {
        case "1xx": return "Informational";
        case "2xx": return "Success";
        case "3xx": return "Redirection";
        case "4xx": return "Client Error";
        case "5xx": return "Server Error";
        default: return category || "";
    }
}

function createMedia({ asset, code, title }) {
    if (!asset) {
        const div = document.createElement("div");
        div.className = "media-placeholder";
        div.textContent = code;
        return div;
    }

    const img = document.createElement("img");
    img.src = `/assets/images/${asset}.jpg`;
    img.alt = `${code} ${title}`;
    img.loading = "lazy";
    img.decoding = "async";
    img.className = "media-image";

    return img;
}


export function createStatusCard(status) {
    const a = document.createElement("a");
    a.className = "status-card";
    a.href = `#/${status.code}`;

    const media = document.createElement("div");
    media.className = "card-media";
    media.appendChild(createMedia(status));

    a.append(
        media,
        Object.assign(document.createElement("div"), {
            className: "card-body",
            innerHTML: `
                <div class="card-code">${status.code}</div>
                <div class="card-title">${status.name}</div>
            `
        })
    );

    return a;
}

export function renderGrids(statuses) {
    const grids = new Map([
        ["1xx", document.querySelector("#grid-1xx")],
        ["2xx", document.querySelector("#grid-2xx")],
        ["3xx", document.querySelector("#grid-3xx")],
        ["4xx", document.querySelector("#grid-4xx")],
        ["5xx", document.querySelector("#grid-5xx")]
    ]);

    for (const el of grids.values()) {
        if (el) el.textContent = "";
    }

    for (const s of statuses) {
        const grid = grids.get(s.category);
        if (!grid) continue;
        grid.appendChild(createStatusCard(s));
    }
}

/**
 * Switch list/detail view
 * @param {"list"|"detail"} which
 */
export function showView(which) {
    const listEl = document.querySelector("#view-list");
    const detailEl = document.querySelector("#view-detail");
    if (!listEl || !detailEl) return;

    const isDetail = which === "detail";
    listEl.hidden = isDetail;
    detailEl.hidden = !isDetail;
}

/**
 * Render detail page into #view-detail
 * @param {object} status
 * @param {object|null} prev
 * @param {object|null} next
 */
export function renderDetail(status, prev, next) {
    const detailEl = document.querySelector("#view-detail");
    if (!detailEl) return;

    const code = escapeHtml(status.code) + " - " + escapeHtml(status.name);
    const title = escapeHtml(status.title);
    const cat = escapeHtml(status.category);
    const catText = escapeHtml(categoryLabel(status.category));

    const desc = status.description ? escapeHtml(status.description) : "(description 還沒填)";

    detailEl.innerHTML = `
        <div class="detail">
            <div class="detail-top">
                <a class="btn" href="#/">← Back</a>
                <div class="detail-nav">
                    ${prev ? `<a class="btn" href="#/${prev.code}">← ${prev.code}</a>` : `<span class="btn is-disabled">←</span>`}
                    ${next ? `<a class="btn" href="#/${next.code}">${next.code} →</a>` : `<span class="btn is-disabled">→</span>`}
                </div>
            </div>

            <div class="detail-hero">
                <div class="hero-media" aria-hidden="true">
                    <div class="hero-placeholder">${code}</div>
                </div>

                <div class="hero-text">
                    <div class="hero-code">${code}</div>
                    <div class="hero-title">${title}</div>
                    <div class="hero-meta">
                        <span class="pill">${cat}</span>
                        <span class="pill">${catText}</span>
                    </div>
                    <p class="hero-desc">${desc}</p>

                    <div class="hero-actions">
                        <button class="btn" type="button" data-copy="${code}">Copy code</button>
                        <button class="btn" type="button" data-copy-link>Copy link</button>
                    </div>
                </div>
            </div>
        </div>
    `.trim();

    const mediaEl = document.createElement("div");
    mediaEl.className = "hero-media";
    mediaEl.appendChild(createMedia(status));
    
    detailEl.querySelector(".hero-media")?.replaceWith(mediaEl);

    detailEl.querySelectorAll("[data-copy]").forEach(btn => {
        btn.addEventListener("click", async () => {
            const v = btn.getAttribute("data-copy") || "";
            await navigator.clipboard.writeText(v);
            btn.textContent = "Copied!";
            setTimeout(() => (btn.textContent = "Copy code"), 800);
        });
    });

    const copyLinkBtn = detailEl.querySelector("[data-copy-link]");
    if (copyLinkBtn) {
        copyLinkBtn.addEventListener("click", async () => {
            await navigator.clipboard.writeText(location.href);
            copyLinkBtn.textContent = "Copied!";
            setTimeout(() => (copyLinkBtn.textContent = "Copy link"), 800);
        });
    }
}
