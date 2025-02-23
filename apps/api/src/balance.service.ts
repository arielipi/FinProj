import { Injectable } from '@nestjs/common';
import { FileService } from '@app/shared-services/file.service';

interface Balances {
  [userId: string]: { [asset: string]: number }; // Defines userId maps to asset balances
}

interface Balance {
  asset: string;
  amount: number;
}

@Injectable()
export class BalanceService {
  private readonly balanceFile = 'balances.json';

  constructor(private readonly fileService: FileService) {}

  // Fetch user balance from file
  async getBalance(userId: string): Promise<{ [asset: string]: number } | null> {
    const balances: Balances = await this.fileService.readJsonFile(this.balanceFile) || {};
    return balances[userId] ?? null;
  }

  // Add balance to a user's asset
  async addBalance(userId: string, balance: Balance): Promise<void> {
    const balances: Balances = await this.fileService.readJsonFile(this.balanceFile) || {};
    if (!balances[userId]) {
      balances[userId] = {};
    }

    if (balances[userId][balance.asset]) {
      balances[userId][balance.asset] += balance.amount; // Add to existing asset balance
    } else {
      balances[userId][balance.asset] = balance.amount; // Set new asset balance
    }

    await this.fileService.writeJsonFile(this.balanceFile, balances);
  }

  // Remove a specific asset for a user
  async removeBalance(userId: string, asset: string): Promise<void> {
    const balances: Balances = await this.fileService.readJsonFile(this.balanceFile) || {};
    if (balances[userId] && balances[userId][asset]) {
      delete balances[userId][asset]; // Remove the asset
      await this.fileService.writeJsonFile(this.balanceFile, balances);
    }
  }

  // Get the total balance for a user in a specific currency
  async getTotalBalance(userId: string, currency: string): Promise<number> {
    const balances: Balances = await this.fileService.readJsonFile(this.balanceFile) || {};
    const userBalances = balances[userId] || {};
    
    // Calculate total balance (assuming exchange rate logic exists or is added later)
    let totalBalance = 0;
    for (const [asset, amount] of Object.entries(userBalances)) {
      // Example: You may need to convert the asset to the requested currency, using exchange rates.
      // For now, just summing the amounts.
      totalBalance += amount;
    }

    return totalBalance;
  }

  // Fetch all balances (useful for admin operations)
  async getAllBalances(): Promise<Balances> {
    return await this.fileService.readJsonFile(this.balanceFile) || {};
  }
}
