document.addEventListener('DOMContentLoaded', function () {
    document.getElementById('toggle-highlight').addEventListener('click', function () {
        chrome.tabs.query({ active: true, currentWindow: true }, function (tabs) {
            chrome.tabs.sendMessage(tabs[0].id, { action: "toggleHighlight" });
        });
    });

    document.getElementById('comment').addEventListener('click', function () {
        const commentText = prompt("Enter your comment:");
        if (commentText !== null) {
            chrome.tabs.query({ active: true, currentWindow: true }, function (tabs) {
                chrome.tabs.sendMessage(tabs[0].id, { action: "addComment", text: commentText });
            });
        }
    });

    document.getElementById('screenshot').addEventListener('click', function () {
        chrome.runtime.sendMessage({ action: "captureScreenshot" });
    });
});
document.addEventListener('DOMContentLoaded', function () {
    document.getElementById('some-action').addEventListener('click', function () {
        chrome.tabs.query({ active: true, currentWindow: true }, function (tabs) {
            chrome.tabs.sendMessage(tabs[0].id, { action: "performAction" });
        });
    });
});
