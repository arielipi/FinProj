import { RateService } from './rate.service';
export declare class RateController {
    private readonly rateService;
    constructor(rateService: RateService);
    getRates(): any;
    refreshRates(): Promise<any>;
}
