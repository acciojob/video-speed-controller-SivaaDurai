const player = document.querySelector(".player");

const video = player.querySelector(".viewer");

const toggle = player.querySelector(".toggle");

const progress = player.querySelector(".progress");

const progressFilled = player.querySelector(".progress__filled");

const volume = player.querySelector(".volume");

const playbackSpeed = player.querySelector(".playbackSpeed");

const skipButtons = player.querySelectorAll(".skip");

function togglePlay() {

    if (video.paused) {
        video.play();
    } else {
        video.pause();
    }

}



function updateButton() {

    const icon = video.paused ? "►" : "❚ ❚";

    toggle.textContent = icon;

}


// Update Progress Bar
function updateProgress() {

    const percentage = (video.currentTime / video.duration) * 100;

    progressFilled.style.width = percentage + "%";

}


function handleVolume() {

    video.volume = volume.value;

}



function handleSpeed() {

    video.playbackRate = playbackSpeed.value;

}


function skip() {

    video.currentTime += Number(this.dataset.skip);

}


function scrub(event) {

    const scrubTime = (event.offsetX / progress.offsetWidth) * video.duration;

    video.currentTime = scrubTime;

}


toggle.addEventListener("click", togglePlay);

video.addEventListener("click", togglePlay);

video.addEventListener("play", updateButton);

video.addEventListener("pause", updateButton);

video.addEventListener("timeupdate", updateProgress);

volume.addEventListener("input", handleVolume);

playbackSpeed.addEventListener("input", handleSpeed);

skipButtons.forEach(button => {
    button.addEventListener("click", skip);
});

progress.addEventListener("click", scrub);