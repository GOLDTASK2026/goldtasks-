let balance = 0;
let balance = Number(localStorage.getItem("balance")) || 0;

function updateBalance() {
    const balanceText = document.getElementById("balance");

    if (balanceText) {
        balanceText.innerText = "₦" + balance;
    }

    localStorage.setItem("balance", balance);
}

updateBalance();
function watchAd() {
  alert("Ad started!");
  balance += 10;
  alert("You earned ₦10");
}

function dailyReward() {
  alert("Daily reward received!");
  balance += 50;
}

function withdraw() {
  alert("Withdraw page coming soon");
}
