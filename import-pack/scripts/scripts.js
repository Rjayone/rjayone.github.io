window.onload = function() {
    if (navigator.userAgent.includes("Instagram")) {
        // alert("Open from inst");
    }

     setup();
     setupIFrame();
};

function setup() {
    const id = new URLSearchParams(window.location.search).get("id");
    const url = "wrdapp://wrd.app/import-pack?id=" + id

    addMetaTag("al:ios:app_store_id", "1554312100");
    addMetaTag("al:ios:app_name", "WRD");
    addMetaTag("al:ios:url", url);
    addMetaTag("al:android:url", url);
    addMetaTag("al:android:app_name", "WRD");
    addMetaTag("al:android:package", "com.incredum.wrd");
    addMetaTag("apple-itunes-app", "app-id=1554312100, app-argument=" + url);

    document.getElementById("open_in_app").addEventListener("click", function() {
        window.location = url;
    });

    window.location = url;
}

function addMetaTag(name, content) {
    const metaTag = document.createElement("meta");
    metaTag.name = name;
    metaTag.content = content;
    document.head.appendChild(metaTag);
}

function setupIFrame() {
    const id = new URLSearchParams(window.location.search).get("id");
    const url = "wrdapp://wrd.app/import-pack?id=" + id

    var iframeContEl = document.getElementById('wrd_frame_cont') || document.body;
    var iframeEl = document.createElement('iframe');
    iframeEl.setAttribute("src", url);
    iframeContEl.appendChild(iframeEl);
    var wasRedirected = false;

    window.addEventListener('pagehide', function () {
      wasRedirected = true;
    }, false);

    window.addEventListener('blur', function () {
      wasRedirected = true;
    }, false);

    if (iframeEl !== null) {
      iframeEl.src = url;
    }

    setTimeout(() => {
      if (!wasRedirected) {
            openStore();
      }
    }, 2000);
}

function openStore() {
    var isIOS = /iPhone|iPad|iPod|Macintosh|Mac OS/i.test(navigator.userAgent);
    var isAndroid = /Android/i.test(navigator.userAgent);

     if (isIOS) {
        window.location.href = "https://apps.apple.com/app/id1554312100";
     }
    
    if (isAndroid) {
        window.location.href = "https://play.google.com/store/apps/details?id=com.incredum.wrd";
    }
}