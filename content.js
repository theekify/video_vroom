// content.js
function setPlaybackRate(rate) {
    const video = document.querySelector('video');
    if (video) {
        video.playbackRate = rate;
        console.log(`Playback speed set to ${rate}`);
    }
}

// Listen for messages from popup
chrome.runtime.onMessage.addListener((msg) => {
    if (msg.action === "setSpeed") {
        setPlaybackRate(msg.speed);
    }
});
