// Task 1. Create the Asset Module

export const assets = [
    { id: 1, name: "Tech Firm", type: "stock", price: 285, quantity: 40 },
    { id: 2, name: "Savings", type: "bond", price: 265, quantity: 110 },
    { id: 3, name: "Corporate", type: "stock", price: 180, quantity: 15 },
];

// get asset details by ID
export function getAssetById(id) {
    return assets.find(asset => asset.id === id);
};