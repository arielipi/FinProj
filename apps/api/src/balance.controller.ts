import { Controller, Get, Post, Delete, Param, Body, Headers } from '@nestjs/common';
import { BalanceService } from './balance.service';

interface Balance {
  asset: string;
  amount: number;
}

@Controller('balances')
export class BalanceController {
  constructor(private readonly balanceService: BalanceService) {}

  // Add balance to user
  @Post('add')
  addBalance(@Headers('X-User-ID') userId: string, @Body() balance: Balance) {
    return this.balanceService.addBalance(userId, balance);
  }

  // Remove asset from user balance
  @Delete('remove/:asset')
  removeBalance(@Headers('X-User-ID') userId: string, @Param('asset') asset: string) {
    return this.balanceService.removeBalance(userId, asset);
  }

  // Get total balance of user in a currency
  @Get('total/:currency')
  getTotalBalance(@Headers('X-User-ID') userId: string, @Param('currency') currency: string) {
    return this.balanceService.getTotalBalance(userId, currency);
  }

  // Fetch user balance
  @Get(':userId')
  async getBalance(@Param('userId') userId: string) {
    return await this.balanceService.getBalance(userId);
  }

  // Fetch all balances (admin endpoint)
  @Get()
  async getAllBalances(): Promise<any> {
    return await this.balanceService.getAllBalances();
  }
}
