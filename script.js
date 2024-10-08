document.getElementById('start-button').addEventListener('click', function() {
    const targetDateInput = document.getElementById('target-date').value;
    const targetDate = new Date(targetDateInput);

    if (!targetDateInput) {
        alert('Please select a valid date and time.');
        return;
    }

    const timerInterval = setInterval(() => {
        const currentTime = new Date().getTime();
        const timeDifference = targetDate.getTime() - currentTime;

        if (timeDifference <= 0) {
            clearInterval(timerInterval);
            document.getElementById('timer-display').innerHTML = "<p>Time's up!</p>";
            return;
        }

        const days = Math.floor(timeDifference / (1000 * 60 * 60 * 24));
        const hours = Math.floor((timeDifference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
        const minutes = Math.floor((timeDifference % (1000 * 60 * 60)) / (1000 * 60));
        const seconds = Math.floor((timeDifference % (1000 * 60)) / 1000);

        document.getElementById('days').textContent = days;
        document.getElementById('hours').textContent = hours;
        document.getElementById('minutes').textContent = minutes;
        document.getElementById('seconds').textContent = seconds;
    }, 1000);
});
