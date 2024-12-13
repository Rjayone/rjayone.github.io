const currentUrl = window.location.href;
window.onload = function() {
    // var isIOS = /iPhone|iPad|iPod|Macintosh|Mac OS/i.test(navigator.userAgent);
    // var isAndroid = /Android/i.test(navigator.userAgent);

     if (isIOS) {
        window.location.href = "https://apps.apple.com/app/id1554312100";
     }
    
    // if (isAndroid) {
    //     window.location.href = "https://play.google.com/store/apps/details?id=com.incredum.wrd";
    // }
};
// document.addEventListener("visibilitychange", function () {
//     if (document.visibilityState === "visible") {
//         window.location.href = "https://apps.apple.com/app/id1554312100";
//     }
// });

// Check if the browser is Instagram's in-app browser
if (navigator.userAgent.includes("Instagram")) {
    window.location.href = currentUrl;
}

document.addEventListener("DOMContentLoaded", () => {
    const currentUrl = encodeURIComponent(window.location.href);
    const metaTag = document.createElement("meta");
    metaTag.name = "apple-itunes-app";
    metaTag.content = "app-id=1554312100, app-argument=" + currentUrl;
    document.head.appendChild(metaTag);
});


document.getElementById("open_in_app").addEventListener("click", function() {
    window.location.href = currentUrl;
    alert("try to open " + currentUrl);
});