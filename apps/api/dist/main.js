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
let BalanceController = class BalanceController {
    balanceService;
    constructor(balanceService) {
        this.balanceService = balanceService;
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
    async getBalance(userId) {
        return await this.balanceService.getBalance(userId);
    }
    async getAllBalances() {
        return await this.balanceService.getAllBalances();
    }
};
exports.BalanceController = BalanceController;
__decorate([
    (0, common_1.Post)('add'),
    __param(0, (0, common_1.Headers)('X-User-ID')),
    __param(1, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, Object]),
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
__decorate([
    (0, common_1.Get)(':userId'),
    __param(0, (0, common_1.Param)('userId')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", Promise)
], BalanceController.prototype, "getBalance", null);
__decorate([
    (0, common_1.Get)(),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", typeof (_b = typeof Promise !== "undefined" && Promise) === "function" ? _b : Object)
], BalanceController.prototype, "getAllBalances", null);
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
const shared_services_1 = __webpack_require__(/*! @app/shared-services */ "./libs/shared-services/src/index.ts");
let BalanceModule = class BalanceModule {
};
exports.BalanceModule = BalanceModule;
exports.BalanceModule = BalanceModule = __decorate([
    (0, common_1.Module)({
        imports: [shared_services_1.SharedServicesModule],
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
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var _a;
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.BalanceService = void 0;
const common_1 = __webpack_require__(/*! @nestjs/common */ "@nestjs/common");
const file_service_1 = __webpack_require__(/*! @app/shared-services/file.service */ "./libs/shared-services/src/file.service.ts");
let BalanceService = class BalanceService {
    fileService;
    balanceFile = 'balances.json';
    constructor(fileService) {
        this.fileService = fileService;
    }
    async getBalance(userId) {
        const balances = await this.fileService.readJsonFile(this.balanceFile) || {};
        return balances[userId] ?? null;
    }
    async addBalance(userId, balance) {
        const balances = await this.fileService.readJsonFile(this.balanceFile) || {};
        if (!balances[userId]) {
            balances[userId] = {};
        }
        if (balances[userId][balance.asset]) {
            balances[userId][balance.asset] += balance.amount;
        }
        else {
            balances[userId][balance.asset] = balance.amount;
        }
        await this.fileService.writeJsonFile(this.balanceFile, balances);
    }
    async removeBalance(userId, asset) {
        const balances = await this.fileService.readJsonFile(this.balanceFile) || {};
        if (balances[userId] && balances[userId][asset]) {
            delete balances[userId][asset];
            await this.fileService.writeJsonFile(this.balanceFile, balances);
        }
    }
    async getTotalBalance(userId, currency) {
        const balances = await this.fileService.readJsonFile(this.balanceFile) || {};
        const userBalances = balances[userId] || {};
        let totalBalance = 0;
        for (const [asset, amount] of Object.entries(userBalances)) {
            totalBalance += amount;
        }
        return totalBalance;
    }
    async getAllBalances() {
        return await this.fileService.readJsonFile(this.balanceFile) || {};
    }
};
exports.BalanceService = BalanceService;
exports.BalanceService = BalanceService = __decorate([
    (0, common_1.Injectable)(),
    __metadata("design:paramtypes", [typeof (_a = typeof file_service_1.FileService !== "undefined" && file_service_1.FileService) === "function" ? _a : Object])
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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QUNILENBQUM7SUFLSyxLQUFELENBQUMsV0FBVztRQUNmLElBQUksQ0FBQyxNQUFNLENBQUMsR0FBRyxDQUFDLGtDQUFrQyxDQUFDLENBQUM7UUFDcEQsTUFBTSxJQUFJLENBQUMsVUFBVSxFQUFFLENBQUM7SUFDMUIsQ0FBQztDQUNGO0FBMURZLGtDQUFXO0FBc0RoQjtJQURMLG1CQUFJLEVBQUMsZUFBZSxDQUFDOzs7OzhDQUlyQjtzQkF6RFUsV0FBVztJQUR2Qix1QkFBVSxHQUFFO0lBTVIsOEJBQU0sRUFBQyw2QkFBYSxDQUFDO3lEQURrQixtQkFBVyxvQkFBWCxtQkFBVyxvREFBZ0MsMEJBQVcsb0JBQVgsMEJBQVcsb0RBQ2pELHFCQUFLLG9CQUFMLHFCQUFLO0dBTHpDLFdBQVcsQ0EwRHZCOzs7Ozs7Ozs7OztBQ3hFRDs7Ozs7Ozs7OztBQ0FBOzs7Ozs7Ozs7O0FDQUE7Ozs7Ozs7Ozs7QUNBQTs7Ozs7Ozs7OztBQ0FBOzs7Ozs7Ozs7O0FDQUE7Ozs7Ozs7Ozs7QUNBQTs7Ozs7Ozs7OztBQ0FBOzs7Ozs7Ozs7O0FDQUE7Ozs7Ozs7Ozs7QUNBQTs7Ozs7O1VDQUE7VUFDQTs7VUFFQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTs7VUFFQTtVQUNBOztVQUVBO1VBQ0E7VUFDQTs7Ozs7Ozs7Ozs7O0FDdEJBLHVFQUEyQztBQUMzQyxvRkFBeUM7QUFFekMsS0FBSyxVQUFVLFNBQVM7SUFJdEIsTUFBTSxHQUFHLEdBQUcsTUFBTSxrQkFBVyxDQUFDLE1BQU0sQ0FBQyxzQkFBUyxDQUFDLENBQUM7SUFDaEQsTUFBTSxHQUFHLENBQUMsTUFBTSxDQUFDLElBQUksQ0FBQyxDQUFDO0FBRXpCLENBQUM7QUFDRCxTQUFTLEVBQUUsQ0FBQyIsInNvdXJjZXMiOlsid2VicGFjazovL2FwaS8uL2xpYnMvc2hhcmVkLXNlcnZpY2VzL3NyYy9maWxlLnNlcnZpY2UudHMiLCJ3ZWJwYWNrOi8vYXBpLy4vbGlicy9zaGFyZWQtc2VydmljZXMvc3JjL2luZGV4LnRzIiwid2VicGFjazovL2FwaS8uL2xpYnMvc2hhcmVkLXNlcnZpY2VzL3NyYy9zaGFyZWQtc2VydmljZXMubW9kdWxlLnRzIiwid2VicGFjazovL2FwaS8uL2xpYnMvc2hhcmVkLXNlcnZpY2VzL3NyYy9zaGFyZWQtc2VydmljZXMuc2VydmljZS50cyIsIndlYnBhY2s6Ly9hcGkvLi9zcmMvYXBwLm1vZHVsZS50cyIsIndlYnBhY2s6Ly9hcGkvLi9zcmMvYmFsYW5jZS5jb250cm9sbGVyLnRzIiwid2VicGFjazovL2FwaS8uL3NyYy9iYWxhbmNlLm1vZHVsZS50cyIsIndlYnBhY2s6Ly9hcGkvLi9zcmMvYmFsYW5jZS5zZXJ2aWNlLnRzIiwid2VicGFjazovL2FwaS8uL3NyYy9yYXRlLmNvbnRyb2xsZXIudHMiLCJ3ZWJwYWNrOi8vYXBpLy4vc3JjL3JhdGUubW9kdWxlLnRzIiwid2VicGFjazovL2FwaS8uL3NyYy9yYXRlLnNlcnZpY2UudHMiLCJ3ZWJwYWNrOi8vYXBpL2V4dGVybmFsIGNvbW1vbmpzIFwiQG5lc3Rqcy9heGlvc1wiIiwid2VicGFjazovL2FwaS9leHRlcm5hbCBjb21tb25qcyBcIkBuZXN0anMvY2FjaGUtbWFuYWdlclwiIiwid2VicGFjazovL2FwaS9leHRlcm5hbCBjb21tb25qcyBcIkBuZXN0anMvY29tbW9uXCIiLCJ3ZWJwYWNrOi8vYXBpL2V4dGVybmFsIGNvbW1vbmpzIFwiQG5lc3Rqcy9jb3JlXCIiLCJ3ZWJwYWNrOi8vYXBpL2V4dGVybmFsIGNvbW1vbmpzIFwiQG5lc3Rqcy9zY2hlZHVsZVwiIiwid2VicGFjazovL2FwaS9leHRlcm5hbCBjb21tb25qcyBcImNhY2hlLW1hbmFnZXJcIiIsIndlYnBhY2s6Ly9hcGkvZXh0ZXJuYWwgbm9kZS1jb21tb25qcyBcImNyeXB0b1wiIiwid2VicGFjazovL2FwaS9leHRlcm5hbCBub2RlLWNvbW1vbmpzIFwiZnNcIiIsIndlYnBhY2s6Ly9hcGkvZXh0ZXJuYWwgbm9kZS1jb21tb25qcyBcInBhdGhcIiIsIndlYnBhY2s6Ly9hcGkvZXh0ZXJuYWwgY29tbW9uanMgXCJyeGpzXCIiLCJ3ZWJwYWNrOi8vYXBpL3dlYnBhY2svYm9vdHN0cmFwIiwid2VicGFjazovL2FwaS8uL3NyYy9tYWluLnRzIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IEluamVjdGFibGUgfSBmcm9tICdAbmVzdGpzL2NvbW1vbic7XHJcbmltcG9ydCB7IHByb21pc2VzIGFzIGZzIH0gZnJvbSAnZnMnO1xyXG5pbXBvcnQgKiBhcyBwYXRoIGZyb20gJ3BhdGgnO1xyXG5cclxuQEluamVjdGFibGUoKVxyXG5leHBvcnQgY2xhc3MgRmlsZVNlcnZpY2Uge1xyXG4gIHByaXZhdGUgcmVhZG9ubHkgZGF0YURpciA9IHBhdGgucmVzb2x2ZShfX2Rpcm5hbWUsICcuLi8uLi8uLi9kYXRhJyk7IC8vIEVuc3VyZXMgaXQncyBvdXRzaWRlIGRpc3QvXHJcblxyXG4gIGNvbnN0cnVjdG9yKCkge1xyXG4gICAgdGhpcy5lbnN1cmVEYXRhRGlyRXhpc3RzKCk7XHJcbiAgfVxyXG5cclxuICAvLyBFbnN1cmUgZGF0YSBkaXJlY3RvcnkgZXhpc3RzXHJcbiAgcHJpdmF0ZSBhc3luYyBlbnN1cmVEYXRhRGlyRXhpc3RzKCk6IFByb21pc2U8dm9pZD4ge1xyXG4gICAgdHJ5IHtcclxuICAgICAgYXdhaXQgZnMubWtkaXIodGhpcy5kYXRhRGlyLCB7IHJlY3Vyc2l2ZTogdHJ1ZSB9KTtcclxuICAgIH0gY2F0Y2ggKGVycm9yKSB7XHJcbiAgICAgIGNvbnNvbGUuZXJyb3IoJ0Vycm9yIGNyZWF0aW5nIGRhdGEgZGlyZWN0b3J5OicsIGVycm9yKTtcclxuICAgIH1cclxuICB9XHJcblxyXG4gIC8vIFJlYWQgSlNPTiBmaWxlXHJcbiAgYXN5bmMgcmVhZEpzb25GaWxlPFQ+KGZpbGVuYW1lOiBzdHJpbmcpOiBQcm9taXNlPFQgfCBudWxsPiB7XHJcbiAgICBjb25zdCBmaWxlUGF0aCA9IHBhdGguam9pbih0aGlzLmRhdGFEaXIsIGZpbGVuYW1lKTtcclxuICAgIHRyeSB7XHJcbiAgICAgIGNvbnN0IGRhdGEgPSBhd2FpdCBmcy5yZWFkRmlsZShmaWxlUGF0aCwgJ3V0Zi04Jyk7XHJcbiAgICAgIHJldHVybiBKU09OLnBhcnNlKGRhdGEpO1xyXG4gICAgfSBjYXRjaCAoZXJyb3IpIHtcclxuICAgICAgY29uc29sZS5lcnJvcihgRXJyb3IgcmVhZGluZyBmaWxlICR7ZmlsZW5hbWV9OmAsIGVycm9yKTtcclxuICAgICAgcmV0dXJuIG51bGw7XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICAvLyBXcml0ZSBKU09OIGZpbGVcclxuICBhc3luYyB3cml0ZUpzb25GaWxlKGZpbGVuYW1lOiBzdHJpbmcsIGRhdGE6IHVua25vd24pOiBQcm9taXNlPHZvaWQ+IHtcclxuICAgIGNvbnN0IGZpbGVQYXRoID0gcGF0aC5qb2luKHRoaXMuZGF0YURpciwgZmlsZW5hbWUpO1xyXG4gICAgdHJ5IHtcclxuICAgICAgYXdhaXQgZnMud3JpdGVGaWxlKGZpbGVQYXRoLCBKU09OLnN0cmluZ2lmeShkYXRhLCBudWxsLCAyKSwgJ3V0Zi04Jyk7XHJcbiAgICB9IGNhdGNoIChlcnJvcikge1xyXG4gICAgICBjb25zb2xlLmVycm9yKGBFcnJvciB3cml0aW5nIGZpbGUgJHtmaWxlbmFtZX06YCwgZXJyb3IpO1xyXG4gICAgfVxyXG4gIH1cclxufVxyXG4iLCJleHBvcnQgKiBmcm9tICcuL3NoYXJlZC1zZXJ2aWNlcy5tb2R1bGUnO1xyXG5leHBvcnQgKiBmcm9tICcuL3NoYXJlZC1zZXJ2aWNlcy5zZXJ2aWNlJztcclxuIiwiaW1wb3J0IHsgTW9kdWxlIH0gZnJvbSAnQG5lc3Rqcy9jb21tb24nO1xyXG5pbXBvcnQgeyBGaWxlU2VydmljZSB9IGZyb20gJy4vZmlsZS5zZXJ2aWNlJztcclxuXHJcbkBNb2R1bGUoe1xyXG4gIHByb3ZpZGVyczogW0ZpbGVTZXJ2aWNlXSxcclxuICBleHBvcnRzOiBbRmlsZVNlcnZpY2VdLFxyXG59KVxyXG5leHBvcnQgY2xhc3MgU2hhcmVkU2VydmljZXNNb2R1bGUge31cclxuIiwiaW1wb3J0IHsgSW5qZWN0YWJsZSB9IGZyb20gJ0BuZXN0anMvY29tbW9uJztcclxuXHJcbkBJbmplY3RhYmxlKClcclxuZXhwb3J0IGNsYXNzIFNoYXJlZFNlcnZpY2VzU2VydmljZSB7fVxyXG4iLCJpbXBvcnQgeyBNb2R1bGUgfSBmcm9tICdAbmVzdGpzL2NvbW1vbic7XHJcbmNvbnN0IGNyeXB0byA9IHJlcXVpcmUoJ2NyeXB0bycpO1xyXG5pbXBvcnQgeyBTY2hlZHVsZU1vZHVsZSB9IGZyb20gJ0BuZXN0anMvc2NoZWR1bGUnO1xyXG5pbXBvcnQgeyBIdHRwTW9kdWxlIH0gZnJvbSAnQG5lc3Rqcy9heGlvcyc7XHJcbmltcG9ydCB7IEJhbGFuY2VNb2R1bGUgfSBmcm9tICcuL2JhbGFuY2UubW9kdWxlJztcclxuaW1wb3J0IHsgUmF0ZU1vZHVsZSB9IGZyb20gJy4vcmF0ZS5tb2R1bGUnO1xyXG5pbXBvcnQgeyBTaGFyZWRTZXJ2aWNlc01vZHVsZSB9IGZyb20gJ0BhcHAvc2hhcmVkLXNlcnZpY2VzJztcclxuXHJcbi8vIEVuc3VyZSB0aGF0IHRoZSBgY3J5cHRvYCBtb2R1bGUgaXMgYXZhaWxhYmxlIGdsb2JhbGx5XHJcbmlmICh0eXBlb2YgZ2xvYmFsVGhpcy5jcnlwdG8gPT09ICd1bmRlZmluZWQnKSB7XHJcbiAgZ2xvYmFsVGhpcy5jcnlwdG8gPSBjcnlwdG87XHJcbn1cclxuQE1vZHVsZSh7XHJcbiAgaW1wb3J0czogW1xyXG4gICAgU2hhcmVkU2VydmljZXNNb2R1bGUsXHJcbiAgICBIdHRwTW9kdWxlLCAvLyBFbnN1cmUgSHR0cE1vZHVsZSBpcyBhdmFpbGFibGUgZ2xvYmFsbHlcclxuICAgIFNjaGVkdWxlTW9kdWxlLmZvclJvb3QoKSwgLy8gRW5hYmxlcyBiYWNrZ3JvdW5kIGpvYiBzY2hlZHVsaW5nXHJcbiAgICBCYWxhbmNlTW9kdWxlLCAvLyBCYWxhbmNlIHNlcnZpY2UgbW9kdWxlXHJcbiAgICBSYXRlTW9kdWxlLCAvLyBSYXRlIHNlcnZpY2UgbW9kdWxlXHJcbiAgXSxcclxufSlcclxuZXhwb3J0IGNsYXNzIEFwcE1vZHVsZSB7fVxyXG4iLCJpbXBvcnQgeyBDb250cm9sbGVyLCBHZXQsIFBvc3QsIERlbGV0ZSwgUGFyYW0sIEJvZHksIEhlYWRlcnMgfSBmcm9tICdAbmVzdGpzL2NvbW1vbic7XHJcbmltcG9ydCB7IEJhbGFuY2VTZXJ2aWNlIH0gZnJvbSAnLi9iYWxhbmNlLnNlcnZpY2UnO1xyXG5cclxuaW50ZXJmYWNlIEJhbGFuY2Uge1xyXG4gIGFzc2V0OiBzdHJpbmc7XHJcbiAgYW1vdW50OiBudW1iZXI7XHJcbn1cclxuXHJcbkBDb250cm9sbGVyKCdiYWxhbmNlcycpXHJcbmV4cG9ydCBjbGFzcyBCYWxhbmNlQ29udHJvbGxlciB7XHJcbiAgY29uc3RydWN0b3IocHJpdmF0ZSByZWFkb25seSBiYWxhbmNlU2VydmljZTogQmFsYW5jZVNlcnZpY2UpIHt9XHJcblxyXG4gIC8vIEFkZCBiYWxhbmNlIHRvIHVzZXJcclxuICBAUG9zdCgnYWRkJylcclxuICBhZGRCYWxhbmNlKEBIZWFkZXJzKCdYLVVzZXItSUQnKSB1c2VySWQ6IHN0cmluZywgQEJvZHkoKSBiYWxhbmNlOiBCYWxhbmNlKSB7XHJcbiAgICByZXR1cm4gdGhpcy5iYWxhbmNlU2VydmljZS5hZGRCYWxhbmNlKHVzZXJJZCwgYmFsYW5jZSk7XHJcbiAgfVxyXG5cclxuICAvLyBSZW1vdmUgYXNzZXQgZnJvbSB1c2VyIGJhbGFuY2VcclxuICBARGVsZXRlKCdyZW1vdmUvOmFzc2V0JylcclxuICByZW1vdmVCYWxhbmNlKEBIZWFkZXJzKCdYLVVzZXItSUQnKSB1c2VySWQ6IHN0cmluZywgQFBhcmFtKCdhc3NldCcpIGFzc2V0OiBzdHJpbmcpIHtcclxuICAgIHJldHVybiB0aGlzLmJhbGFuY2VTZXJ2aWNlLnJlbW92ZUJhbGFuY2UodXNlcklkLCBhc3NldCk7XHJcbiAgfVxyXG5cclxuICAvLyBHZXQgdG90YWwgYmFsYW5jZSBvZiB1c2VyIGluIGEgY3VycmVuY3lcclxuICBAR2V0KCd0b3RhbC86Y3VycmVuY3knKVxyXG4gIGdldFRvdGFsQmFsYW5jZShASGVhZGVycygnWC1Vc2VyLUlEJykgdXNlcklkOiBzdHJpbmcsIEBQYXJhbSgnY3VycmVuY3knKSBjdXJyZW5jeTogc3RyaW5nKSB7XHJcbiAgICByZXR1cm4gdGhpcy5iYWxhbmNlU2VydmljZS5nZXRUb3RhbEJhbGFuY2UodXNlcklkLCBjdXJyZW5jeSk7XHJcbiAgfVxyXG5cclxuICAvLyBGZXRjaCB1c2VyIGJhbGFuY2VcclxuICBAR2V0KCc6dXNlcklkJylcclxuICBhc3luYyBnZXRCYWxhbmNlKEBQYXJhbSgndXNlcklkJykgdXNlcklkOiBzdHJpbmcpIHtcclxuICAgIHJldHVybiBhd2FpdCB0aGlzLmJhbGFuY2VTZXJ2aWNlLmdldEJhbGFuY2UodXNlcklkKTtcclxuICB9XHJcblxyXG4gIC8vIEZldGNoIGFsbCBiYWxhbmNlcyAoYWRtaW4gZW5kcG9pbnQpXHJcbiAgQEdldCgpXHJcbiAgYXN5bmMgZ2V0QWxsQmFsYW5jZXMoKTogUHJvbWlzZTxhbnk+IHtcclxuICAgIHJldHVybiBhd2FpdCB0aGlzLmJhbGFuY2VTZXJ2aWNlLmdldEFsbEJhbGFuY2VzKCk7XHJcbiAgfVxyXG59XHJcbiIsImltcG9ydCB7IE1vZHVsZSB9IGZyb20gJ0BuZXN0anMvY29tbW9uJztcclxuaW1wb3J0IHsgQmFsYW5jZUNvbnRyb2xsZXIgfSBmcm9tICcuL2JhbGFuY2UuY29udHJvbGxlcic7XHJcbmltcG9ydCB7IEJhbGFuY2VTZXJ2aWNlIH0gZnJvbSAnLi9iYWxhbmNlLnNlcnZpY2UnO1xyXG5pbXBvcnQgeyBTaGFyZWRTZXJ2aWNlc01vZHVsZSB9IGZyb20gJ0BhcHAvc2hhcmVkLXNlcnZpY2VzJztcclxuXHJcbkBNb2R1bGUoe1xyXG4gIGltcG9ydHM6IFtTaGFyZWRTZXJ2aWNlc01vZHVsZV0sXHJcbiAgY29udHJvbGxlcnM6IFtCYWxhbmNlQ29udHJvbGxlcl0sXHJcbiAgcHJvdmlkZXJzOiBbQmFsYW5jZVNlcnZpY2VdLFxyXG59KVxyXG5leHBvcnQgY2xhc3MgQmFsYW5jZU1vZHVsZSB7fSIsImltcG9ydCB7IEluamVjdGFibGUgfSBmcm9tICdAbmVzdGpzL2NvbW1vbic7XHJcbmltcG9ydCB7IEZpbGVTZXJ2aWNlIH0gZnJvbSAnQGFwcC9zaGFyZWQtc2VydmljZXMvZmlsZS5zZXJ2aWNlJztcclxuXHJcbmludGVyZmFjZSBCYWxhbmNlcyB7XHJcbiAgW3VzZXJJZDogc3RyaW5nXTogeyBbYXNzZXQ6IHN0cmluZ106IG51bWJlciB9OyAvLyBEZWZpbmVzIHVzZXJJZCBtYXBzIHRvIGFzc2V0IGJhbGFuY2VzXHJcbn1cclxuXHJcbmludGVyZmFjZSBCYWxhbmNlIHtcclxuICBhc3NldDogc3RyaW5nO1xyXG4gIGFtb3VudDogbnVtYmVyO1xyXG59XHJcblxyXG5ASW5qZWN0YWJsZSgpXHJcbmV4cG9ydCBjbGFzcyBCYWxhbmNlU2VydmljZSB7XHJcbiAgcHJpdmF0ZSByZWFkb25seSBiYWxhbmNlRmlsZSA9ICdiYWxhbmNlcy5qc29uJztcclxuXHJcbiAgY29uc3RydWN0b3IocHJpdmF0ZSByZWFkb25seSBmaWxlU2VydmljZTogRmlsZVNlcnZpY2UpIHt9XHJcblxyXG4gIC8vIEZldGNoIHVzZXIgYmFsYW5jZSBmcm9tIGZpbGVcclxuICBhc3luYyBnZXRCYWxhbmNlKHVzZXJJZDogc3RyaW5nKTogUHJvbWlzZTx7IFthc3NldDogc3RyaW5nXTogbnVtYmVyIH0gfCBudWxsPiB7XHJcbiAgICBjb25zdCBiYWxhbmNlczogQmFsYW5jZXMgPSBhd2FpdCB0aGlzLmZpbGVTZXJ2aWNlLnJlYWRKc29uRmlsZSh0aGlzLmJhbGFuY2VGaWxlKSB8fCB7fTtcclxuICAgIHJldHVybiBiYWxhbmNlc1t1c2VySWRdID8/IG51bGw7XHJcbiAgfVxyXG5cclxuICAvLyBBZGQgYmFsYW5jZSB0byBhIHVzZXIncyBhc3NldFxyXG4gIGFzeW5jIGFkZEJhbGFuY2UodXNlcklkOiBzdHJpbmcsIGJhbGFuY2U6IEJhbGFuY2UpOiBQcm9taXNlPHZvaWQ+IHtcclxuICAgIGNvbnN0IGJhbGFuY2VzOiBCYWxhbmNlcyA9IGF3YWl0IHRoaXMuZmlsZVNlcnZpY2UucmVhZEpzb25GaWxlKHRoaXMuYmFsYW5jZUZpbGUpIHx8IHt9O1xyXG4gICAgaWYgKCFiYWxhbmNlc1t1c2VySWRdKSB7XHJcbiAgICAgIGJhbGFuY2VzW3VzZXJJZF0gPSB7fTtcclxuICAgIH1cclxuXHJcbiAgICBpZiAoYmFsYW5jZXNbdXNlcklkXVtiYWxhbmNlLmFzc2V0XSkge1xyXG4gICAgICBiYWxhbmNlc1t1c2VySWRdW2JhbGFuY2UuYXNzZXRdICs9IGJhbGFuY2UuYW1vdW50OyAvLyBBZGQgdG8gZXhpc3RpbmcgYXNzZXQgYmFsYW5jZVxyXG4gICAgfSBlbHNlIHtcclxuICAgICAgYmFsYW5jZXNbdXNlcklkXVtiYWxhbmNlLmFzc2V0XSA9IGJhbGFuY2UuYW1vdW50OyAvLyBTZXQgbmV3IGFzc2V0IGJhbGFuY2VcclxuICAgIH1cclxuXHJcbiAgICBhd2FpdCB0aGlzLmZpbGVTZXJ2aWNlLndyaXRlSnNvbkZpbGUodGhpcy5iYWxhbmNlRmlsZSwgYmFsYW5jZXMpO1xyXG4gIH1cclxuXHJcbiAgLy8gUmVtb3ZlIGEgc3BlY2lmaWMgYXNzZXQgZm9yIGEgdXNlclxyXG4gIGFzeW5jIHJlbW92ZUJhbGFuY2UodXNlcklkOiBzdHJpbmcsIGFzc2V0OiBzdHJpbmcpOiBQcm9taXNlPHZvaWQ+IHtcclxuICAgIGNvbnN0IGJhbGFuY2VzOiBCYWxhbmNlcyA9IGF3YWl0IHRoaXMuZmlsZVNlcnZpY2UucmVhZEpzb25GaWxlKHRoaXMuYmFsYW5jZUZpbGUpIHx8IHt9O1xyXG4gICAgaWYgKGJhbGFuY2VzW3VzZXJJZF0gJiYgYmFsYW5jZXNbdXNlcklkXVthc3NldF0pIHtcclxuICAgICAgZGVsZXRlIGJhbGFuY2VzW3VzZXJJZF1bYXNzZXRdOyAvLyBSZW1vdmUgdGhlIGFzc2V0XHJcbiAgICAgIGF3YWl0IHRoaXMuZmlsZVNlcnZpY2Uud3JpdGVKc29uRmlsZSh0aGlzLmJhbGFuY2VGaWxlLCBiYWxhbmNlcyk7XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICAvLyBHZXQgdGhlIHRvdGFsIGJhbGFuY2UgZm9yIGEgdXNlciBpbiBhIHNwZWNpZmljIGN1cnJlbmN5XHJcbiAgYXN5bmMgZ2V0VG90YWxCYWxhbmNlKHVzZXJJZDogc3RyaW5nLCBjdXJyZW5jeTogc3RyaW5nKTogUHJvbWlzZTxudW1iZXI+IHtcclxuICAgIGNvbnN0IGJhbGFuY2VzOiBCYWxhbmNlcyA9IGF3YWl0IHRoaXMuZmlsZVNlcnZpY2UucmVhZEpzb25GaWxlKHRoaXMuYmFsYW5jZUZpbGUpIHx8IHt9O1xyXG4gICAgY29uc3QgdXNlckJhbGFuY2VzID0gYmFsYW5jZXNbdXNlcklkXSB8fCB7fTtcclxuICAgIFxyXG4gICAgLy8gQ2FsY3VsYXRlIHRvdGFsIGJhbGFuY2UgKGFzc3VtaW5nIGV4Y2hhbmdlIHJhdGUgbG9naWMgZXhpc3RzIG9yIGlzIGFkZGVkIGxhdGVyKVxyXG4gICAgbGV0IHRvdGFsQmFsYW5jZSA9IDA7XHJcbiAgICBmb3IgKGNvbnN0IFthc3NldCwgYW1vdW50XSBvZiBPYmplY3QuZW50cmllcyh1c2VyQmFsYW5jZXMpKSB7XHJcbiAgICAgIC8vIEV4YW1wbGU6IFlvdSBtYXkgbmVlZCB0byBjb252ZXJ0IHRoZSBhc3NldCB0byB0aGUgcmVxdWVzdGVkIGN1cnJlbmN5LCB1c2luZyBleGNoYW5nZSByYXRlcy5cclxuICAgICAgLy8gRm9yIG5vdywganVzdCBzdW1taW5nIHRoZSBhbW91bnRzLlxyXG4gICAgICB0b3RhbEJhbGFuY2UgKz0gYW1vdW50O1xyXG4gICAgfVxyXG5cclxuICAgIHJldHVybiB0b3RhbEJhbGFuY2U7XHJcbiAgfVxyXG5cclxuICAvLyBGZXRjaCBhbGwgYmFsYW5jZXMgKHVzZWZ1bCBmb3IgYWRtaW4gb3BlcmF0aW9ucylcclxuICBhc3luYyBnZXRBbGxCYWxhbmNlcygpOiBQcm9taXNlPEJhbGFuY2VzPiB7XHJcbiAgICByZXR1cm4gYXdhaXQgdGhpcy5maWxlU2VydmljZS5yZWFkSnNvbkZpbGUodGhpcy5iYWxhbmNlRmlsZSkgfHwge307XHJcbiAgfVxyXG59XHJcbiIsImltcG9ydCB7IENvbnRyb2xsZXIsIEdldCB9IGZyb20gJ0BuZXN0anMvY29tbW9uJztcclxuaW1wb3J0IHsgUmF0ZVNlcnZpY2UgfSBmcm9tICcuL3JhdGUuc2VydmljZSc7XHJcblxyXG5AQ29udHJvbGxlcigncmF0ZXMnKVxyXG5leHBvcnQgY2xhc3MgUmF0ZUNvbnRyb2xsZXIge1xyXG4gIGNvbnN0cnVjdG9yKHByaXZhdGUgcmVhZG9ubHkgcmF0ZVNlcnZpY2U6IFJhdGVTZXJ2aWNlKSB7fVxyXG5cclxuICBAR2V0KClcclxuICBhc3luYyBnZXRSYXRlcygpIHtcclxuICAgIHJldHVybiBhd2FpdCB0aGlzLnJhdGVTZXJ2aWNlLmdldFJhdGVzKCk7XHJcbiAgfVxyXG5cclxuICBAR2V0KCdyZWZyZXNoJylcclxuICBhc3luYyByZWZyZXNoUmF0ZXMoKSB7XHJcbiAgICByZXR1cm4gYXdhaXQgdGhpcy5yYXRlU2VydmljZS5mZXRjaFJhdGVzKCk7XHJcbiAgfVxyXG59IiwiaW1wb3J0IHsgTW9kdWxlIH0gZnJvbSAnQG5lc3Rqcy9jb21tb24nO1xyXG5pbXBvcnQgKiBhcyBjcnlwdG8gZnJvbSAnY3J5cHRvJztcclxuaW1wb3J0IHsgU2NoZWR1bGVNb2R1bGUgfSBmcm9tICdAbmVzdGpzL3NjaGVkdWxlJztcclxuaW1wb3J0IHsgUmF0ZVNlcnZpY2UgfSBmcm9tICcuL3JhdGUuc2VydmljZSc7XHJcbmltcG9ydCB7IFJhdGVDb250cm9sbGVyIH0gZnJvbSAnLi9yYXRlLmNvbnRyb2xsZXInO1xyXG5pbXBvcnQgeyBIdHRwTW9kdWxlIH0gZnJvbSAnQG5lc3Rqcy9heGlvcyc7XHJcbmltcG9ydCB7IFNoYXJlZFNlcnZpY2VzTW9kdWxlIH0gZnJvbSAnQGFwcC9zaGFyZWQtc2VydmljZXMnO1xyXG5pbXBvcnQgeyBDYWNoZU1vZHVsZSB9IGZyb20gJ0BuZXN0anMvY2FjaGUtbWFuYWdlcic7XHJcblxyXG5ATW9kdWxlKHtcclxuICBpbXBvcnRzOiBbU2hhcmVkU2VydmljZXNNb2R1bGUsIFxyXG4gICAgQ2FjaGVNb2R1bGUucmVnaXN0ZXIoe1xyXG4gICAgICBpc0dsb2JhbDogdHJ1ZSwgLy8gVXNlIGluLW1lbW9yeSBjYWNoaW5nXHJcbiAgICAgIHR0bDogNjAgKiAxMDAwLCAvLyBDYWNoZSBkdXJhdGlvbjogNjAgc2Vjb25kc1xyXG4gICAgfSksXHJcbiAgICBIdHRwTW9kdWxlLnJlZ2lzdGVyKHsgdGltZW91dDogNTAwMCwgbWF4UmVkaXJlY3RzOiA1IH0pLCBTY2hlZHVsZU1vZHVsZS5mb3JSb290KCldLFxyXG4gIHByb3ZpZGVyczogW1JhdGVTZXJ2aWNlXSxcclxuICBjb250cm9sbGVyczogW1JhdGVDb250cm9sbGVyXSxcclxuICBleHBvcnRzOiBbUmF0ZVNlcnZpY2VdLCAvLyBFeHBvcnQgaWYgdXNlZCBpbiBvdGhlciBtb2R1bGVzXHJcbn0pXHJcbmV4cG9ydCBjbGFzcyBSYXRlTW9kdWxlIHt9XHJcbiIsImltcG9ydCB7IEluamVjdCwgSW5qZWN0YWJsZSwgTG9nZ2VyIH0gZnJvbSAnQG5lc3Rqcy9jb21tb24nO1xyXG5pbXBvcnQgeyBIdHRwU2VydmljZSB9IGZyb20gJ0BuZXN0anMvYXhpb3MnO1xyXG5pbXBvcnQgeyBDcm9uIH0gZnJvbSAnQG5lc3Rqcy9zY2hlZHVsZSc7XHJcbmltcG9ydCB7IGxhc3RWYWx1ZUZyb20gfSBmcm9tICdyeGpzJztcclxuaW1wb3J0ICogYXMgZnMgZnJvbSAnZnMnO1xyXG5pbXBvcnQgKiBhcyBwYXRoIGZyb20gJ3BhdGgnO1xyXG5pbXBvcnQgeyBGaWxlU2VydmljZSB9IGZyb20gJ0BhcHAvc2hhcmVkLXNlcnZpY2VzL2ZpbGUuc2VydmljZSc7XHJcbmltcG9ydCB7IENBQ0hFX01BTkFHRVIgfSBmcm9tICdAbmVzdGpzL2NhY2hlLW1hbmFnZXInO1xyXG5pbXBvcnQgeyBDYWNoZSB9IGZyb20gJ2NhY2hlLW1hbmFnZXInO1xyXG5cclxuY29uc3QgREFUQV9GSUxFID0gcGF0aC5qb2luKF9fZGlybmFtZSwgJ3JhdGVzLmpzb24nKTtcclxuY29uc3QgQ09JTkdFQ0tPX0FQSSA9ICdodHRwczovL2FwaS5jb2luZ2Vja28uY29tL2FwaS92My9zaW1wbGUvcHJpY2U/aWRzPWJpdGNvaW4sZXRoZXJldW0sdGV0aGVyJnZzX2N1cnJlbmNpZXM9dXNkJztcclxuXHJcbkBJbmplY3RhYmxlKClcclxuZXhwb3J0IGNsYXNzIFJhdGVTZXJ2aWNlIHtcclxuICBwcml2YXRlIHJlYWRvbmx5IHJhdGVzRmlsZSA9ICdyYXRlcy5qc29uJztcclxuICBwcml2YXRlIHJlYWRvbmx5IGxvZ2dlciA9IG5ldyBMb2dnZXIoUmF0ZVNlcnZpY2UubmFtZSk7XHJcblxyXG4gIGNvbnN0cnVjdG9yKHByaXZhdGUgcmVhZG9ubHkgaHR0cFNlcnZpY2U6IEh0dHBTZXJ2aWNlLCBwcml2YXRlIHJlYWRvbmx5IGZpbGVTZXJ2aWNlOiBGaWxlU2VydmljZSxcclxuICAgIEBJbmplY3QoQ0FDSEVfTUFOQUdFUikgcHJpdmF0ZSBjYWNoZU1hbmFnZXI6IENhY2hlXHJcbiAgKSB7fVxyXG5cclxuICBwdWJsaWMgYXN5bmMgZ2V0UmF0ZXMoKTogUHJvbWlzZTxhbnk+IHtcclxuICAgIGNvbnN0IGNhY2hlZFJhdGVzID0gYXdhaXQgdGhpcy5jYWNoZU1hbmFnZXIuZ2V0KHRoaXMucmF0ZXNGaWxlKTtcclxuICAgIGlmIChjYWNoZWRSYXRlcykge1xyXG4gICAgICByZXR1cm4gY2FjaGVkUmF0ZXM7IC8vIFJldHVybiBjYWNoZWQgZGF0YSBpZiBhdmFpbGFibGVcclxuICAgIH1cclxuXHJcbiAgICB2YXIgcmF0ZXMgPSBhd2FpdCB0aGlzLmZpbGVTZXJ2aWNlLnJlYWRKc29uRmlsZSh0aGlzLnJhdGVzRmlsZSk7XHJcbiAgICBpZiAocmF0ZXMpIHtcclxuICAgICAgYXdhaXQgdGhpcy5jYWNoZU1hbmFnZXIuc2V0KHRoaXMucmF0ZXNGaWxlLCByYXRlcywgNjAgKiAxMDAwKTsgLy8gQ2FjaGUgZm9yIDYwIHNlY29uZHNcclxuICAgIH1cclxuICAgIHJldHVybiByYXRlcztcclxuXHJcbiAgfVxyXG5cclxuICBwcml2YXRlIGFzeW5jIHNhdmVSYXRlcyhuZXdSYXRlczogYW55KTogUHJvbWlzZTx2b2lkPiB7XHJcbiAgICBhd2FpdCB0aGlzLmZpbGVTZXJ2aWNlLndyaXRlSnNvbkZpbGUodGhpcy5yYXRlc0ZpbGUsIG5ld1JhdGVzKTtcclxuICAgIGF3YWl0IHRoaXMuY2FjaGVNYW5hZ2VyLnNldCh0aGlzLnJhdGVzRmlsZSwgbmV3UmF0ZXMsIDYwICogMTAwMCk7XHJcbiAgfVxyXG5cclxuICBhc3luYyBmZXRjaFJhdGVzKCk6IFByb21pc2U8YW55PiB7XHJcbiAgICB0cnkge1xyXG4gICAgICBjb25zdCByZXNwb25zZSA9IGF3YWl0IGxhc3RWYWx1ZUZyb20odGhpcy5odHRwU2VydmljZS5nZXQoQ09JTkdFQ0tPX0FQSSkpO1xyXG4gICAgICBjb25zdCByYXRlcyA9IHJlc3BvbnNlLmRhdGE7XHJcbiAgXHJcbiAgICAgIC8vIFNhdmUgdG8gZmlsZSBhbmQgY2FjaGVcclxuICAgICAgYXdhaXQgdGhpcy5zYXZlUmF0ZXMocmF0ZXMpO1xyXG4gICAgICBhd2FpdCB0aGlzLmNhY2hlTWFuYWdlci5zZXQoJ3JhdGVzJywgcmF0ZXMsIDYwICogMTAwMCk7XHJcbiAgXHJcbiAgICAgIHJldHVybiByYXRlcztcclxuICAgIH0gY2F0Y2ggKGVycm9yKSB7XHJcbiAgICAgIHRoaXMubG9nZ2VyLmVycm9yKCdGYWlsZWQgdG8gZmV0Y2ggcmF0ZXMnLCBlcnJvcik7XHJcbiAgXHJcbiAgICAgIC8vIFRyeSB0byBnZXQgZnJvbSBjYWNoZSBmaXJzdFxyXG4gICAgICBjb25zdCBjYWNoZWRSYXRlcyA9IGF3YWl0IHRoaXMuY2FjaGVNYW5hZ2VyLmdldCgncmF0ZXMnKTtcclxuICAgICAgaWYgKGNhY2hlZFJhdGVzKSB7XHJcbiAgICAgICAgcmV0dXJuIGNhY2hlZFJhdGVzO1xyXG4gICAgICB9XHJcbiAgXHJcbiAgICAgIC8vIElmIGNhY2hlIGlzIGVtcHR5LCBmYWxsYmFjayB0byBmaWxlXHJcbiAgICAgIHJldHVybiB0aGlzLmdldFJhdGVzKCk7XHJcbiAgICB9XHJcbiAgfVxyXG4gIFxyXG5cclxuICAgLy9AQ3JvbignMCAqLzEwICogKiAqIConKSAvLyBSdW4gZXZlcnkgMTAgbWludXRlc1xyXG4gIEBDcm9uKCcqLzUgKiAqICogKiAqJykgLy8gUnVuIGV2ZXJ5IDUgc2Vjb25kc1xyXG4gIGFzeW5jIHVwZGF0ZVJhdGVzKCkge1xyXG4gICAgdGhpcy5sb2dnZXIubG9nKCdVcGRhdGluZyBjcnlwdG9jdXJyZW5jeSByYXRlcy4uLicpO1xyXG4gICAgYXdhaXQgdGhpcy5mZXRjaFJhdGVzKCk7XHJcbiAgfVxyXG59IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwiQG5lc3Rqcy9heGlvc1wiKTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJAbmVzdGpzL2NhY2hlLW1hbmFnZXJcIik7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwiQG5lc3Rqcy9jb21tb25cIik7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwiQG5lc3Rqcy9jb3JlXCIpOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcIkBuZXN0anMvc2NoZWR1bGVcIik7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwiY2FjaGUtbWFuYWdlclwiKTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJjcnlwdG9cIik7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwiZnNcIik7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwicGF0aFwiKTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJyeGpzXCIpOyIsIi8vIFRoZSBtb2R1bGUgY2FjaGVcbnZhciBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX18gPSB7fTtcblxuLy8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbmZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG5cdHZhciBjYWNoZWRNb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdO1xuXHRpZiAoY2FjaGVkTW9kdWxlICE9PSB1bmRlZmluZWQpIHtcblx0XHRyZXR1cm4gY2FjaGVkTW9kdWxlLmV4cG9ydHM7XG5cdH1cblx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcblx0dmFyIG1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF0gPSB7XG5cdFx0Ly8gbm8gbW9kdWxlLmlkIG5lZWRlZFxuXHRcdC8vIG5vIG1vZHVsZS5sb2FkZWQgbmVlZGVkXG5cdFx0ZXhwb3J0czoge31cblx0fTtcblxuXHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cblx0X193ZWJwYWNrX21vZHVsZXNfX1ttb2R1bGVJZF0uY2FsbChtb2R1bGUuZXhwb3J0cywgbW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cblx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcblx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xufVxuXG4iLCJpbXBvcnQgeyBOZXN0RmFjdG9yeSB9IGZyb20gJ0BuZXN0anMvY29yZSc7XHJcbmltcG9ydCB7IEFwcE1vZHVsZSB9IGZyb20gJy4vYXBwLm1vZHVsZSc7XHJcblxyXG5hc3luYyBmdW5jdGlvbiBib290c3RyYXAoKSB7XHJcbiAgLy8gaWYgKHR5cGVvZiBnbG9iYWxUaGlzLmNyeXB0byA9PT0gJ3VuZGVmaW5lZCcpIHtcclxuICAvLyAgIGdsb2JhbFRoaXMuY3J5cHRvID0gcmVxdWlyZSgnY3J5cHRvLWJyb3dzZXJpZnknKTtcclxuICAvLyB9XHJcbiAgY29uc3QgYXBwID0gYXdhaXQgTmVzdEZhY3RvcnkuY3JlYXRlKEFwcE1vZHVsZSk7XHJcbiAgYXdhaXQgYXBwLmxpc3Rlbig0MDAwKTtcclxuLy8gIGFwcC5saXN0ZW4ocHJvY2Vzcy5lbnYuUE9SVCA/PyAzMDAwKTtcclxufVxyXG5ib290c3RyYXAoKTtcclxuIl0sIm5hbWVzIjpbXSwic291cmNlUm9vdCI6IiJ9