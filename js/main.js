import { STATUSES } from "./statuses.js";
import { renderGrids, renderDetail, showView } from "./ui/renderer.js";

function sortByCode(a, b) {
    return Number(a.code) - Number(b.code);
}

const SORTED = [...STATUSES].sort(sortByCode);

function findNeighbors(code) {
    const idx = SORTED.findIndex(s => s.code === code);
    if (idx < 0) return { prev: null, next: null };
    return {
        prev: idx > 0 ? SORTED[idx - 1] : null,
        next: idx < SORTED.length - 1 ? SORTED[idx + 1] : null
    };
}

function parseRoute() {
    const hash = location.hash || "#/";
    if (hash === "#/" || hash === "#") return { name: "list" };

    const m = hash.match(/^#\/(\d{3})$/);
    if (m) return { name: "detail", code: Number(m[1]) };

    return { name: "list" };
}

function onRouteChange() {
    const route = parseRoute();

    if (route.name === "list") {
        showView("list");
        return;
    }

    const status = STATUSES.find(s => s.code === route.code);
    if (!status) {
        location.hash = "#/";
        return;
    }

    const { prev, next } = findNeighbors(route.code);
    renderDetail(status, prev, next);
    showView("detail");
}

function init() {
    renderGrids(SORTED);
    window.addEventListener("hashchange", onRouteChange);
    onRouteChange();
}

document.addEventListener("DOMContentLoaded", init);