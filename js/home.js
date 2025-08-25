const validPin = 1234;

// Add money feature

document.getElementById("add-money-btn")
  .addEventListener("click", function (e) {
    e.preventDefault();
    const accountNumber = document.getElementById("account-number").value;

    const amount = parseInt(document.getElementById("add-amount").value);

    const pinNumber = parseInt(document.getElementById("add-pin").value);

    const availableBalance = parseInt(document.getElementById("available-balance").innerText);

    if (accountNumber.length < 11) {
      alert("Invalid account Number");
      return;
    }

    if (pinNumber !== validPin) {
      alert("Invalid pin Number");
      return;
    }

    const totalNewAvailableBalance = amount + availableBalance;
    document.getElementById("available-balance").innerText = totalNewAvailableBalance;

    document.getElementById("account-number").value = "";
    document.getElementById("add-amount").value = "";
    document.getElementById("add-pin").value = "";
  });

// Cash-out money feature

document.getElementById("withdraw-btn").addEventListener("click", function (e) {
  e.preventDefault();

  const agentNumber = document.getElementById("agent-number").value;
  console.log(agentNumber)

  const amount = parseInt(document.getElementById("withdraw-amount").value);
  
  const pinNumber = parseInt(document.getElementById('cash-out-pin').value);

  const availableBalance = parseInt(document.getElementById("available-balance").innerText);

  if (agentNumber.length < 11) {
      alert("Invalid account Number");
      return;
    }

    if (pinNumber !== validPin) {
      alert("Invalid pin Number");
      return;
    }

  const totalNewAvailableBalance = availableBalance - amount;

  document.getElementById("available-balance").innerText = totalNewAvailableBalance;

  document.getElementById("agent-number").value = "";
  document.getElementById("withdraw-amount").value = "";
  document.getElementById('cash-out-pin').value = "";
});

// Toggling feature

document.getElementById("add-button").addEventListener("click", function (e) {
  document.getElementById("cash-out-parent").style.display = "none";
  document.getElementById("add-money-parent").style.display = "block";
});
document.getElementById("cash-out-button")
  .addEventListener("click", function () {
    document.getElementById("add-money-parent").style.display = "none";
    document.getElementById("cash-out-parent").style.display = "block";
  });
