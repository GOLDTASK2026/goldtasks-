// Load balance from localStorage
let balance = Number(localStorage.getItem("balance")) || 0;
let history = [];

// Update balance on the page
function updateBalance() {
    const balanceText = document.getElementById("balance");

    if (balanceText) {
        balanceText.innerText = "₦" + balance;
    }

    localStorage.setItem("balance", balance);
}

// Watch Ad
function watchAd() {
    alert("Ad is starting...");

    // Reward after watching the ad
    balance += 10;
    history.push("Earned ₦10 from watching an ad");

    updateBalance();

    alert("You earned ₦10!");
}

// Complete Task
function completeTask() {
    balance += 20;
    history.push("Earned ₦20 from completing a task");

    updateBalance();

    alert("Task completed! You earned ₦20.");
}

// Withdraw
function withdraw() {
    if (balance >= 1000) {
        alert("Withdrawal request submitted!");
        balance = 0;
        updateBalance();
    } else {
        alert("Minimum withdrawal is ₦1000.");
    }
}

// Show balance when page loads
window.onload = function () {
    updateBalance();
};
