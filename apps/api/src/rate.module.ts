import { Module } from '@nestjs/common';
import * as crypto from 'crypto';
import { ScheduleModule } from '@nestjs/schedule';
import { RateService } from './rate.service';
import { RateController } from './rate.controller';
import { HttpModule } from '@nestjs/axios';
import { SharedServicesModule } from '@app/shared-services';
import { CacheModule } from '@nestjs/cache-manager';

@Module({
  imports: [SharedServicesModule, 
    CacheModule.register({
      isGlobal: true, // Use in-memory caching
      ttl: 60 * 1000, // Cache duration: 60 seconds
    }),
    HttpModule.register({ timeout: 5000, maxRedirects: 5 }), ScheduleModule.forRoot()],
  providers: [RateService],
  controllers: [RateController],
  exports: [RateService], // Export if used in other modules
})
export class RateModule {}
