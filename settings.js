document.getElementById('settings-form').addEventListener('submit', function (event) {
    event.preventDefault();
    const highlightColor = document.getElementById('highlight-color').value;
    const backgroundImage = document.getElementById('background-image').value;
    chrome.storage.sync.set({ highlightColor, backgroundImage }, () => {
        alert('Settings saved!');
        applySettings();
    });
});

function applySettings() {
    chrome.storage.sync.get(['highlightColor', 'backgroundImage'], function (items) {
        document.body.style.backgroundColor = items.highlightColor;
        if (items.backgroundImage) {
            document.body.style.backgroundImage = `url('${items.backgroundImage}')`;
        }
    });
}

// Call applySettings on page load to apply the saved settings
document.addEventListener('DOMContentLoaded', applySettings);
