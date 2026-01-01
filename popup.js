const slider = document.getElementById("speedSlider");
const speedValue = document.getElementById("speedValue");

slider.addEventListener("input", () => {
    const speed = parseFloat(slider.value);
    speedValue.textContent = `${speed}x`;

    // Only send message to YouTube pages
    chrome.tabs.query({ active: true, currentWindow: true }, (tabs) => {
        const tab = tabs[0];
        if (!tab || !tab.url.includes("youtube.com")) return;

        chrome.tabs.sendMessage(tab.id, { action: "setSpeed", speed })
        .catch(err => {
            console.log("Content script not ready yet:", err);
        });
    });
});
