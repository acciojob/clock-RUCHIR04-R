function updateTime() {
    const now = new Date();
    const dateString = now.toLocaleDateString();
    const timeString = now.toLocaleTimeString();
    document.getElementById('timer').innerText = `${dateString} ${timeString}`;
}

// Update the timer immediately
updateTime();
// Set an interval to update the timer every second
setInterval(updateTime, 1000);