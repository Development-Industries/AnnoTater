chrome.runtime.onMessage.addListener(function (request, sender, sendResponse) {
    if (request.action === "toggleHighlight") {
        const selection = window.getSelection();
        if (selection.rangeCount) {
            const range = selection.getRangeAt(0);
            const selectedText = selection.toString();
            const span = document.createElement('span');

            // Check if the selected range is already highlighted
            if (range.commonAncestorContainer.parentNode.tagName === 'SPAN' &&
                range.commonAncestorContainer.parentNode.style.backgroundColor === 'yellow') {
                // Remove the highlight by replacing the span with text
                const parent = range.commonAncestorContainer.parentNode;
                parent.outerHTML = parent.innerHTML;  // This removes the span, keeping the inner text
            } else {
                // Highlight the selected text by wrapping it in a span with a yellow background
                span.style.backgroundColor = 'yellow';
                span.textContent = selectedText;
                range.deleteContents();  // Clear the selected text
                range.insertNode(span);  // Insert the new span with highlighted text
            }
            sendResponse({ status: "Highlight toggled" });
        }
    } else if (request.action === "addComment") {
        const selection = window.getSelection();
        if (!selection.isCollapsed && request.text) {
            const range = selection.getRangeAt(0);
            const commentNode = document.createElement('span');
            commentNode.textContent = request.text;
            commentNode.style.backgroundColor = 'lightblue';
            range.insertNode(commentNode);
            sendResponse({ status: "Comment added" });
        }
    } else if (request.action === "captureScreenshot") {
        // This action should be handled in the background script, not content script
        // Placeholder response for consistency
        sendResponse({ status: "Screenshot function should be in the background script" });
    } else {
        // Handle any other actions or error cases
        sendResponse({ status: "Action not handled" });
    }
});
chrome.runtime.onMessage.addListener(function (request, sender, sendResponse) {
    if (request.action === "performAction") {
        // Perform the action
        console.log("Action performed on the page!");
    }
});
