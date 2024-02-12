function updateVolume() {
    var audio = document.getElementById('audioPlayer');
    var volumeSlider = document.getElementById('volumeSlider');
    audio.volume = volumeSlider.value;
}

function togglePlayPause() {
    var audio = document.getElementById('audioPlayer');
    if (audio.paused) {
        audio.play();
    } else {
        audio.pause();
    }
}