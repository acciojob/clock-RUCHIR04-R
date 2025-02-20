//your JS code here. If required.
function updateTimer()
{
	const now = new Date();
	const options = {
		weekday: 'long',
		year: 'numeric',
		month: 'long',
		day: 'numeric',
		hour: '2-digit',
		minute: '2-digit',
		second:'2-digit',
		hour12: true;
	};
	const formattedDate =  now.toLocaleString('en-US', options);
document.getElementById('timer').innerText = formattedDate;
}
setInterval(updatetime, 1000);
updateTime();