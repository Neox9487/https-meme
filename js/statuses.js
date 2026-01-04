export const STATUSES = [
    /* 1xx Informational */
    {
        code: 100,
        name: "Continue",
        title: "請繼續，目前一切正常，伺服器正在等你把話說完",
        category: "1xx",
        description:
            "HTTP 100 Continue 是一個資訊性狀態碼，表示「到目前為止一切正常」。" +
            "伺服器已成功接收到請求標頭，並且願意接收接下來的請求主體 ( body ) 。" +
            "此狀態碼通常會搭配 `Expect: 100-continue` 標頭使用，讓用戶端在送出大量資料前，先確認伺服器是否願意接受，藉此避免不必要的資料傳輸。",
        asset: "100"
    },
    {
        code: 101,
        name: "Switching Protocols",
        title: "協議正在切換中，是時候換個人了",
        category: "1xx",
        description:
            "HTTP 101 Switching Protocols 表示伺服器已同意用戶端的請求，將切換為不同的通訊協議。" +
            "最常見的例子是從 HTTP 切換為 WebSocket，代表連線即將升級，雙方會改用新的協議規則進行後續通訊。" +
            "一旦回傳 101，代表原本的 HTTP 請求流程結束，正式進入新的通訊模式。",
        asset: "101"
    },
    {
        code: 102,
        name: "Processing",
        title: "請稍候! 伺服器正在努力處理資訊中 ( ?",
        category: "1xx",
        description:
            "HTTP 102 Processing 表示伺服器已成功接收到請求，但尚未完成處理。" +
            "此狀態碼的目的是告知用戶端「我還活著，而且正在忙」，避免用戶端因等待過久而誤判為請求逾時。" +
            "常見於需要長時間處理的操作，例如大型檔案處理、複雜計算或批次作業。",
        asset: "102"
    },
    {
        code: 103,
        name: "Early Hints",
        title: "先給你一點提示，完整內容等等就來",
        category: "1xx",
        description:
            "HTTP 103 Early Hints 用於在最終回應尚未完成前，提前向用戶端提供一些「提示資訊」。" +
            "這些提示通常包含瀏覽器即將需要的資源，例如樣式表或 JavaScript 檔案 ( 透過 `Link` 標頭 ) 。" +
            "透過提早載入關鍵資源，可以有效減少頁面實際顯示時的等待時間，提升整體效能與使用者體驗。",
        asset: "103"
    },

    /* 2xx Success */
    {
        code: 200,
        name: "OK",
        title: "任務成功地完成了......嗎 ?",
        category: "2xx",
        description:
            "HTTP 200 OK 表示請求已成功完成，且伺服器回傳的內容即為請求結果。" +
            "這是最常見、也最直觀的成功狀態碼，代表從伺服器的角度來看，一切都沒有問題。" +
            "不過要注意的是，200 並不保證『業務邏輯正確』，它只代表 HTTP 層級的請求成功。",
        asset: "200"
    },
    {
        code: 201,
        name: "Created",
        title: "新的資源誕生了!",
        category: "2xx",
        description:
            "HTTP 201 Created 表示請求已成功，並且伺服器已建立一個新的資源。" +
            "此狀態碼常用於 POST 請求，例如建立新帳號、新文章或新增資料。" +
            "回應中通常會包含 `Location` 標頭，用來指出新建立資源的存取位置。",
        asset: "201"
    },
    {
        code: 202,
        name: "Accepted",
        title: "請求已收到! 正在排隊處理中......",
        category: "2xx",
        description:
            "HTTP 202 Accepted 表示伺服器已接受請求，但尚未完成實際處理。" +
            "這種狀況常見於非同步處理或背景任務，例如排程工作、寄送郵件或批次轉檔。" +
            "回傳 202 並不代表最終結果成功，只代表『這件事我會處理，但現在還沒有答案』。",
        asset: "202"
    },
    {
        code: 203,
        name: "Non-Authoritative Information",
        title: "我改的比較好，你別問",
        category: "2xx",
        description:
            "HTTP 203 Non-Authoritative Information 表示請求成功，但回傳的內容並非直接來自原始來源。" +
            "內容可能經過代理伺服器、快取系統或中介服務修改、整理或重新包裝。" +
            "雖然資料仍然有效，但並非『第一手原始資料』。",
        asset: "203"
    },
    {
        code: 204,
        name: "No Content",
        title: "事情我辦好了，但我不打算多說",
        category: "2xx",
        description:
            "HTTP 204 No Content 表示請求已成功處理，但伺服器不回傳任何內容。" +
            "此狀態碼常用於更新或刪除操作，讓用戶端知道操作完成，但不需要重新載入畫面。" +
            "瀏覽器在收到 204 時，通常會維持目前畫面狀態。",
        asset: "204"
    },
    {
        code: 205,
        name: "Reset Content",
        title: "再來一次，我想看",
        category: "2xx",
        description:
            "HTTP 205 Reset Content 表示請求已成功，並指示用戶端應重置目前的輸入狀態。" +
            "常見用途是表單提交後，要求用戶端清空欄位、回到初始狀態。" +
            "與 204 不同的是，205 明確要求用戶端進行畫面重置。",
        asset: "205"
    },
    {
        code: 206,
        name: "Partial Content",
        title: "留了一部份給你呦",
        category: "2xx",
        description:
            "HTTP 206 Partial Content 表示伺服器僅回傳資源的一部分內容。" +
            "此狀態碼通常搭配 `Range` 請求使用，例如影片串流、音訊播放或大型檔案的分段下載。" +
            "它讓用戶端可以只請求需要的片段，而不必一次下載完整資源。",
        asset: "206"
    },
    {
        code: 207,
        name: "Multi-Status",
        title: "這不是八個，是「很多」的單位",
        category: "2xx",
        description:
            "HTTP 207 Multi-Status 是 WebDAV 專用狀態碼，用於回傳多個資源的處理結果。" +
            "在同一個回應中，每個子資源都可以擁有各自的狀態碼。" +
            "適合用於批次操作或多資源同步的情境。",
        asset: "207"
    },
    {
        code: 208,
        name: "Already Reported",
        title: "我不是不回你，我只是剛剛已經講過了",
        category: "2xx",
        description:
            "HTTP 208 Already Reported 表示請求的結果已在同一回應中回報過。" +
            "此狀態碼用於避免在 WebDAV 的多狀態回應中，重複回傳相同的資源資訊。",
        asset: "208"
    },
    {
        code: 226,
        name: "IM Used",
        title: "上了點科技",
        category: "2xx",
        description:
            "HTTP 226 IM Used 表示請求成功，且回傳的內容是經過增量處理或差異編碼後的結果。" +
            "伺服器並未回傳完整資源，而是只傳送與先前版本不同的部分。" +
            "這種機制可用於進階快取策略，以降低頻寬使用並提升效能。",
        asset: "226"
    },

    /* 3xx Redirection */
    {
        code: 300,
        name: "Multiple Choices",
        title: "這很難做出選擇，對吧 ?",
        category: "3xx",
        description:
            "HTTP 300 Multiple Choices 表示請求的資源有多種可能的回應方式。" +
            "伺服器會提供多個可選的資源位置或格式，讓用戶端自行決定要使用哪一個。" +
            "這種狀態碼較少實際使用，通常出現在內容協商或資源有多版本的情境。",
        asset: "300"
    },
    {
        code: 301,
        name: "Moved Permanently",
        title: "他為你指明了路，這裡已經什麼都沒有了",
        category: "3xx",
        description:
            "HTTP 301 Moved Permanently 表示請求的資源已被永久移動到新的位置。" +
            "伺服器會在回應中提供新的 URL，用戶端與搜尋引擎應更新既有的連結。" +
            "這是 SEO 中非常重要的狀態碼，代表舊地址正式退役。",
        asset: "301"
    },
    {
        code: 302,
        name: "Found",
        title: "沒有的話，我晚點再來 ?",
        category: "3xx",
        description:
            "HTTP 302 Found 表示請求的資源暫時位於不同的位置。" +
            "與 301 不同的是，這種轉址是臨時性的，用戶端不應永久記住新的 URL。" +
            "常見於登入後導頁、暫時性活動頁面或流量分流。",
        asset: "302"
    },
    {
        code: 303,
        name: "See Other",
        title: "我就在那裡，待會見~",
        category: "3xx",
        description:
            "HTTP 303 See Other 表示請求的結果應透過另一個 URL 取得。" +
            "通常用於 POST 請求完成後，引導用戶端以 GET 方式取得結果頁面。" +
            "這能避免重新整理時重複送出表單。",
        asset: "303"
    },
    {
        code: 304,
        name: "Not Modified",
        title: "已經沒有什麼東西可以改變了......",
        category: "3xx",
        description:
            "HTTP 304 Not Modified 表示資源自上次請求後並未發生變化。" +
            "伺服器不會回傳內容本體，用戶端可直接使用快取版本。" +
            "這是瀏覽器快取機制的核心之一，可大幅減少流量與載入時間。",
        asset: "304"
    },
    {
        code: 307,
        name: "Temporary Redirect",
        title: "這條路還在，但我不在了",
        category: "3xx",
        description:
            "HTTP 307 Temporary Redirect 表示資源暫時轉移到其他位置。" +
            "與 302 不同的是，307 明確要求用戶端保留原本的 HTTP 方法 ( 如 POST 仍然是 POST ) 。" +
            "適合用於對請求語意有嚴格要求的臨時轉址。",
        asset: "307"
    },
    {
        code: 308,
        name: "Permanent Redirect",
        title: "已經走不下去了......",
        category: "3xx",
        description:
            "HTTP 308 Permanent Redirect 表示資源已永久移動到新位置。" +
            "它的行為類似 301，但同樣要求用戶端保留原始的 HTTP 方法。" +
            "適合用於 API 或需要嚴格請求一致性的永久轉址場景。",
        asset: "308"
    }, 

    /* 4xx Client Error */
    { code: 400, name: "Bad Request", title: "是不是想幹什麼壞事 ?", category: "4xx", description: "", asset: "400" },
    { code: 401, name: "Unauthorized", category: "4xx", description: "", asset: "" },
    { code: 402, name: "Payment Required", category: "4xx", description: "", asset: "" },
    { code: 403, name: "Forbidden", category: "4xx", description: "", asset: "" },
    { code: 404, name: "Not Found", title: "這裡什麼事都沒有發生，對吧？", category: "4xx", description: "", asset: "404" },
    { code: 405, name: "Method Not Allowed", category: "4xx", description: "", asset: "" },
    { code: 406, name: "Not Acceptable", category: "4xx", description: "", asset: "" },
    { code: 407, name: "Proxy Authentication Required", category: "4xx", description: "", asset: "" },
    { code: 408, name: "Request Timeout", category: "4xx", description: "", asset: "" },
    { code: 409, name: "Conflict", category: "4xx", description: "", asset: "" },
    { code: 410, name: "Gone", category: "4xx", description: "", asset: "" },
    { code: 411, name: "Length Required", category: "4xx", description: "", asset: "" },
    { code: 412, name: "Precondition Failed", category: "4xx", description: "", asset: "" },
    { code: 413, name: "Payload Too Large", category: "4xx", description: "", asset: "" },
    { code: 414, name: "URI Too Long", category: "4xx", description: "", asset: "" },
    { code: 415, name: "Unsupported Media Type", category: "4xx", description: "", asset: "" },
    { code: 416, name: "Range Not Satisfiable", category: "4xx", description: "", asset: "" },
    { code: 417, name: "Expectation Failed", category: "4xx", description: "", asset: "" },
    { code: 418, name: "I'm a Teapot", category: "4xx", description: "", asset: "" },
    { code: 421, name: "Misdirected Request", category: "4xx", description: "", asset: "" },
    { code: 422, name: "Unprocessable Entity", category: "4xx", description: "", asset: "" },
    { code: 423, name: "Locked", category: "4xx", description: "", asset: "" },
    { code: 424, name: "Failed Dependency", category: "4xx", description: "", asset: "" },
    { code: 425, name: "Too Early", category: "4xx", description: "", asset: "" },
    { code: 426, name: "Upgrade Required", category: "4xx", description: "", asset: "" },
    { code: 428, name: "Precondition Required", category: "4xx", description: "", asset: "" },
    { code: 429, name: "Too Many Requests", category: "4xx", description: "", asset: "" },
    { code: 431, name: "Request Header Fields Too Large", category: "4xx", description: "", asset: "" },
    { code: 451, name: "Unavailable For Legal Reasons", category: "4xx", description: "", asset: "" },

    /* 5xx Server Error */
    { code: 500, name: "Internal Server Error", category: "5xx", description: "", asset: "" },
    { code: 501, name: "Not Implemented", category: "5xx", description: "", asset: "" },
    { code: 502, name: "Bad Gateway", category: "5xx", description: "", asset: "" },
    { code: 503, name: "Service Unavailable", category: "5xx", description: "", asset: "" },
    { code: 504, name: "Gateway Timeout", category: "5xx", description: "", asset: "" },
    { code: 505, name: "HTTP Version Not Supported", category: "5xx", description: "", asset: "" },
    { code: 506, name: "Variant Also Negotiates", category: "5xx", description: "", asset: "" },
    { code: 507, name: "Insufficient Storage", category: "5xx", description: "", asset: "" },
    { code: 508, name: "Loop Detected", category: "5xx", description: "", asset: "" },
    { code: 510, name: "Not Extended", category: "5xx", description: "", asset: "" },
    { code: 511, name: "Network Authentication Required", category: "5xx", description: "", asset: "" }
];
