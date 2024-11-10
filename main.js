// Task 4. Create the Main Application

import { calculatePortfolioValue, getPortfolioAllocation } from './portfolio.js';
import { Transaction } from './transaction.js';

function displayOutput(text, isTitle = false) {
    const outputDiv = document.getElementById("output");
    const outputContent = document.createElement("div");

    if (isTitle) {
        outputContent.innerHTML = `<div class="section-title"><h3>${text}</h3></div>`;
    } else {
        outputContent.innerHTML = `<p>${text}</p>`;
    }

    outputDiv.appendChild(outputContent);
}

displayOutput(`Portfolio Value: $${calculatePortfolioValue().toFixed(2)}`, true);

const allocation = getPortfolioAllocation();
displayOutput("Portfolio Allocation:", true);
for (let i = 0; i < allocation.length; i++) {
    displayOutput(`${allocation[i].name}: ${allocation[i].allocation}`);
}

try {
    const buyTransaction = new Transaction(1, "buy", 20);
    const sellTransaction = new Transaction(2, "sell", 40);

    buyTransaction.apply();
    sellTransaction.apply();

    displayOutput("Transactions:", true);
    displayOutput("Bought 20 units of Tech Firm");
    displayOutput("Sold 40 units of Savings");

    displayOutput(`Updated Portfolio Value: $${calculatePortfolioValue().toFixed(2)}`, true);
    displayOutput("Updated Portfolio Allocation:", true);

    const updatedAllocation = getPortfolioAllocation();
    for (let i = 0; i < updatedAllocation.length; i++) {
        displayOutput(`${updatedAllocation[i].name}: ${updatedAllocation[i].allocation}`);
    }

} catch (error) {
    console.error(error.message);
    displayOutput(`Error: ${error.message}`);
};