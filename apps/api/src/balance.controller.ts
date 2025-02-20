import { Controller, Get, Post, Delete, Body, Headers, Param } from '@nestjs/common';
import { BalanceService } from './balance.service';
import { Balance } from './Balance';

@Controller('balances')
export class BalanceController {
  constructor(private readonly balanceService: BalanceService) {}

  @Get()
  getBalances(@Headers('X-User-ID') userId: string) {
    return this.balanceService.getBalances(userId);
  }

  @Post('add')
  addBalance(@Headers('X-User-ID') userId: string, @Body() balance: Balance) {
    return this.balanceService.addBalance(userId, balance);
  }

  @Delete('remove/:asset')
  removeBalance(@Headers('X-User-ID') userId: string, @Param('asset') asset: string) {
    return this.balanceService.removeBalance(userId, asset);
  }

  @Get('total/:currency')
  getTotalBalance(@Headers('X-User-ID') userId: string, @Param('currency') currency: string) {
    return this.balanceService.getTotalBalance(userId, currency);
  }
}
