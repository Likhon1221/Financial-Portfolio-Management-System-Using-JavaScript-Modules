// Task 2. Create the portfolio module

import {assets} from "./asset.js";

// calculates the total value of the portfolio
export function calculatePortfolioValue() {
    let total = 0;
    for (let i = 0; i < assets.length; i++) {
        total += assets[i].price * assets[i].quantity;
    }
    return total;
}

// calculates the percentage allocation of each asset in the portfolio
export function getPortfolioAllocation() {
    let totalPrice = calculatePortfolioValue();
    return assets.map(asset => ({
        name: asset.name,
        allocation: ((asset.price * asset.quantity) / totalPrice * 100).toFixed(2) + "%"
    }));
};