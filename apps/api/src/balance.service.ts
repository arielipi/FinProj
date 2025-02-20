import { Injectable } from '@nestjs/common';
import * as fs from 'fs';
import * as path from 'path';
import { Balance } from './Balance';

const DATA_FILE = path.join(__dirname, 'balances.json');

@Injectable()
export class BalanceService {
  private loadBalances(): Record<string, Balance[]> {
    if (!fs.existsSync(DATA_FILE)) {
      return {};
    }
    return JSON.parse(fs.readFileSync(DATA_FILE, 'utf-8'));
  }

  private saveBalances(balances: Record<string, Balance[]>) {
    fs.writeFileSync(DATA_FILE, JSON.stringify(balances, null, 2));
  }

  getBalances(userId: string): Balance[] {
    const balances = this.loadBalances();
    return balances[userId] || [];
  }

  addBalance(userId: string, balance: Balance) {
    const balances = this.loadBalances();
    if (!balances[userId]) {
      balances[userId] = [];
    }
    const existing = balances[userId].find(b => b.asset === balance.asset);
    if (existing) {
      existing.amount += balance.amount;
    } else {
      balances[userId].push(balance);
    }
    this.saveBalances(balances);
    return { message: 'Balance updated successfully' };
  }

  removeBalance(userId: string, asset: string) {
    const balances = this.loadBalances();
    if (!balances[userId]) {
      return { message: 'No balances found for this user' };
    }
    balances[userId] = balances[userId].filter(b => b.asset !== asset);
    this.saveBalances(balances);
    return { message: 'Asset removed successfully' };
  }

  async getTotalBalance(userId: string, currency: string) {
    const balances = this.loadBalances();
    const userBalances = balances[userId] || [];

    // Mock conversion rates (in real-world scenarios, integrate an API)
    const conversionRates: Record<string, number> = { BTC: 50000, ETH: 3000, USDT: 1 };
    let total = 0;
    for (const { asset, amount } of userBalances) {
      const rate = conversionRates[asset] ?? 1;
      total += amount * rate;
    }
    return { total, currency };
  }
}