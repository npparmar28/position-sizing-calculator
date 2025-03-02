function calculatePosition() {
  const accountBalance = parseFloat(document.getElementById('accountBalance').value);
  const riskPercentage = parseFloat(document.getElementById('riskPercentage').value);
  const stopLoss = parseFloat(document.getElementById('stopLoss').value);
  const entryPrice = parseFloat(document.getElementById('entryPrice').value);

  if (isNaN(accountBalance) || isNaN(riskPercentage) || isNaN(stopLoss) || isNaN(entryPrice)) {
    alert("Please fill all fields with valid numbers.");
    return;
  }

  const riskAmount = (accountBalance * riskPercentage) / 100;
  const positionSize = riskAmount / stopLoss;
  const quantity = positionSize / entryPrice;

  document.getElementById('positionSize').textContent = `₹${positionSize.toFixed(2)} (${quantity.toFixed(2)} units)`;
}