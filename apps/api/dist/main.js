/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./libs/shared-services/src/file.service.ts":
/*!**************************************************!*\
  !*** ./libs/shared-services/src/file.service.ts ***!
  \**************************************************/
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {


var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.FileService = void 0;
const common_1 = __webpack_require__(/*! @nestjs/common */ "@nestjs/common");
const fs_1 = __webpack_require__(/*! fs */ "fs");
const path = __webpack_require__(/*! path */ "path");
let FileService = class FileService {
    dataDir = path.resolve(__dirname, '../../../data');
    constructor() {
        this.ensureDataDirExists();
    }
    async ensureDataDirExists() {
        try {
            await fs_1.promises.mkdir(this.dataDir, { recursive: true });
        }
        catch (error) {
            console.error('Error creating data directory:', error);
        }
    }
    async readJsonFile(filename) {
        const filePath = path.join(this.dataDir, filename);
        try {
            const data = await fs_1.promises.readFile(filePath, 'utf-8');
            return JSON.parse(data);
        }
        catch (error) {
            console.error(`Error reading file ${filename}:`, error);
            return null;
        }
    }
    async writeJsonFile(filename, data) {
        const filePath = path.join(this.dataDir, filename);
        try {
            await fs_1.promises.writeFile(filePath, JSON.stringify(data, null, 2), 'utf-8');
        }
        catch (error) {
            console.error(`Error writing file ${filename}:`, error);
        }
    }
};
exports.FileService = FileService;
exports.FileService = FileService = __decorate([
    (0, common_1.Injectable)(),
    __metadata("design:paramtypes", [])
], FileService);


/***/ }),

/***/ "./libs/shared-services/src/index.ts":
/*!*******************************************!*\
  !*** ./libs/shared-services/src/index.ts ***!
  \*******************************************/
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {


var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __exportStar = (this && this.__exportStar) || function(m, exports) {
    for (var p in m) if (p !== "default" && !Object.prototype.hasOwnProperty.call(exports, p)) __createBinding(exports, m, p);
};
Object.defineProperty(exports, "__esModule", ({ value: true }));
__exportStar(__webpack_require__(/*! ./shared-services.module */ "./libs/shared-services/src/shared-services.module.ts"), exports);
__exportStar(__webpack_require__(/*! ./shared-services.service */ "./libs/shared-services/src/shared-services.service.ts"), exports);


/***/ }),

/***/ "./libs/shared-services/src/shared-services.module.ts":
/*!************************************************************!*\
  !*** ./libs/shared-services/src/shared-services.module.ts ***!
  \************************************************************/
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {


var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.SharedServicesModule = void 0;
const common_1 = __webpack_require__(/*! @nestjs/common */ "@nestjs/common");
const file_service_1 = __webpack_require__(/*! ./file.service */ "./libs/shared-services/src/file.service.ts");
let SharedServicesModule = class SharedServicesModule {
};
exports.SharedServicesModule = SharedServicesModule;
exports.SharedServicesModule = SharedServicesModule = __decorate([
    (0, common_1.Module)({
        providers: [file_service_1.FileService],
        exports: [file_service_1.FileService],
    })
], SharedServicesModule);


/***/ }),

/***/ "./libs/shared-services/src/shared-services.service.ts":
/*!*************************************************************!*\
  !*** ./libs/shared-services/src/shared-services.service.ts ***!
  \*************************************************************/
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {


var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.SharedServicesService = void 0;
const common_1 = __webpack_require__(/*! @nestjs/common */ "@nestjs/common");
let SharedServicesService = class SharedServicesService {
};
exports.SharedServicesService = SharedServicesService;
exports.SharedServicesService = SharedServicesService = __decorate([
    (0, common_1.Injectable)()
], SharedServicesService);


/***/ }),

/***/ "./src/Balance.ts":
/*!************************!*\
  !*** ./src/Balance.ts ***!
  \************************/
/***/ ((__unused_webpack_module, exports) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));


/***/ }),

/***/ "./src/app.module.ts":
/*!***************************!*\
  !*** ./src/app.module.ts ***!
  \***************************/
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {


var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.AppModule = void 0;
const common_1 = __webpack_require__(/*! @nestjs/common */ "@nestjs/common");
const crypto = __webpack_require__(/*! crypto */ "crypto");
const schedule_1 = __webpack_require__(/*! @nestjs/schedule */ "@nestjs/schedule");
const axios_1 = __webpack_require__(/*! @nestjs/axios */ "@nestjs/axios");
const balance_module_1 = __webpack_require__(/*! ./balance.module */ "./src/balance.module.ts");
const rate_module_1 = __webpack_require__(/*! ./rate.module */ "./src/rate.module.ts");
const shared_services_1 = __webpack_require__(/*! @app/shared-services */ "./libs/shared-services/src/index.ts");
if (typeof globalThis.crypto === 'undefined') {
    globalThis.crypto = crypto;
}
let AppModule = class AppModule {
};
exports.AppModule = AppModule;
exports.AppModule = AppModule = __decorate([
    (0, common_1.Module)({
        imports: [
            shared_services_1.SharedServicesModule,
            axios_1.HttpModule,
            schedule_1.ScheduleModule.forRoot(),
            balance_module_1.BalanceModule,
            rate_module_1.RateModule,
        ],
    })
], AppModule);


/***/ }),

/***/ "./src/balance.controller.ts":
/*!***********************************!*\
  !*** ./src/balance.controller.ts ***!
  \***********************************/
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {


var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
var _a, _b;
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.BalanceController = void 0;
const common_1 = __webpack_require__(/*! @nestjs/common */ "@nestjs/common");
const balance_service_1 = __webpack_require__(/*! ./balance.service */ "./src/balance.service.ts");
const Balance_1 = __webpack_require__(/*! ./Balance */ "./src/Balance.ts");
let BalanceController = class BalanceController {
    balanceService;
    constructor(balanceService) {
        this.balanceService = balanceService;
    }
    getBalances(userId) {
        return this.balanceService.getBalances(userId);
    }
    addBalance(userId, balance) {
        return this.balanceService.addBalance(userId, balance);
    }
    removeBalance(userId, asset) {
        return this.balanceService.removeBalance(userId, asset);
    }
    getTotalBalance(userId, currency) {
        return this.balanceService.getTotalBalance(userId, currency);
    }
};
exports.BalanceController = BalanceController;
__decorate([
    (0, common_1.Get)(),
    __param(0, (0, common_1.Headers)('X-User-ID')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", void 0)
], BalanceController.prototype, "getBalances", null);
__decorate([
    (0, common_1.Post)('add'),
    __param(0, (0, common_1.Headers)('X-User-ID')),
    __param(1, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, typeof (_b = typeof Balance_1.Balance !== "undefined" && Balance_1.Balance) === "function" ? _b : Object]),
    __metadata("design:returntype", void 0)
], BalanceController.prototype, "addBalance", null);
__decorate([
    (0, common_1.Delete)('remove/:asset'),
    __param(0, (0, common_1.Headers)('X-User-ID')),
    __param(1, (0, common_1.Param)('asset')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, String]),
    __metadata("design:returntype", void 0)
], BalanceController.prototype, "removeBalance", null);
__decorate([
    (0, common_1.Get)('total/:currency'),
    __param(0, (0, common_1.Headers)('X-User-ID')),
    __param(1, (0, common_1.Param)('currency')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, String]),
    __metadata("design:returntype", void 0)
], BalanceController.prototype, "getTotalBalance", null);
exports.BalanceController = BalanceController = __decorate([
    (0, common_1.Controller)('balances'),
    __metadata("design:paramtypes", [typeof (_a = typeof balance_service_1.BalanceService !== "undefined" && balance_service_1.BalanceService) === "function" ? _a : Object])
], BalanceController);


/***/ }),

/***/ "./src/balance.module.ts":
/*!*******************************!*\
  !*** ./src/balance.module.ts ***!
  \*******************************/
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {


var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.BalanceModule = void 0;
const common_1 = __webpack_require__(/*! @nestjs/common */ "@nestjs/common");
const balance_controller_1 = __webpack_require__(/*! ./balance.controller */ "./src/balance.controller.ts");
const balance_service_1 = __webpack_require__(/*! ./balance.service */ "./src/balance.service.ts");
let BalanceModule = class BalanceModule {
};
exports.BalanceModule = BalanceModule;
exports.BalanceModule = BalanceModule = __decorate([
    (0, common_1.Module)({
        controllers: [balance_controller_1.BalanceController],
        providers: [balance_service_1.BalanceService],
    })
], BalanceModule);


/***/ }),

/***/ "./src/balance.service.ts":
/*!********************************!*\
  !*** ./src/balance.service.ts ***!
  \********************************/
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {


var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.BalanceService = void 0;
const common_1 = __webpack_require__(/*! @nestjs/common */ "@nestjs/common");
const fs = __webpack_require__(/*! fs */ "fs");
const path = __webpack_require__(/*! path */ "path");
const DATA_FILE = path.join(__dirname, 'balances.json');
let BalanceService = class BalanceService {
    loadBalances() {
        if (!fs.existsSync(DATA_FILE)) {
            return {};
        }
        return JSON.parse(fs.readFileSync(DATA_FILE, 'utf-8'));
    }
    saveBalances(balances) {
        fs.writeFileSync(DATA_FILE, JSON.stringify(balances, null, 2));
    }
    getBalances(userId) {
        const balances = this.loadBalances();
        return balances[userId] || [];
    }
    addBalance(userId, balance) {
        const balances = this.loadBalances();
        if (!balances[userId]) {
            balances[userId] = [];
        }
        const existing = balances[userId].find(b => b.asset === balance.asset);
        if (existing) {
            existing.amount += balance.amount;
        }
        else {
            balances[userId].push(balance);
        }
        this.saveBalances(balances);
        return { message: 'Balance updated successfully' };
    }
    removeBalance(userId, asset) {
        const balances = this.loadBalances();
        if (!balances[userId]) {
            return { message: 'No balances found for this user' };
        }
        balances[userId] = balances[userId].filter(b => b.asset !== asset);
        this.saveBalances(balances);
        return { message: 'Asset removed successfully' };
    }
    async getTotalBalance(userId, currency) {
        const balances = this.loadBalances();
        const userBalances = balances[userId] || [];
        const conversionRates = { BTC: 50000, ETH: 3000, USDT: 1 };
        let total = 0;
        for (const { asset, amount } of userBalances) {
            const rate = conversionRates[asset] ?? 1;
            total += amount * rate;
        }
        return { total, currency };
    }
};
exports.BalanceService = BalanceService;
exports.BalanceService = BalanceService = __decorate([
    (0, common_1.Injectable)()
], BalanceService);


/***/ }),

/***/ "./src/rate.controller.ts":
/*!********************************!*\
  !*** ./src/rate.controller.ts ***!
  \********************************/
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {


var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var _a;
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.RateController = void 0;
const common_1 = __webpack_require__(/*! @nestjs/common */ "@nestjs/common");
const rate_service_1 = __webpack_require__(/*! ./rate.service */ "./src/rate.service.ts");
let RateController = class RateController {
    rateService;
    constructor(rateService) {
        this.rateService = rateService;
    }
    async getRates() {
        return await this.rateService.getRates();
    }
    async refreshRates() {
        return await this.rateService.fetchRates();
    }
};
exports.RateController = RateController;
__decorate([
    (0, common_1.Get)(),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", Promise)
], RateController.prototype, "getRates", null);
__decorate([
    (0, common_1.Get)('refresh'),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", Promise)
], RateController.prototype, "refreshRates", null);
exports.RateController = RateController = __decorate([
    (0, common_1.Controller)('rates'),
    __metadata("design:paramtypes", [typeof (_a = typeof rate_service_1.RateService !== "undefined" && rate_service_1.RateService) === "function" ? _a : Object])
], RateController);


/***/ }),

/***/ "./src/rate.module.ts":
/*!****************************!*\
  !*** ./src/rate.module.ts ***!
  \****************************/
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {


var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.RateModule = void 0;
const common_1 = __webpack_require__(/*! @nestjs/common */ "@nestjs/common");
const schedule_1 = __webpack_require__(/*! @nestjs/schedule */ "@nestjs/schedule");
const rate_service_1 = __webpack_require__(/*! ./rate.service */ "./src/rate.service.ts");
const rate_controller_1 = __webpack_require__(/*! ./rate.controller */ "./src/rate.controller.ts");
const axios_1 = __webpack_require__(/*! @nestjs/axios */ "@nestjs/axios");
const shared_services_1 = __webpack_require__(/*! @app/shared-services */ "./libs/shared-services/src/index.ts");
const cache_manager_1 = __webpack_require__(/*! @nestjs/cache-manager */ "@nestjs/cache-manager");
let RateModule = class RateModule {
};
exports.RateModule = RateModule;
exports.RateModule = RateModule = __decorate([
    (0, common_1.Module)({
        imports: [shared_services_1.SharedServicesModule,
            cache_manager_1.CacheModule.register({
                isGlobal: true,
                ttl: 60 * 1000,
            }),
            axios_1.HttpModule.register({ timeout: 5000, maxRedirects: 5 }), schedule_1.ScheduleModule.forRoot()],
        providers: [rate_service_1.RateService],
        controllers: [rate_controller_1.RateController],
        exports: [rate_service_1.RateService],
    })
], RateModule);


/***/ }),

/***/ "./src/rate.service.ts":
/*!*****************************!*\
  !*** ./src/rate.service.ts ***!
  \*****************************/
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {


var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
var RateService_1;
var _a, _b, _c;
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.RateService = void 0;
const common_1 = __webpack_require__(/*! @nestjs/common */ "@nestjs/common");
const axios_1 = __webpack_require__(/*! @nestjs/axios */ "@nestjs/axios");
const schedule_1 = __webpack_require__(/*! @nestjs/schedule */ "@nestjs/schedule");
const rxjs_1 = __webpack_require__(/*! rxjs */ "rxjs");
const path = __webpack_require__(/*! path */ "path");
const file_service_1 = __webpack_require__(/*! @app/shared-services/file.service */ "./libs/shared-services/src/file.service.ts");
const cache_manager_1 = __webpack_require__(/*! @nestjs/cache-manager */ "@nestjs/cache-manager");
const cache_manager_2 = __webpack_require__(/*! cache-manager */ "cache-manager");
const DATA_FILE = path.join(__dirname, 'rates.json');
const COINGECKO_API = 'https://api.coingecko.com/api/v3/simple/price?ids=bitcoin,ethereum,tether&vs_currencies=usd';
let RateService = RateService_1 = class RateService {
    httpService;
    fileService;
    cacheManager;
    ratesFile = 'rates.json';
    logger = new common_1.Logger(RateService_1.name);
    constructor(httpService, fileService, cacheManager) {
        this.httpService = httpService;
        this.fileService = fileService;
        this.cacheManager = cacheManager;
    }
    async getRates() {
        const cachedRates = await this.cacheManager.get(this.ratesFile);
        if (cachedRates) {
            return cachedRates;
        }
        var rates = await this.fileService.readJsonFile(this.ratesFile);
        if (rates) {
            await this.cacheManager.set(this.ratesFile, rates, 60 * 1000);
        }
        return rates;
    }
    async saveRates(newRates) {
        await this.fileService.writeJsonFile(this.ratesFile, newRates);
        await this.cacheManager.set(this.ratesFile, newRates, 60 * 1000);
    }
    async fetchRates() {
        try {
            const response = await (0, rxjs_1.lastValueFrom)(this.httpService.get(COINGECKO_API));
            const rates = response.data;
            await this.saveRates(rates);
            await this.cacheManager.set('rates', rates, 60 * 1000);
            return rates;
        }
        catch (error) {
            this.logger.error('Failed to fetch rates', error);
            const cachedRates = await this.cacheManager.get('rates');
            if (cachedRates) {
                return cachedRates;
            }
            return this.getRates();
        }
    }
    async updateRates() {
        this.logger.log('Updating cryptocurrency rates...');
        await this.fetchRates();
    }
};
exports.RateService = RateService;
__decorate([
    (0, schedule_1.Cron)('*/5 * * * * *'),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", Promise)
], RateService.prototype, "updateRates", null);
exports.RateService = RateService = RateService_1 = __decorate([
    (0, common_1.Injectable)(),
    __param(2, (0, common_1.Inject)(cache_manager_1.CACHE_MANAGER)),
    __metadata("design:paramtypes", [typeof (_a = typeof axios_1.HttpService !== "undefined" && axios_1.HttpService) === "function" ? _a : Object, typeof (_b = typeof file_service_1.FileService !== "undefined" && file_service_1.FileService) === "function" ? _b : Object, typeof (_c = typeof cache_manager_2.Cache !== "undefined" && cache_manager_2.Cache) === "function" ? _c : Object])
], RateService);


/***/ }),

/***/ "@nestjs/axios":
/*!********************************!*\
  !*** external "@nestjs/axios" ***!
  \********************************/
/***/ ((module) => {

module.exports = require("@nestjs/axios");

/***/ }),

/***/ "@nestjs/cache-manager":
/*!****************************************!*\
  !*** external "@nestjs/cache-manager" ***!
  \****************************************/
/***/ ((module) => {

module.exports = require("@nestjs/cache-manager");

/***/ }),

/***/ "@nestjs/common":
/*!*********************************!*\
  !*** external "@nestjs/common" ***!
  \*********************************/
/***/ ((module) => {

module.exports = require("@nestjs/common");

/***/ }),

/***/ "@nestjs/core":
/*!*******************************!*\
  !*** external "@nestjs/core" ***!
  \*******************************/
/***/ ((module) => {

module.exports = require("@nestjs/core");

/***/ }),

/***/ "@nestjs/schedule":
/*!***********************************!*\
  !*** external "@nestjs/schedule" ***!
  \***********************************/
/***/ ((module) => {

module.exports = require("@nestjs/schedule");

/***/ }),

/***/ "cache-manager":
/*!********************************!*\
  !*** external "cache-manager" ***!
  \********************************/
/***/ ((module) => {

module.exports = require("cache-manager");

/***/ }),

/***/ "crypto":
/*!*************************!*\
  !*** external "crypto" ***!
  \*************************/
/***/ ((module) => {

module.exports = require("crypto");

/***/ }),

/***/ "fs":
/*!*********************!*\
  !*** external "fs" ***!
  \*********************/
/***/ ((module) => {

module.exports = require("fs");

/***/ }),

/***/ "path":
/*!***********************!*\
  !*** external "path" ***!
  \***********************/
/***/ ((module) => {

module.exports = require("path");

/***/ }),

/***/ "rxjs":
/*!***********************!*\
  !*** external "rxjs" ***!
  \***********************/
/***/ ((module) => {

module.exports = require("rxjs");

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
var __webpack_exports__ = {};
// This entry needs to be wrapped in an IIFE because it needs to be isolated against other modules in the chunk.
(() => {
var exports = __webpack_exports__;
/*!*********************!*\
  !*** ./src/main.ts ***!
  \*********************/

Object.defineProperty(exports, "__esModule", ({ value: true }));
const core_1 = __webpack_require__(/*! @nestjs/core */ "@nestjs/core");
const app_module_1 = __webpack_require__(/*! ./app.module */ "./src/app.module.ts");
async function bootstrap() {
    const app = await core_1.NestFactory.create(app_module_1.AppModule);
    await app.listen(4000);
}
bootstrap();

})();

/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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ZC1zZXJ2aWNlcy9zcmMvZmlsZS5zZXJ2aWNlLnRzIiwid2VicGFjazovL2FwaS8uL2xpYnMvc2hhcmVkLXNlcnZpY2VzL3NyYy9pbmRleC50cyIsIndlYnBhY2s6Ly9hcGkvLi9saWJzL3NoYXJlZC1zZXJ2aWNlcy9zcmMvc2hhcmVkLXNlcnZpY2VzLm1vZHVsZS50cyIsIndlYnBhY2s6Ly9hcGkvLi9saWJzL3NoYXJlZC1zZXJ2aWNlcy9zcmMvc2hhcmVkLXNlcnZpY2VzLnNlcnZpY2UudHMiLCJ3ZWJwYWNrOi8vYXBpLy4vc3JjL0JhbGFuY2UudHMiLCJ3ZWJwYWNrOi8vYXBpLy4vc3JjL2FwcC5tb2R1bGUudHMiLCJ3ZWJwYWNrOi8vYXBpLy4vc3JjL2JhbGFuY2UuY29udHJvbGxlci50cyIsIndlYnBhY2s6Ly9hcGkvLi9zcmMvYmFsYW5jZS5tb2R1bGUudHMiLCJ3ZWJwYWNrOi8vYXBpLy4vc3JjL2JhbGFuY2Uuc2VydmljZS50cyIsIndlYnBhY2s6Ly9hcGkvLi9zcmMvcmF0ZS5jb250cm9sbGVyLnRzIiwid2VicGFjazovL2FwaS8uL3NyYy9yYXRlLm1vZHVsZS50cyIsIndlYnBhY2s6Ly9hcGkvLi9zcmMvcmF0ZS5zZXJ2aWNlLnRzIiwid2VicGFjazovL2FwaS9leHRlcm5hbCBjb21tb25qcyBcIkBuZXN0anMvYXhpb3NcIiIsIndlYnBhY2s6Ly9hcGkvZXh0ZXJuYWwgY29tbW9uanMgXCJAbmVzdGpzL2NhY2hlLW1hbmFnZXJcIiIsIndlYnBhY2s6Ly9hcGkvZXh0ZXJuYWwgY29tbW9uanMgXCJAbmVzdGpzL2NvbW1vblwiIiwid2VicGFjazovL2FwaS9leHRlcm5hbCBjb21tb25qcyBcIkBuZXN0anMvY29yZVwiIiwid2VicGFjazovL2FwaS9leHRlcm5hbCBjb21tb25qcyBcIkBuZXN0anMvc2NoZWR1bGVcIiIsIndlYnBhY2s6Ly9hcGkvZXh0ZXJuYWwgY29tbW9uanMgXCJjYWNoZS1tYW5hZ2VyXCIiLCJ3ZWJwYWNrOi8vYXBpL2V4dGVybmFsIG5vZGUtY29tbW9uanMgXCJjcnlwdG9cIiIsIndlYnBhY2s6Ly9hcGkvZXh0ZXJuYWwgbm9kZS1jb21tb25qcyBcImZzXCIiLCJ3ZWJwYWNrOi8vYXBpL2V4dGVybmFsIG5vZGUtY29tbW9uanMgXCJwYXRoXCIiLCJ3ZWJwYWNrOi8vYXBpL2V4dGVybmFsIGNvbW1vbmpzIFwicnhqc1wiIiwid2VicGFjazovL2FwaS93ZWJwYWNrL2Jvb3RzdHJhcCIsIndlYnBhY2s6Ly9hcGkvLi9zcmMvbWFpbi50cyJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBJbmplY3RhYmxlIH0gZnJvbSAnQG5lc3Rqcy9jb21tb24nO1xyXG5pbXBvcnQgeyBwcm9taXNlcyBhcyBmcyB9IGZyb20gJ2ZzJztcclxuaW1wb3J0ICogYXMgcGF0aCBmcm9tICdwYXRoJztcclxuXHJcbkBJbmplY3RhYmxlKClcclxuZXhwb3J0IGNsYXNzIEZpbGVTZXJ2aWNlIHtcclxuICBwcml2YXRlIHJlYWRvbmx5IGRhdGFEaXIgPSBwYXRoLnJlc29sdmUoX19kaXJuYW1lLCAnLi4vLi4vLi4vZGF0YScpOyAvLyBFbnN1cmVzIGl0J3Mgb3V0c2lkZSBkaXN0L1xyXG5cclxuICBjb25zdHJ1Y3RvcigpIHtcclxuICAgIHRoaXMuZW5zdXJlRGF0YURpckV4aXN0cygpO1xyXG4gIH1cclxuXHJcbiAgLy8gRW5zdXJlIGRhdGEgZGlyZWN0b3J5IGV4aXN0c1xyXG4gIHByaXZhdGUgYXN5bmMgZW5zdXJlRGF0YURpckV4aXN0cygpOiBQcm9taXNlPHZvaWQ+IHtcclxuICAgIHRyeSB7XHJcbiAgICAgIGF3YWl0IGZzLm1rZGlyKHRoaXMuZGF0YURpciwgeyByZWN1cnNpdmU6IHRydWUgfSk7XHJcbiAgICB9IGNhdGNoIChlcnJvcikge1xyXG4gICAgICBjb25zb2xlLmVycm9yKCdFcnJvciBjcmVhdGluZyBkYXRhIGRpcmVjdG9yeTonLCBlcnJvcik7XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICAvLyBSZWFkIEpTT04gZmlsZVxyXG4gIGFzeW5jIHJlYWRKc29uRmlsZTxUPihmaWxlbmFtZTogc3RyaW5nKTogUHJvbWlzZTxUIHwgbnVsbD4ge1xyXG4gICAgY29uc3QgZmlsZVBhdGggPSBwYXRoLmpvaW4odGhpcy5kYXRhRGlyLCBmaWxlbmFtZSk7XHJcbiAgICB0cnkge1xyXG4gICAgICBjb25zdCBkYXRhID0gYXdhaXQgZnMucmVhZEZpbGUoZmlsZVBhdGgsICd1dGYtOCcpO1xyXG4gICAgICByZXR1cm4gSlNPTi5wYXJzZShkYXRhKTtcclxuICAgIH0gY2F0Y2ggKGVycm9yKSB7XHJcbiAgICAgIGNvbnNvbGUuZXJyb3IoYEVycm9yIHJlYWRpbmcgZmlsZSAke2ZpbGVuYW1lfTpgLCBlcnJvcik7XHJcbiAgICAgIHJldHVybiBudWxsO1xyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgLy8gV3JpdGUgSlNPTiBmaWxlXHJcbiAgYXN5bmMgd3JpdGVKc29uRmlsZShmaWxlbmFtZTogc3RyaW5nLCBkYXRhOiB1bmtub3duKTogUHJvbWlzZTx2b2lkPiB7XHJcbiAgICBjb25zdCBmaWxlUGF0aCA9IHBhdGguam9pbih0aGlzLmRhdGFEaXIsIGZpbGVuYW1lKTtcclxuICAgIHRyeSB7XHJcbiAgICAgIGF3YWl0IGZzLndyaXRlRmlsZShmaWxlUGF0aCwgSlNPTi5zdHJpbmdpZnkoZGF0YSwgbnVsbCwgMiksICd1dGYtOCcpO1xyXG4gICAgfSBjYXRjaCAoZXJyb3IpIHtcclxuICAgICAgY29uc29sZS5lcnJvcihgRXJyb3Igd3JpdGluZyBmaWxlICR7ZmlsZW5hbWV9OmAsIGVycm9yKTtcclxuICAgIH1cclxuICB9XHJcbn1cclxuIiwiZXhwb3J0ICogZnJvbSAnLi9zaGFyZWQtc2VydmljZXMubW9kdWxlJztcclxuZXhwb3J0ICogZnJvbSAnLi9zaGFyZWQtc2VydmljZXMuc2VydmljZSc7XHJcbiIsImltcG9ydCB7IE1vZHVsZSB9IGZyb20gJ0BuZXN0anMvY29tbW9uJztcclxuaW1wb3J0IHsgRmlsZVNlcnZpY2UgfSBmcm9tICcuL2ZpbGUuc2VydmljZSc7XHJcblxyXG5ATW9kdWxlKHtcclxuICBwcm92aWRlcnM6IFtGaWxlU2VydmljZV0sXHJcbiAgZXhwb3J0czogW0ZpbGVTZXJ2aWNlXSxcclxufSlcclxuZXhwb3J0IGNsYXNzIFNoYXJlZFNlcnZpY2VzTW9kdWxlIHt9XHJcbiIsImltcG9ydCB7IEluamVjdGFibGUgfSBmcm9tICdAbmVzdGpzL2NvbW1vbic7XHJcblxyXG5ASW5qZWN0YWJsZSgpXHJcbmV4cG9ydCBjbGFzcyBTaGFyZWRTZXJ2aWNlc1NlcnZpY2Uge31cclxuIiwiZXhwb3J0IGludGVyZmFjZSBCYWxhbmNlIHtcclxuICBhc3NldDogc3RyaW5nO1xyXG4gIGFtb3VudDogbnVtYmVyO1xyXG59XHJcbiIsImltcG9ydCB7IE1vZHVsZSB9IGZyb20gJ0BuZXN0anMvY29tbW9uJztcclxuY29uc3QgY3J5cHRvID0gcmVxdWlyZSgnY3J5cHRvJyk7XHJcbmltcG9ydCB7IFNjaGVkdWxlTW9kdWxlIH0gZnJvbSAnQG5lc3Rqcy9zY2hlZHVsZSc7XHJcbmltcG9ydCB7IEh0dHBNb2R1bGUgfSBmcm9tICdAbmVzdGpzL2F4aW9zJztcclxuaW1wb3J0IHsgQmFsYW5jZU1vZHVsZSB9IGZyb20gJy4vYmFsYW5jZS5tb2R1bGUnO1xyXG5pbXBvcnQgeyBSYXRlTW9kdWxlIH0gZnJvbSAnLi9yYXRlLm1vZHVsZSc7XHJcbmltcG9ydCB7IFNoYXJlZFNlcnZpY2VzTW9kdWxlIH0gZnJvbSAnQGFwcC9zaGFyZWQtc2VydmljZXMnO1xyXG5cclxuLy8gRW5zdXJlIHRoYXQgdGhlIGBjcnlwdG9gIG1vZHVsZSBpcyBhdmFpbGFibGUgZ2xvYmFsbHlcclxuaWYgKHR5cGVvZiBnbG9iYWxUaGlzLmNyeXB0byA9PT0gJ3VuZGVmaW5lZCcpIHtcclxuICBnbG9iYWxUaGlzLmNyeXB0byA9IGNyeXB0bztcclxufVxyXG5ATW9kdWxlKHtcclxuICBpbXBvcnRzOiBbXHJcbiAgICBTaGFyZWRTZXJ2aWNlc01vZHVsZSxcclxuICAgIEh0dHBNb2R1bGUsIC8vIEVuc3VyZSBIdHRwTW9kdWxlIGlzIGF2YWlsYWJsZSBnbG9iYWxseVxyXG4gICAgU2NoZWR1bGVNb2R1bGUuZm9yUm9vdCgpLCAvLyBFbmFibGVzIGJhY2tncm91bmQgam9iIHNjaGVkdWxpbmdcclxuICAgIEJhbGFuY2VNb2R1bGUsIC8vIEJhbGFuY2Ugc2VydmljZSBtb2R1bGVcclxuICAgIFJhdGVNb2R1bGUsIC8vIFJhdGUgc2VydmljZSBtb2R1bGVcclxuICBdLFxyXG59KVxyXG5leHBvcnQgY2xhc3MgQXBwTW9kdWxlIHt9XHJcbiIsImltcG9ydCB7IENvbnRyb2xsZXIsIEdldCwgUG9zdCwgRGVsZXRlLCBCb2R5LCBIZWFkZXJzLCBQYXJhbSB9IGZyb20gJ0BuZXN0anMvY29tbW9uJztcclxuaW1wb3J0IHsgQmFsYW5jZVNlcnZpY2UgfSBmcm9tICcuL2JhbGFuY2Uuc2VydmljZSc7XHJcbmltcG9ydCB7IEJhbGFuY2UgfSBmcm9tICcuL0JhbGFuY2UnO1xyXG5cclxuQENvbnRyb2xsZXIoJ2JhbGFuY2VzJylcclxuZXhwb3J0IGNsYXNzIEJhbGFuY2VDb250cm9sbGVyIHtcclxuICBjb25zdHJ1Y3Rvcihwcml2YXRlIHJlYWRvbmx5IGJhbGFuY2VTZXJ2aWNlOiBCYWxhbmNlU2VydmljZSkge31cclxuXHJcbiAgQEdldCgpXHJcbiAgZ2V0QmFsYW5jZXMoQEhlYWRlcnMoJ1gtVXNlci1JRCcpIHVzZXJJZDogc3RyaW5nKSB7XHJcbiAgICByZXR1cm4gdGhpcy5iYWxhbmNlU2VydmljZS5nZXRCYWxhbmNlcyh1c2VySWQpO1xyXG4gIH1cclxuXHJcbiAgQFBvc3QoJ2FkZCcpXHJcbiAgYWRkQmFsYW5jZShASGVhZGVycygnWC1Vc2VyLUlEJykgdXNlcklkOiBzdHJpbmcsIEBCb2R5KCkgYmFsYW5jZTogQmFsYW5jZSkge1xyXG4gICAgcmV0dXJuIHRoaXMuYmFsYW5jZVNlcnZpY2UuYWRkQmFsYW5jZSh1c2VySWQsIGJhbGFuY2UpO1xyXG4gIH1cclxuXHJcbiAgQERlbGV0ZSgncmVtb3ZlLzphc3NldCcpXHJcbiAgcmVtb3ZlQmFsYW5jZShASGVhZGVycygnWC1Vc2VyLUlEJykgdXNlcklkOiBzdHJpbmcsIEBQYXJhbSgnYXNzZXQnKSBhc3NldDogc3RyaW5nKSB7XHJcbiAgICByZXR1cm4gdGhpcy5iYWxhbmNlU2VydmljZS5yZW1vdmVCYWxhbmNlKHVzZXJJZCwgYXNzZXQpO1xyXG4gIH1cclxuXHJcbiAgQEdldCgndG90YWwvOmN1cnJlbmN5JylcclxuICBnZXRUb3RhbEJhbGFuY2UoQEhlYWRlcnMoJ1gtVXNlci1JRCcpIHVzZXJJZDogc3RyaW5nLCBAUGFyYW0oJ2N1cnJlbmN5JykgY3VycmVuY3k6IHN0cmluZykge1xyXG4gICAgcmV0dXJuIHRoaXMuYmFsYW5jZVNlcnZpY2UuZ2V0VG90YWxCYWxhbmNlKHVzZXJJZCwgY3VycmVuY3kpO1xyXG4gIH1cclxufVxyXG4iLCJpbXBvcnQgeyBNb2R1bGUgfSBmcm9tICdAbmVzdGpzL2NvbW1vbic7XHJcbmltcG9ydCB7IEJhbGFuY2VDb250cm9sbGVyIH0gZnJvbSAnLi9iYWxhbmNlLmNvbnRyb2xsZXInO1xyXG5pbXBvcnQgeyBCYWxhbmNlU2VydmljZSB9IGZyb20gJy4vYmFsYW5jZS5zZXJ2aWNlJztcclxuXHJcbkBNb2R1bGUoe1xyXG4gIGNvbnRyb2xsZXJzOiBbQmFsYW5jZUNvbnRyb2xsZXJdLFxyXG4gIHByb3ZpZGVyczogW0JhbGFuY2VTZXJ2aWNlXSxcclxufSlcclxuZXhwb3J0IGNsYXNzIEJhbGFuY2VNb2R1bGUge30iLCJpbXBvcnQgeyBJbmplY3RhYmxlIH0gZnJvbSAnQG5lc3Rqcy9jb21tb24nO1xyXG5pbXBvcnQgKiBhcyBmcyBmcm9tICdmcyc7XHJcbmltcG9ydCAqIGFzIHBhdGggZnJvbSAncGF0aCc7XHJcbmltcG9ydCB7IEJhbGFuY2UgfSBmcm9tICcuL0JhbGFuY2UnO1xyXG5cclxuY29uc3QgREFUQV9GSUxFID0gcGF0aC5qb2luKF9fZGlybmFtZSwgJ2JhbGFuY2VzLmpzb24nKTtcclxuXHJcbkBJbmplY3RhYmxlKClcclxuZXhwb3J0IGNsYXNzIEJhbGFuY2VTZXJ2aWNlIHtcclxuICBwcml2YXRlIGxvYWRCYWxhbmNlcygpOiBSZWNvcmQ8c3RyaW5nLCBCYWxhbmNlW10+IHtcclxuICAgIGlmICghZnMuZXhpc3RzU3luYyhEQVRBX0ZJTEUpKSB7XHJcbiAgICAgIHJldHVybiB7fTtcclxuICAgIH1cclxuICAgIHJldHVybiBKU09OLnBhcnNlKGZzLnJlYWRGaWxlU3luYyhEQVRBX0ZJTEUsICd1dGYtOCcpKTtcclxuICB9XHJcblxyXG4gIHByaXZhdGUgc2F2ZUJhbGFuY2VzKGJhbGFuY2VzOiBSZWNvcmQ8c3RyaW5nLCBCYWxhbmNlW10+KSB7XHJcbiAgICBmcy53cml0ZUZpbGVTeW5jKERBVEFfRklMRSwgSlNPTi5zdHJpbmdpZnkoYmFsYW5jZXMsIG51bGwsIDIpKTtcclxuICB9XHJcblxyXG4gIGdldEJhbGFuY2VzKHVzZXJJZDogc3RyaW5nKTogQmFsYW5jZVtdIHtcclxuICAgIGNvbnN0IGJhbGFuY2VzID0gdGhpcy5sb2FkQmFsYW5jZXMoKTtcclxuICAgIHJldHVybiBiYWxhbmNlc1t1c2VySWRdIHx8IFtdO1xyXG4gIH1cclxuXHJcbiAgYWRkQmFsYW5jZSh1c2VySWQ6IHN0cmluZywgYmFsYW5jZTogQmFsYW5jZSkge1xyXG4gICAgY29uc3QgYmFsYW5jZXMgPSB0aGlzLmxvYWRCYWxhbmNlcygpO1xyXG4gICAgaWYgKCFiYWxhbmNlc1t1c2VySWRdKSB7XHJcbiAgICAgIGJhbGFuY2VzW3VzZXJJZF0gPSBbXTtcclxuICAgIH1cclxuICAgIGNvbnN0IGV4aXN0aW5nID0gYmFsYW5jZXNbdXNlcklkXS5maW5kKGIgPT4gYi5hc3NldCA9PT0gYmFsYW5jZS5hc3NldCk7XHJcbiAgICBpZiAoZXhpc3RpbmcpIHtcclxuICAgICAgZXhpc3RpbmcuYW1vdW50ICs9IGJhbGFuY2UuYW1vdW50O1xyXG4gICAgfSBlbHNlIHtcclxuICAgICAgYmFsYW5jZXNbdXNlcklkXS5wdXNoKGJhbGFuY2UpO1xyXG4gICAgfVxyXG4gICAgdGhpcy5zYXZlQmFsYW5jZXMoYmFsYW5jZXMpO1xyXG4gICAgcmV0dXJuIHsgbWVzc2FnZTogJ0JhbGFuY2UgdXBkYXRlZCBzdWNjZXNzZnVsbHknIH07XHJcbiAgfVxyXG5cclxuICByZW1vdmVCYWxhbmNlKHVzZXJJZDogc3RyaW5nLCBhc3NldDogc3RyaW5nKSB7XHJcbiAgICBjb25zdCBiYWxhbmNlcyA9IHRoaXMubG9hZEJhbGFuY2VzKCk7XHJcbiAgICBpZiAoIWJhbGFuY2VzW3VzZXJJZF0pIHtcclxuICAgICAgcmV0dXJuIHsgbWVzc2FnZTogJ05vIGJhbGFuY2VzIGZvdW5kIGZvciB0aGlzIHVzZXInIH07XHJcbiAgICB9XHJcbiAgICBiYWxhbmNlc1t1c2VySWRdID0gYmFsYW5jZXNbdXNlcklkXS5maWx0ZXIoYiA9PiBiLmFzc2V0ICE9PSBhc3NldCk7XHJcbiAgICB0aGlzLnNhdmVCYWxhbmNlcyhiYWxhbmNlcyk7XHJcbiAgICByZXR1cm4geyBtZXNzYWdlOiAnQXNzZXQgcmVtb3ZlZCBzdWNjZXNzZnVsbHknIH07XHJcbiAgfVxyXG5cclxuICBhc3luYyBnZXRUb3RhbEJhbGFuY2UodXNlcklkOiBzdHJpbmcsIGN1cnJlbmN5OiBzdHJpbmcpIHtcclxuICAgIGNvbnN0IGJhbGFuY2VzID0gdGhpcy5sb2FkQmFsYW5jZXMoKTtcclxuICAgIGNvbnN0IHVzZXJCYWxhbmNlcyA9IGJhbGFuY2VzW3VzZXJJZF0gfHwgW107XHJcblxyXG4gICAgLy8gTW9jayBjb252ZXJzaW9uIHJhdGVzIChpbiByZWFsLXdvcmxkIHNjZW5hcmlvcywgaW50ZWdyYXRlIGFuIEFQSSlcclxuICAgIGNvbnN0IGNvbnZlcnNpb25SYXRlczogUmVjb3JkPHN0cmluZywgbnVtYmVyPiA9IHsgQlRDOiA1MDAwMCwgRVRIOiAzMDAwLCBVU0RUOiAxIH07XHJcbiAgICBsZXQgdG90YWwgPSAwO1xyXG4gICAgZm9yIChjb25zdCB7IGFzc2V0LCBhbW91bnQgfSBvZiB1c2VyQmFsYW5jZXMpIHtcclxuICAgICAgY29uc3QgcmF0ZSA9IGNvbnZlcnNpb25SYXRlc1thc3NldF0gPz8gMTtcclxuICAgICAgdG90YWwgKz0gYW1vdW50ICogcmF0ZTtcclxuICAgIH1cclxuICAgIHJldHVybiB7IHRvdGFsLCBjdXJyZW5jeSB9O1xyXG4gIH1cclxufSIsImltcG9ydCB7IENvbnRyb2xsZXIsIEdldCB9IGZyb20gJ0BuZXN0anMvY29tbW9uJztcclxuaW1wb3J0IHsgUmF0ZVNlcnZpY2UgfSBmcm9tICcuL3JhdGUuc2VydmljZSc7XHJcblxyXG5AQ29udHJvbGxlcigncmF0ZXMnKVxyXG5leHBvcnQgY2xhc3MgUmF0ZUNvbnRyb2xsZXIge1xyXG4gIGNvbnN0cnVjdG9yKHByaXZhdGUgcmVhZG9ubHkgcmF0ZVNlcnZpY2U6IFJhdGVTZXJ2aWNlKSB7fVxyXG5cclxuICBAR2V0KClcclxuICBhc3luYyBnZXRSYXRlcygpIHtcclxuICAgIHJldHVybiBhd2FpdCB0aGlzLnJhdGVTZXJ2aWNlLmdldFJhdGVzKCk7XHJcbiAgfVxyXG5cclxuICBAR2V0KCdyZWZyZXNoJylcclxuICBhc3luYyByZWZyZXNoUmF0ZXMoKSB7XHJcbiAgICByZXR1cm4gYXdhaXQgdGhpcy5yYXRlU2VydmljZS5mZXRjaFJhdGVzKCk7XHJcbiAgfVxyXG59IiwiaW1wb3J0IHsgTW9kdWxlIH0gZnJvbSAnQG5lc3Rqcy9jb21tb24nO1xyXG5pbXBvcnQgKiBhcyBjcnlwdG8gZnJvbSAnY3J5cHRvJztcclxuaW1wb3J0IHsgU2NoZWR1bGVNb2R1bGUgfSBmcm9tICdAbmVzdGpzL3NjaGVkdWxlJztcclxuaW1wb3J0IHsgUmF0ZVNlcnZpY2UgfSBmcm9tICcuL3JhdGUuc2VydmljZSc7XHJcbmltcG9ydCB7IFJhdGVDb250cm9sbGVyIH0gZnJvbSAnLi9yYXRlLmNvbnRyb2xsZXInO1xyXG5pbXBvcnQgeyBIdHRwTW9kdWxlIH0gZnJvbSAnQG5lc3Rqcy9heGlvcyc7XHJcbmltcG9ydCB7IFNoYXJlZFNlcnZpY2VzTW9kdWxlIH0gZnJvbSAnQGFwcC9zaGFyZWQtc2VydmljZXMnO1xyXG5pbXBvcnQgeyBDYWNoZU1vZHVsZSB9IGZyb20gJ0BuZXN0anMvY2FjaGUtbWFuYWdlcic7XHJcblxyXG5ATW9kdWxlKHtcclxuICBpbXBvcnRzOiBbU2hhcmVkU2VydmljZXNNb2R1bGUsIFxyXG4gICAgQ2FjaGVNb2R1bGUucmVnaXN0ZXIoe1xyXG4gICAgICBpc0dsb2JhbDogdHJ1ZSwgLy8gVXNlIGluLW1lbW9yeSBjYWNoaW5nXHJcbiAgICAgIHR0bDogNjAgKiAxMDAwLCAvLyBDYWNoZSBkdXJhdGlvbjogNjAgc2Vjb25kc1xyXG4gICAgfSksXHJcbiAgICBIdHRwTW9kdWxlLnJlZ2lzdGVyKHsgdGltZW91dDogNTAwMCwgbWF4UmVkaXJlY3RzOiA1IH0pLCBTY2hlZHVsZU1vZHVsZS5mb3JSb290KCldLFxyXG4gIHByb3ZpZGVyczogW1JhdGVTZXJ2aWNlXSxcclxuICBjb250cm9sbGVyczogW1JhdGVDb250cm9sbGVyXSxcclxuICBleHBvcnRzOiBbUmF0ZVNlcnZpY2VdLCAvLyBFeHBvcnQgaWYgdXNlZCBpbiBvdGhlciBtb2R1bGVzXHJcbn0pXHJcbmV4cG9ydCBjbGFzcyBSYXRlTW9kdWxlIHt9XHJcbiIsImltcG9ydCB7IEluamVjdCwgSW5qZWN0YWJsZSwgTG9nZ2VyIH0gZnJvbSAnQG5lc3Rqcy9jb21tb24nO1xyXG5pbXBvcnQgeyBIdHRwU2VydmljZSB9IGZyb20gJ0BuZXN0anMvYXhpb3MnO1xyXG5pbXBvcnQgeyBDcm9uIH0gZnJvbSAnQG5lc3Rqcy9zY2hlZHVsZSc7XHJcbmltcG9ydCB7IGxhc3RWYWx1ZUZyb20gfSBmcm9tICdyeGpzJztcclxuaW1wb3J0ICogYXMgZnMgZnJvbSAnZnMnO1xyXG5pbXBvcnQgKiBhcyBwYXRoIGZyb20gJ3BhdGgnO1xyXG5pbXBvcnQgeyBGaWxlU2VydmljZSB9IGZyb20gJ0BhcHAvc2hhcmVkLXNlcnZpY2VzL2ZpbGUuc2VydmljZSc7XHJcbmltcG9ydCB7IENBQ0hFX01BTkFHRVIgfSBmcm9tICdAbmVzdGpzL2NhY2hlLW1hbmFnZXInO1xyXG5pbXBvcnQgeyBDYWNoZSB9IGZyb20gJ2NhY2hlLW1hbmFnZXInO1xyXG5cclxuY29uc3QgREFUQV9GSUxFID0gcGF0aC5qb2luKF9fZGlybmFtZSwgJ3JhdGVzLmpzb24nKTtcclxuY29uc3QgQ09JTkdFQ0tPX0FQSSA9ICdodHRwczovL2FwaS5jb2luZ2Vja28uY29tL2FwaS92My9zaW1wbGUvcHJpY2U/aWRzPWJpdGNvaW4sZXRoZXJldW0sdGV0aGVyJnZzX2N1cnJlbmNpZXM9dXNkJztcclxuXHJcbkBJbmplY3RhYmxlKClcclxuZXhwb3J0IGNsYXNzIFJhdGVTZXJ2aWNlIHtcclxuICBwcml2YXRlIHJlYWRvbmx5IHJhdGVzRmlsZSA9ICdyYXRlcy5qc29uJztcclxuICBwcml2YXRlIHJlYWRvbmx5IGxvZ2dlciA9IG5ldyBMb2dnZXIoUmF0ZVNlcnZpY2UubmFtZSk7XHJcblxyXG4gIGNvbnN0cnVjdG9yKHByaXZhdGUgcmVhZG9ubHkgaHR0cFNlcnZpY2U6IEh0dHBTZXJ2aWNlLCBwcml2YXRlIHJlYWRvbmx5IGZpbGVTZXJ2aWNlOiBGaWxlU2VydmljZSxcclxuICAgIEBJbmplY3QoQ0FDSEVfTUFOQUdFUikgcHJpdmF0ZSBjYWNoZU1hbmFnZXI6IENhY2hlXHJcbiAgKSB7fVxyXG5cclxuICBwdWJsaWMgYXN5bmMgZ2V0UmF0ZXMoKTogUHJvbWlzZTxhbnk+IHtcclxuICAgIGNvbnN0IGNhY2hlZFJhdGVzID0gYXdhaXQgdGhpcy5jYWNoZU1hbmFnZXIuZ2V0KHRoaXMucmF0ZXNGaWxlKTtcclxuICAgIGlmIChjYWNoZWRSYXRlcykge1xyXG4gICAgICByZXR1cm4gY2FjaGVkUmF0ZXM7IC8vIFJldHVybiBjYWNoZWQgZGF0YSBpZiBhdmFpbGFibGVcclxuICAgIH1cclxuXHJcbiAgICB2YXIgcmF0ZXMgPSBhd2FpdCB0aGlzLmZpbGVTZXJ2aWNlLnJlYWRKc29uRmlsZSh0aGlzLnJhdGVzRmlsZSk7XHJcbiAgICBpZiAocmF0ZXMpIHtcclxuICAgICAgYXdhaXQgdGhpcy5jYWNoZU1hbmFnZXIuc2V0KHRoaXMucmF0ZXNGaWxlLCByYXRlcywgNjAgKiAxMDAwKTsgLy8gQ2FjaGUgZm9yIDYwIHNlY29uZHNcclxuICAgIH1cclxuICAgIHJldHVybiByYXRlcztcclxuXHJcbiAgfVxyXG5cclxuICBwcml2YXRlIGFzeW5jIHNhdmVSYXRlcyhuZXdSYXRlczogYW55KTogUHJvbWlzZTx2b2lkPiB7XHJcbiAgICBhd2FpdCB0aGlzLmZpbGVTZXJ2aWNlLndyaXRlSnNvbkZpbGUodGhpcy5yYXRlc0ZpbGUsIG5ld1JhdGVzKTtcclxuICAgIGF3YWl0IHRoaXMuY2FjaGVNYW5hZ2VyLnNldCh0aGlzLnJhdGVzRmlsZSwgbmV3UmF0ZXMsIDYwICogMTAwMCk7XHJcbiAgfVxyXG5cclxuICBhc3luYyBmZXRjaFJhdGVzKCk6IFByb21pc2U8YW55PiB7XHJcbiAgICB0cnkge1xyXG4gICAgICBjb25zdCByZXNwb25zZSA9IGF3YWl0IGxhc3RWYWx1ZUZyb20odGhpcy5odHRwU2VydmljZS5nZXQoQ09JTkdFQ0tPX0FQSSkpO1xyXG4gICAgICBjb25zdCByYXRlcyA9IHJlc3BvbnNlLmRhdGE7XHJcbiAgXHJcbiAgICAgIC8vIFNhdmUgdG8gZmlsZSBhbmQgY2FjaGVcclxuICAgICAgYXdhaXQgdGhpcy5zYXZlUmF0ZXMocmF0ZXMpO1xyXG4gICAgICBhd2FpdCB0aGlzLmNhY2hlTWFuYWdlci5zZXQoJ3JhdGVzJywgcmF0ZXMsIDYwICogMTAwMCk7XHJcbiAgXHJcbiAgICAgIHJldHVybiByYXRlcztcclxuICAgIH0gY2F0Y2ggKGVycm9yKSB7XHJcbiAgICAgIHRoaXMubG9nZ2VyLmVycm9yKCdGYWlsZWQgdG8gZmV0Y2ggcmF0ZXMnLCBlcnJvcik7XHJcbiAgXHJcbiAgICAgIC8vIFRyeSB0byBnZXQgZnJvbSBjYWNoZSBmaXJzdFxyXG4gICAgICBjb25zdCBjYWNoZWRSYXRlcyA9IGF3YWl0IHRoaXMuY2FjaGVNYW5hZ2VyLmdldCgncmF0ZXMnKTtcclxuICAgICAgaWYgKGNhY2hlZFJhdGVzKSB7XHJcbiAgICAgICAgcmV0dXJuIGNhY2hlZFJhdGVzO1xyXG4gICAgICB9XHJcbiAgXHJcbiAgICAgIC8vIElmIGNhY2hlIGlzIGVtcHR5LCBmYWxsYmFjayB0byBmaWxlXHJcbiAgICAgIHJldHVybiB0aGlzLmdldFJhdGVzKCk7XHJcbiAgICB9XHJcbiAgfVxyXG4gIFxyXG5cclxuICAvLyBAQ3JvbignMCAqLzEwICogKiAqIConKSAvLyBSdW4gZXZlcnkgMTAgbWludXRlc1xyXG4gIEBDcm9uKCcqLzUgKiAqICogKiAqJykgLy8gUnVuIGV2ZXJ5IDUgc2Vjb25kc1xyXG4gIGFzeW5jIHVwZGF0ZVJhdGVzKCkge1xyXG4gICAgdGhpcy5sb2dnZXIubG9nKCdVcGRhdGluZyBjcnlwdG9jdXJyZW5jeSByYXRlcy4uLicpO1xyXG4gICAgYXdhaXQgdGhpcy5mZXRjaFJhdGVzKCk7XHJcbiAgfVxyXG59IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwiQG5lc3Rqcy9heGlvc1wiKTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJAbmVzdGpzL2NhY2hlLW1hbmFnZXJcIik7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwiQG5lc3Rqcy9jb21tb25cIik7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwiQG5lc3Rqcy9jb3JlXCIpOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcIkBuZXN0anMvc2NoZWR1bGVcIik7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwiY2FjaGUtbWFuYWdlclwiKTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJjcnlwdG9cIik7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwiZnNcIik7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwicGF0aFwiKTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJyeGpzXCIpOyIsIi8vIFRoZSBtb2R1bGUgY2FjaGVcbnZhciBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX18gPSB7fTtcblxuLy8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbmZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG5cdHZhciBjYWNoZWRNb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdO1xuXHRpZiAoY2FjaGVkTW9kdWxlICE9PSB1bmRlZmluZWQpIHtcblx0XHRyZXR1cm4gY2FjaGVkTW9kdWxlLmV4cG9ydHM7XG5cdH1cblx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcblx0dmFyIG1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF0gPSB7XG5cdFx0Ly8gbm8gbW9kdWxlLmlkIG5lZWRlZFxuXHRcdC8vIG5vIG1vZHVsZS5sb2FkZWQgbmVlZGVkXG5cdFx0ZXhwb3J0czoge31cblx0fTtcblxuXHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cblx0X193ZWJwYWNrX21vZHVsZXNfX1ttb2R1bGVJZF0uY2FsbChtb2R1bGUuZXhwb3J0cywgbW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cblx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcblx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xufVxuXG4iLCJpbXBvcnQgeyBOZXN0RmFjdG9yeSB9IGZyb20gJ0BuZXN0anMvY29yZSc7XHJcbmltcG9ydCB7IEFwcE1vZHVsZSB9IGZyb20gJy4vYXBwLm1vZHVsZSc7XHJcblxyXG5hc3luYyBmdW5jdGlvbiBib290c3RyYXAoKSB7XHJcbiAgLy8gaWYgKHR5cGVvZiBnbG9iYWxUaGlzLmNyeXB0byA9PT0gJ3VuZGVmaW5lZCcpIHtcclxuICAvLyAgIGdsb2JhbFRoaXMuY3J5cHRvID0gcmVxdWlyZSgnY3J5cHRvLWJyb3dzZXJpZnknKTtcclxuICAvLyB9XHJcbiAgY29uc3QgYXBwID0gYXdhaXQgTmVzdEZhY3RvcnkuY3JlYXRlKEFwcE1vZHVsZSk7XHJcbiAgYXdhaXQgYXBwLmxpc3Rlbig0MDAwKTtcclxuLy8gIGFwcC5saXN0ZW4ocHJvY2Vzcy5lbnYuUE9SVCA/PyAzMDAwKTtcclxufVxyXG5ib290c3RyYXAoKTtcclxuIl0sIm5hbWVzIjpbXSwic291cmNlUm9vdCI6IiJ9