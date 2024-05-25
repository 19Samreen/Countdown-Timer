"use strict";
//Countdown timer
function countdown(endDate) {
    const interval = setInterval(() => {
        const now = new Date().getTime();
        const distance = endDate.getTime() - now;
        if (distance < 0) {
            clearInterval(interval);
            console.log("Countdown has ended!");
        }
        else {
            const days = Math.floor(distance / (1000 * 60 * 60 * 24));
            const hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
            const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
            const seconds = Math.floor((distance % (1000 * 60)) / 1000);
            console.log(`Countdown: ${days} days ${hours} hours ${minutes} minutes ${seconds} seconds`);
        }
    }, 1000);
}
// Set the end date for the countdown timer (e.g., 10 days from now)
const endDate = new Date();
endDate.setDate(endDate.getDate() + 10); // Change 10 to the number of days you want for the countdown
countdown(endDate);
