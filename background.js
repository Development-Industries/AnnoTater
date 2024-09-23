chrome.runtime.onInstalled.addListener(() => {
    console.log('AnnoTater extension installed.');
    // Initialize default settings or perform upgrade tasks
});

chrome.runtime.onMessage.addListener((request, sender, sendResponse) => {
    if (request.action === "captureScreenshot") {
        chrome.tabs.captureVisibleTab(null, {}, function (imageUri) {
            sendResponse({ imgUri: imageUri });
        });
        return true; // indicates that the response is asynchronous
    }
});
