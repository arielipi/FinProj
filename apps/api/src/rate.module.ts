import { Module } from '@nestjs/common';
import * as crypto from 'crypto';
import { ScheduleModule } from '@nestjs/schedule';
import { RateService } from './rate.service';
import { RateController } from './rate.controller';
import { HttpModule } from '@nestjs/axios';

@Module({
  imports: [HttpModule.register({ timeout: 5000, maxRedirects: 5 }), ScheduleModule.forRoot()],
  providers: [RateService],
  controllers: [RateController],
  exports: [RateService], // Export if used in other modules
})
export class RateModule {}
