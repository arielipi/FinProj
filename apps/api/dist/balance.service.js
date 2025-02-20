"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.BalanceService = void 0;
const common_1 = require("@nestjs/common");
const fs = require("fs");
const path = require("path");
const DATA_FILE = path.join(__dirname, 'balances.json');
let BalanceService = class BalanceService {
    loadBalances() {
        if (!fs.existsSync(DATA_FILE)) {
            return {};
        }
        return JSON.parse(fs.readFileSync(DATA_FILE, 'utf-8'));
    }
    saveBalances(balances) {
        fs.writeFileSync(DATA_FILE, JSON.stringify(balances, null, 2));
    }
    getBalances(userId) {
        const balances = this.loadBalances();
        return balances[userId] || [];
    }
    addBalance(userId, balance) {
        const balances = this.loadBalances();
        if (!balances[userId]) {
            balances[userId] = [];
        }
        const existing = balances[userId].find(b => b.asset === balance.asset);
        if (existing) {
            existing.amount += balance.amount;
        }
        else {
            balances[userId].push(balance);
        }
        this.saveBalances(balances);
        return { message: 'Balance updated successfully' };
    }
    removeBalance(userId, asset) {
        const balances = this.loadBalances();
        if (!balances[userId]) {
            return { message: 'No balances found for this user' };
        }
        balances[userId] = balances[userId].filter(b => b.asset !== asset);
        this.saveBalances(balances);
        return { message: 'Asset removed successfully' };
    }
    async getTotalBalance(userId, currency) {
        const balances = this.loadBalances();
        const userBalances = balances[userId] || [];
        const conversionRates = { BTC: 50000, ETH: 3000, USDT: 1 };
        let total = 0;
        for (const { asset, amount } of userBalances) {
            const rate = conversionRates[asset] ?? 1;
            total += amount * rate;
        }
        return { total, currency };
    }
};
exports.BalanceService = BalanceService;
exports.BalanceService = BalanceService = __decorate([
    (0, common_1.Injectable)()
], BalanceService);
//# sourceMappingURL=balance.service.js.map