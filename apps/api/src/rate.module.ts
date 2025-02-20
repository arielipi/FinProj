import { Module } from '@nestjs/common';
import { ScheduleModule } from '@nestjs/schedule';
import { RateService } from './rate.service';
import { RateController } from './rate.controller';
import { HttpModule } from '@nestjs/axios';

@Module({
  imports: [HttpModule, ScheduleModule.forRoot()],
  providers: [RateService],
  controllers: [RateController],
})
export class RateModule {}