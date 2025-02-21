function updateTimer() {
    const now = new Date();
    const options = { year: 'numeric', month: 'numeric', day: 'numeric', hour: 'numeric', minute: 'numeric', second: 'numeric', hour12: true };
    const formattedDate = now.toLocaleString('en-US', options);
    document.getElementById('timer').innerText = formattedDate;
}

// Update the timer every second
setInterval(updateTimer, 1000);

// Initial call to display the timer immediately
updateTimer();
updateTime();