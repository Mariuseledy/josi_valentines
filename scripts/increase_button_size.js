let buttonSize = 16;
let t = ["Are you sure?", "Really sure?", "Are you positive???", "Pookie please", "Just think about it", "If you say no, I'll be very sad", "I'll be very very sad", "I'll be very very very sad", "I'll be very very very very sad", "Ok fine, I'll stop asking...", "Just kidding, PLEASE SAY YES", "I'll be very very very very very sad", "You're breaking my heart ;("];
let currentIndex = 0;

function increaseSize() {
    document.getElementById('no-button').textContent = t[currentIndex];
    currentIndex = (currentIndex + 1) % t.length;

    buttonSize += 16;
    document.getElementById('yes-button').style.fontSize = buttonSize + 'px';
}