import { HttpService } from '@nestjs/axios';
export declare class RateService {
    private readonly httpService;
    private readonly logger;
    constructor(httpService: HttpService);
    private loadRates;
    private saveRates;
    fetchRates(): Promise<any>;
    getRates(): any;
    updateRates(): Promise<void>;
}
