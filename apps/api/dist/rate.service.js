"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var RateService_1;
Object.defineProperty(exports, "__esModule", { value: true });
exports.RateService = void 0;
const common_1 = require("@nestjs/common");
const axios_1 = require("@nestjs/axios");
const schedule_1 = require("@nestjs/schedule");
const rxjs_1 = require("rxjs");
const fs = require("fs");
const path = require("path");
const DATA_FILE = path.join(__dirname, 'rates.json');
const COINGECKO_API = 'https://api.coingecko.com/api/v3/simple/price?ids=bitcoin,ethereum,tether&vs_currencies=usd';
let RateService = RateService_1 = class RateService {
    httpService;
    logger = new common_1.Logger(RateService_1.name);
    constructor(httpService) {
        this.httpService = httpService;
    }
    loadRates() {
        if (!fs.existsSync(DATA_FILE)) {
            return {};
        }
        return JSON.parse(fs.readFileSync(DATA_FILE, 'utf-8'));
    }
    saveRates(rates) {
        fs.writeFileSync(DATA_FILE, JSON.stringify(rates, null, 2));
    }
    async fetchRates() {
        try {
            const response = await (0, rxjs_1.lastValueFrom)(this.httpService.get(COINGECKO_API));
            const rates = response.data;
            this.saveRates(rates);
            return rates;
        }
        catch (error) {
            this.logger.error('Failed to fetch rates', error);
            return this.loadRates();
        }
    }
    getRates() {
        return this.loadRates();
    }
    async updateRates() {
        this.logger.log('Updating cryptocurrency rates...');
        await this.fetchRates();
    }
};
exports.RateService = RateService;
__decorate([
    (0, schedule_1.Cron)('0 */10 * * * *'),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", Promise)
], RateService.prototype, "updateRates", null);
exports.RateService = RateService = RateService_1 = __decorate([
    (0, common_1.Injectable)(),
    __metadata("design:paramtypes", [axios_1.HttpService])
], RateService);
//# sourceMappingURL=rate.service.js.map