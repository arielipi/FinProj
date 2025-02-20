import { Module } from '@nestjs/common';
const crypto = require('crypto');
import { ScheduleModule } from '@nestjs/schedule';
import { HttpModule } from '@nestjs/axios';
import { BalanceModule } from './balance.module';
import { RateModule } from './rate.module';

// Ensure that the `crypto` module is available globally
if (typeof globalThis.crypto === 'undefined') {
  globalThis.crypto = crypto;
}
@Module({
  imports: [
    HttpModule, // Ensure HttpModule is available globally
    ScheduleModule.forRoot(), // Enables background job scheduling
    BalanceModule, // Balance service module
    RateModule, // Rate service module
  ],
})
export class AppModule {}
