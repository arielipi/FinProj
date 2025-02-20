import { Injectable, Logger } from '@nestjs/common';
import { HttpService } from '@nestjs/axios';
import { Cron } from '@nestjs/schedule';
import { lastValueFrom } from 'rxjs';
import * as fs from 'fs';
import * as path from 'path';

const DATA_FILE = path.join(__dirname, 'rates.json');
const COINGECKO_API = 'https://api.coingecko.com/api/v3/simple/price?ids=bitcoin,ethereum,tether&vs_currencies=usd';

@Injectable()
export class RateService {
  private readonly logger = new Logger(RateService.name);

  constructor(private readonly httpService: HttpService) {}

  private loadRates(): any {
    if (!fs.existsSync(DATA_FILE)) {
      return {};
    }
    return JSON.parse(fs.readFileSync(DATA_FILE, 'utf-8'));
  }

  private saveRates(rates: any) {
    fs.writeFileSync(DATA_FILE, JSON.stringify(rates, null, 2));
  }

  async fetchRates(): Promise<any> {
    try {
      const response = await lastValueFrom(this.httpService.get(COINGECKO_API));
      const rates = response.data;
      this.saveRates(rates);
      return rates;
    } catch (error) {
      this.logger.error('Failed to fetch rates', error);
      return this.loadRates();
    }
  }

  getRates(): any {
    return this.loadRates();
  }

  @Cron('0 */10 * * * *') // Run every 10 minutes
  //@Cron('*/5 * * * * *') // Run every 5 seconds
  async updateRates() {
    this.logger.log('Updating cryptocurrency rates...');
    await this.fetchRates();
  }
}