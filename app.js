function calculatePosition() {
  const accountBalance = parseFloat(document.getElementById('accountBalance').value);
  const riskPercentage = parseFloat(document.getElementById('riskPercentage').value);
  const entryPrice = parseFloat(document.getElementById('entryPrice').value);
  const stopLossPrice = parseFloat(document.getElementById('stopLossPrice').value);

  if (isNaN(accountBalance) || isNaN(riskPercentage) || isNaN(entryPrice) || isNaN(stopLossPrice)) {
    alert("Please fill all fields with valid numbers.");
    return;
  }

  // Calculate Risk Amount
  const riskAmount = (accountBalance * riskPercentage) / 100;

  // Calculate Stop Loss Amount
  const stopLossAmount = entryPrice - stopLossPrice;

  // Calculate Position Size (Units)
  const positionSizeUnits = riskAmount / stopLossAmount;

  // Calculate Position Size (INR)
  const positionSizeINR = positionSizeUnits * entryPrice;

  // Display Result
  document.getElementById('positionSize').textContent = `₹${positionSizeINR.toFixed(2)} (${positionSizeUnits.toFixed(2)} units)`;
}