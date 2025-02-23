import { Injectable, Logger } from '@nestjs/common';
import { HttpService } from '@nestjs/axios';
import { Cron } from '@nestjs/schedule';
import { lastValueFrom } from 'rxjs';
import * as fs from 'fs';
import * as path from 'path';
import { FileService } from '@app/shared-services/file.service';

const DATA_FILE = path.join(__dirname, 'rates.json');
const COINGECKO_API = 'https://api.coingecko.com/api/v3/simple/price?ids=bitcoin,ethereum,tether&vs_currencies=usd';

@Injectable()
export class RateService {
  private readonly ratesFile = 'rates.json';
  private readonly logger = new Logger(RateService.name);

  constructor(private readonly httpService: HttpService, private readonly fileService: FileService) {}

  public async getRates(): Promise<any> {
    return await this.fileService.readJsonFile(this.ratesFile);

  }

  private async saveRates(newRates: any): Promise<void> {
    await this.fileService.writeJsonFile(this.ratesFile, newRates);
  }

  async fetchRates(): Promise<any> {
    try {
      const response = await lastValueFrom(this.httpService.get(COINGECKO_API));
      const rates = response.data;
      await this.saveRates(rates);
      return rates;
    } catch (error) {
      this.logger.error('Failed to fetch rates', error);
      return this.getRates();
    }
  }

  // @Cron('0 */10 * * * *') // Run every 10 minutes
  @Cron('*/5 * * * * *') // Run every 5 seconds
  async updateRates() {
    this.logger.log('Updating cryptocurrency rates...');
    await this.fetchRates();
  }
}