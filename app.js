function calculatePosition() {
  const accountBalance = parseFloat(document.getElementById('accountBalance').value);
  const riskPercentage = parseFloat(document.getElementById('riskPercentage').value);
  const entryPrice = parseFloat(document.getElementById('entryPrice').value);
  const stopLossPrice = parseFloat(document.getElementById('stopLossPrice').value);

  if (isNaN(accountBalance) || isNaN(riskPercentage) || isNaN(entryPrice) || isNaN(stopLossPrice)) {
    alert("Please fill all fields with valid numbers.");
    return;
  }

  // Calculate Stop Loss Amount (Difference between Entry Price and Stop Loss Price)
  const stopLossAmount = entryPrice - stopLossPrice;

  // Calculate Risk Amount
  const riskAmount = (accountBalance * riskPercentage) / 100;

  // Calculate Position Size
  const positionSize = riskAmount / stopLossAmount;

  // Calculate Quantity
  const quantity = positionSize;

  // Display Result
  document.getElementById('positionSize').textContent = `₹${positionSize.toFixed(2)} (${quantity.toFixed(2)} units)`;
}