// Apply playback rate to the current video element
function setPlaybackRate(rate) {
    const video = document.querySelector("video");
    
    if (!video) {
        console.warn("Video not found yet, retrying...");
        setTimeout(() => setPlaybackRate(rate), 500);
        return;
    }

    video.playbackRate = rate;
    console.log(`Playback speed set to ${rate}x`);
}

// Listen for popup messages
chrome.runtime.onMessage.addListener((msg) => {
    if (msg.action === "setSpeed") {
        setPlaybackRate(msg.speed);
    }
});
