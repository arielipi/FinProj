import { Inject, Injectable, Logger } from '@nestjs/common';
import { HttpService } from '@nestjs/axios';
import { Cron } from '@nestjs/schedule';
import { lastValueFrom } from 'rxjs';
import * as fs from 'fs';
import * as path from 'path';
import { FileService } from '@app/shared-services/file.service';
import { CACHE_MANAGER } from '@nestjs/cache-manager';
import { Cache } from 'cache-manager';

const DATA_FILE = path.join(__dirname, 'rates.json');
const COINGECKO_API = 'https://api.coingecko.com/api/v3/simple/price?ids=bitcoin,ethereum,tether&vs_currencies=usd';

@Injectable()
export class RateService {
  private readonly ratesFile = 'rates.json';
  private readonly logger = new Logger(RateService.name);

  constructor(private readonly httpService: HttpService, private readonly fileService: FileService,
    @Inject(CACHE_MANAGER) private cacheManager: Cache
  ) {}

  public async getRates(): Promise<any> {
    const cachedRates = await this.cacheManager.get(this.ratesFile);
    if (cachedRates) {
      return cachedRates; // Return cached data if available
    }

    var rates = await this.fileService.readJsonFile(this.ratesFile);
    if (rates) {
      await this.cacheManager.set(this.ratesFile, rates, 60 * 1000); // Cache for 60 seconds
    }
    return rates;

  }

  private async saveRates(newRates: any): Promise<void> {
    await this.fileService.writeJsonFile(this.ratesFile, newRates);
    await this.cacheManager.set(this.ratesFile, newRates, 60 * 1000);
  }

  async fetchRates(): Promise<any> {
    try {
      const response = await lastValueFrom(this.httpService.get(COINGECKO_API));
      const rates = response.data;
  
      // Save to file and cache
      await this.saveRates(rates);
      await this.cacheManager.set('rates', rates, 60 * 1000);
  
      return rates;
    } catch (error) {
      this.logger.error('Failed to fetch rates', error);
  
      // Try to get from cache first
      const cachedRates = await this.cacheManager.get('rates');
      if (cachedRates) {
        return cachedRates;
      }
  
      // If cache is empty, fallback to file
      return this.getRates();
    }
  }
  

   @Cron('0 */10 * * * *') // Run every 10 minutes
  //@Cron('*/5 * * * * *') // Run every 5 seconds
  async updateRates() {
    this.logger.log('Updating cryptocurrency rates...');
    await this.fetchRates();
  }
}