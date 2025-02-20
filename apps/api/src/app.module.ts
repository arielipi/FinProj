import { Module } from '@nestjs/common';
// import { AppController } from './app.controller';
// import { AppService } from './app.service';
import { BalanceController } from './balance.controller';
import { BalanceService } from './balance.service';

@Module({
  imports: [],
  controllers: [BalanceController], //[AppController],
  providers: [BalanceService]//[AppService],
})
export class AppModule {}
