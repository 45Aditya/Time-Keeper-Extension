function calculateTimeRemaining() {
    const now = new Date();
    const currentYear = now.getFullYear();
    const yearEnd = new Date(currentYear + 1, 0, 1); 

    const timeDifference = yearEnd - now;

    // Breakdown time into components
    const seconds = Math.floor((timeDifference / 1000) % 60);
    const minutes = Math.floor((timeDifference / (1000 * 60)) % 60);
    const hours = Math.floor((timeDifference / (1000 * 60 * 60)) % 24);
    const days = Math.floor((timeDifference / (1000 * 60 * 60 * 24)) % 30.44);
    const months = Math.floor((timeDifference / (1000 * 60 * 60 * 24 * 30.44)) % 12);
    const years = Math.floor(timeDifference / (1000 * 60 * 60 * 24 * 365.25));

    const countdownString = `${years} years, ${months} months, ${days} days, ${hours} hours, ${minutes} minutes, ${seconds} seconds`;

    document.getElementById('countdown').textContent = countdownString;
}

setInterval(calculateTimeRemaining, 1000);

calculateTimeRemaining();
