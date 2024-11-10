// Task 3. Create the Transaction Module

import {assets} from "./asset.js";
import {getAssetById} from "./asset.js";

export class Transaction {
    constructor(assetId, type, quantity) {
        this.asset = getAssetById(assetId);
        this.type = type;
        this.quantity = quantity;
        this.apply();                     
    }

    apply() {
        if (this.type === "buy") {
            this.asset.quantity += this.quantity;
        } else if (this.type === "sell") {
            if (this.asset.quantity >= this.quantity) {
                this.asset.quantity -= this.quantity;
            } else {
                throw new Error(`Insufficient quantity for sale of ${this.asset.name}`);
            }
        }
    }
};