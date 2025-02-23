import { Module } from '@nestjs/common';
import { BalanceController } from './balance.controller';
import { BalanceService } from './balance.service';
import { SharedServicesModule } from '@app/shared-services';

@Module({
  imports: [SharedServicesModule],
  controllers: [BalanceController],
  providers: [BalanceService],
})
export class BalanceModule {}