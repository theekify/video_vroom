document.getElementById("setSpeedBtn").addEventListener("click", () => {
    const speed = parseFloat(document.getElementById("speed").value);
    if (speed && speed > 0) {
        // Send message to content script
        chrome.tabs.query({ active: true, currentWindow: true }, (tabs) => {
            chrome.tabs.sendMessage(tabs[0].id, { action: "setSpeed", speed });
        });
    }
});
