import { Controller, Get } from '@nestjs/common';
import { RateService } from './rate.service';

@Controller('rates')
export class RateController {
  constructor(private readonly rateService: RateService) {}

  @Get()
  getRates() {
    return this.rateService.getRates();
  }

  @Get('refresh')
  async refreshRates() {
    return await this.rateService.fetchRates();
  }
}