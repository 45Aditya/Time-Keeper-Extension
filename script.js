function calculateTimeRemaining() {
    const now = new Date();
    const currentYear = now.getFullYear();
    const nextYear = new Date(currentYear + 1, 0, 1); // New Year's start time
    
    const timeDifference = nextYear - now;

    // Breakdown time into components
    const seconds = Math.floor((timeDifference / 1000) % 60);
    const minutes = Math.floor((timeDifference / (1000 * 60)) % 60);
    const hours = Math.floor((timeDifference / (1000 * 60 * 60)) % 24);
    const days = Math.floor(timeDifference / (1000 * 60 * 60 * 24));

    const countdownString = `${days} days, ${hours} hours, ${minutes} minutes, ${seconds} seconds`;

    // Display countdown
    document.getElementById('countdown').textContent = countdownString;

    // When countdown reaches zero (Happy New Year), you can reset or trigger an event
    if (timeDifference <= 0) {
        clearInterval(countdownInterval);
        document.getElementById('countdown').textContent = "Happy New Year!";
    }
}

// Run the function every second to update the countdown
const countdownInterval = setInterval(calculateTimeRemaining, 1000);

// Initial call to set the countdown immediately when the page loads
calculateTimeRemaining();