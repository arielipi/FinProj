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
let RateModule = class RateModule {
};
exports.RateModule = RateModule;
exports.RateModule = RateModule = __decorate([
    (0, common_1.Module)({
        imports: [shared_services_1.SharedServicesModule, axios_1.HttpModule.register({ timeout: 5000, maxRedirects: 5 }), schedule_1.ScheduleModule.forRoot()],
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
var RateService_1;
var _a, _b;
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.RateService = void 0;
const common_1 = __webpack_require__(/*! @nestjs/common */ "@nestjs/common");
const axios_1 = __webpack_require__(/*! @nestjs/axios */ "@nestjs/axios");
const schedule_1 = __webpack_require__(/*! @nestjs/schedule */ "@nestjs/schedule");
const rxjs_1 = __webpack_require__(/*! rxjs */ "rxjs");
const path = __webpack_require__(/*! path */ "path");
const file_service_1 = __webpack_require__(/*! @app/shared-services/file.service */ "./libs/shared-services/src/file.service.ts");
const DATA_FILE = path.join(__dirname, 'rates.json');
const COINGECKO_API = 'https://api.coingecko.com/api/v3/simple/price?ids=bitcoin,ethereum,tether&vs_currencies=usd';
let RateService = RateService_1 = class RateService {
    httpService;
    fileService;
    ratesFile = 'rates.json';
    logger = new common_1.Logger(RateService_1.name);
    constructor(httpService, fileService) {
        this.httpService = httpService;
        this.fileService = fileService;
    }
    async getRates() {
        return await this.fileService.readJsonFile(this.ratesFile);
    }
    async saveRates(newRates) {
        await this.fileService.writeJsonFile(this.ratesFile, newRates);
    }
    async fetchRates() {
        try {
            const response = await (0, rxjs_1.lastValueFrom)(this.httpService.get(COINGECKO_API));
            const rates = response.data;
            await this.saveRates(rates);
            return rates;
        }
        catch (error) {
            this.logger.error('Failed to fetch rates', error);
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
    __metadata("design:paramtypes", [typeof (_a = typeof axios_1.HttpService !== "undefined" && axios_1.HttpService) === "function" ? _a : Object, typeof (_b = typeof file_service_1.FileService !== "undefined" && file_service_1.FileService) === "function" ? _b : Object])
], RateService);


/***/ }),

/***/ "@nestjs/axios":
/*!********************************!*\
  !*** external "@nestjs/axios" ***!
  \********************************/
/***/ ((module) => {

module.exports = require("@nestjs/axios");

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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ZXMiOlsid2VicGFjazovL2FwaS8uL2xpYnMvc2hhcmVkLXNlcnZpY2VzL3NyYy9maWxlLnNlcnZpY2UudHMiLCJ3ZWJwYWNrOi8vYXBpLy4vbGlicy9zaGFyZWQtc2VydmljZXMvc3JjL2luZGV4LnRzIiwid2VicGFjazovL2FwaS8uL2xpYnMvc2hhcmVkLXNlcnZpY2VzL3NyYy9zaGFyZWQtc2VydmljZXMubW9kdWxlLnRzIiwid2VicGFjazovL2FwaS8uL2xpYnMvc2hhcmVkLXNlcnZpY2VzL3NyYy9zaGFyZWQtc2VydmljZXMuc2VydmljZS50cyIsIndlYnBhY2s6Ly9hcGkvLi9zcmMvQmFsYW5jZS50cyIsIndlYnBhY2s6Ly9hcGkvLi9zcmMvYXBwLm1vZHVsZS50cyIsIndlYnBhY2s6Ly9hcGkvLi9zcmMvYmFsYW5jZS5jb250cm9sbGVyLnRzIiwid2VicGFjazovL2FwaS8uL3NyYy9iYWxhbmNlLm1vZHVsZS50cyIsIndlYnBhY2s6Ly9hcGkvLi9zcmMvYmFsYW5jZS5zZXJ2aWNlLnRzIiwid2VicGFjazovL2FwaS8uL3NyYy9yYXRlLmNvbnRyb2xsZXIudHMiLCJ3ZWJwYWNrOi8vYXBpLy4vc3JjL3JhdGUubW9kdWxlLnRzIiwid2VicGFjazovL2FwaS8uL3NyYy9yYXRlLnNlcnZpY2UudHMiLCJ3ZWJwYWNrOi8vYXBpL2V4dGVybmFsIGNvbW1vbmpzIFwiQG5lc3Rqcy9heGlvc1wiIiwid2VicGFjazovL2FwaS9leHRlcm5hbCBjb21tb25qcyBcIkBuZXN0anMvY29tbW9uXCIiLCJ3ZWJwYWNrOi8vYXBpL2V4dGVybmFsIGNvbW1vbmpzIFwiQG5lc3Rqcy9jb3JlXCIiLCJ3ZWJwYWNrOi8vYXBpL2V4dGVybmFsIGNvbW1vbmpzIFwiQG5lc3Rqcy9zY2hlZHVsZVwiIiwid2VicGFjazovL2FwaS9leHRlcm5hbCBub2RlLWNvbW1vbmpzIFwiY3J5cHRvXCIiLCJ3ZWJwYWNrOi8vYXBpL2V4dGVybmFsIG5vZGUtY29tbW9uanMgXCJmc1wiIiwid2VicGFjazovL2FwaS9leHRlcm5hbCBub2RlLWNvbW1vbmpzIFwicGF0aFwiIiwid2VicGFjazovL2FwaS9leHRlcm5hbCBjb21tb25qcyBcInJ4anNcIiIsIndlYnBhY2s6Ly9hcGkvd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vYXBpLy4vc3JjL21haW4udHMiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgSW5qZWN0YWJsZSB9IGZyb20gJ0BuZXN0anMvY29tbW9uJztcclxuaW1wb3J0IHsgcHJvbWlzZXMgYXMgZnMgfSBmcm9tICdmcyc7XHJcbmltcG9ydCAqIGFzIHBhdGggZnJvbSAncGF0aCc7XHJcblxyXG5ASW5qZWN0YWJsZSgpXHJcbmV4cG9ydCBjbGFzcyBGaWxlU2VydmljZSB7XHJcbiAgcHJpdmF0ZSByZWFkb25seSBkYXRhRGlyID0gcGF0aC5yZXNvbHZlKF9fZGlybmFtZSwgJy4uLy4uLy4uL2RhdGEnKTsgLy8gRW5zdXJlcyBpdCdzIG91dHNpZGUgZGlzdC9cclxuXHJcbiAgY29uc3RydWN0b3IoKSB7XHJcbiAgICB0aGlzLmVuc3VyZURhdGFEaXJFeGlzdHMoKTtcclxuICB9XHJcblxyXG4gIC8vIEVuc3VyZSBkYXRhIGRpcmVjdG9yeSBleGlzdHNcclxuICBwcml2YXRlIGFzeW5jIGVuc3VyZURhdGFEaXJFeGlzdHMoKTogUHJvbWlzZTx2b2lkPiB7XHJcbiAgICB0cnkge1xyXG4gICAgICBhd2FpdCBmcy5ta2Rpcih0aGlzLmRhdGFEaXIsIHsgcmVjdXJzaXZlOiB0cnVlIH0pO1xyXG4gICAgfSBjYXRjaCAoZXJyb3IpIHtcclxuICAgICAgY29uc29sZS5lcnJvcignRXJyb3IgY3JlYXRpbmcgZGF0YSBkaXJlY3Rvcnk6JywgZXJyb3IpO1xyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgLy8gUmVhZCBKU09OIGZpbGVcclxuICBhc3luYyByZWFkSnNvbkZpbGU8VD4oZmlsZW5hbWU6IHN0cmluZyk6IFByb21pc2U8VCB8IG51bGw+IHtcclxuICAgIGNvbnN0IGZpbGVQYXRoID0gcGF0aC5qb2luKHRoaXMuZGF0YURpciwgZmlsZW5hbWUpO1xyXG4gICAgdHJ5IHtcclxuICAgICAgY29uc3QgZGF0YSA9IGF3YWl0IGZzLnJlYWRGaWxlKGZpbGVQYXRoLCAndXRmLTgnKTtcclxuICAgICAgcmV0dXJuIEpTT04ucGFyc2UoZGF0YSk7XHJcbiAgICB9IGNhdGNoIChlcnJvcikge1xyXG4gICAgICBjb25zb2xlLmVycm9yKGBFcnJvciByZWFkaW5nIGZpbGUgJHtmaWxlbmFtZX06YCwgZXJyb3IpO1xyXG4gICAgICByZXR1cm4gbnVsbDtcclxuICAgIH1cclxuICB9XHJcblxyXG4gIC8vIFdyaXRlIEpTT04gZmlsZVxyXG4gIGFzeW5jIHdyaXRlSnNvbkZpbGUoZmlsZW5hbWU6IHN0cmluZywgZGF0YTogdW5rbm93bik6IFByb21pc2U8dm9pZD4ge1xyXG4gICAgY29uc3QgZmlsZVBhdGggPSBwYXRoLmpvaW4odGhpcy5kYXRhRGlyLCBmaWxlbmFtZSk7XHJcbiAgICB0cnkge1xyXG4gICAgICBhd2FpdCBmcy53cml0ZUZpbGUoZmlsZVBhdGgsIEpTT04uc3RyaW5naWZ5KGRhdGEsIG51bGwsIDIpLCAndXRmLTgnKTtcclxuICAgIH0gY2F0Y2ggKGVycm9yKSB7XHJcbiAgICAgIGNvbnNvbGUuZXJyb3IoYEVycm9yIHdyaXRpbmcgZmlsZSAke2ZpbGVuYW1lfTpgLCBlcnJvcik7XHJcbiAgICB9XHJcbiAgfVxyXG59XHJcbiIsImV4cG9ydCAqIGZyb20gJy4vc2hhcmVkLXNlcnZpY2VzLm1vZHVsZSc7XHJcbmV4cG9ydCAqIGZyb20gJy4vc2hhcmVkLXNlcnZpY2VzLnNlcnZpY2UnO1xyXG4iLCJpbXBvcnQgeyBNb2R1bGUgfSBmcm9tICdAbmVzdGpzL2NvbW1vbic7XHJcbmltcG9ydCB7IEZpbGVTZXJ2aWNlIH0gZnJvbSAnLi9maWxlLnNlcnZpY2UnO1xyXG5cclxuQE1vZHVsZSh7XHJcbiAgcHJvdmlkZXJzOiBbRmlsZVNlcnZpY2VdLFxyXG4gIGV4cG9ydHM6IFtGaWxlU2VydmljZV0sXHJcbn0pXHJcbmV4cG9ydCBjbGFzcyBTaGFyZWRTZXJ2aWNlc01vZHVsZSB7fVxyXG4iLCJpbXBvcnQgeyBJbmplY3RhYmxlIH0gZnJvbSAnQG5lc3Rqcy9jb21tb24nO1xyXG5cclxuQEluamVjdGFibGUoKVxyXG5leHBvcnQgY2xhc3MgU2hhcmVkU2VydmljZXNTZXJ2aWNlIHt9XHJcbiIsImV4cG9ydCBpbnRlcmZhY2UgQmFsYW5jZSB7XHJcbiAgYXNzZXQ6IHN0cmluZztcclxuICBhbW91bnQ6IG51bWJlcjtcclxufVxyXG4iLCJpbXBvcnQgeyBNb2R1bGUgfSBmcm9tICdAbmVzdGpzL2NvbW1vbic7XHJcbmNvbnN0IGNyeXB0byA9IHJlcXVpcmUoJ2NyeXB0bycpO1xyXG5pbXBvcnQgeyBTY2hlZHVsZU1vZHVsZSB9IGZyb20gJ0BuZXN0anMvc2NoZWR1bGUnO1xyXG5pbXBvcnQgeyBIdHRwTW9kdWxlIH0gZnJvbSAnQG5lc3Rqcy9heGlvcyc7XHJcbmltcG9ydCB7IEJhbGFuY2VNb2R1bGUgfSBmcm9tICcuL2JhbGFuY2UubW9kdWxlJztcclxuaW1wb3J0IHsgUmF0ZU1vZHVsZSB9IGZyb20gJy4vcmF0ZS5tb2R1bGUnO1xyXG5pbXBvcnQgeyBTaGFyZWRTZXJ2aWNlc01vZHVsZSB9IGZyb20gJ0BhcHAvc2hhcmVkLXNlcnZpY2VzJztcclxuXHJcbi8vIEVuc3VyZSB0aGF0IHRoZSBgY3J5cHRvYCBtb2R1bGUgaXMgYXZhaWxhYmxlIGdsb2JhbGx5XHJcbmlmICh0eXBlb2YgZ2xvYmFsVGhpcy5jcnlwdG8gPT09ICd1bmRlZmluZWQnKSB7XHJcbiAgZ2xvYmFsVGhpcy5jcnlwdG8gPSBjcnlwdG87XHJcbn1cclxuQE1vZHVsZSh7XHJcbiAgaW1wb3J0czogW1xyXG4gICAgU2hhcmVkU2VydmljZXNNb2R1bGUsXHJcbiAgICBIdHRwTW9kdWxlLCAvLyBFbnN1cmUgSHR0cE1vZHVsZSBpcyBhdmFpbGFibGUgZ2xvYmFsbHlcclxuICAgIFNjaGVkdWxlTW9kdWxlLmZvclJvb3QoKSwgLy8gRW5hYmxlcyBiYWNrZ3JvdW5kIGpvYiBzY2hlZHVsaW5nXHJcbiAgICBCYWxhbmNlTW9kdWxlLCAvLyBCYWxhbmNlIHNlcnZpY2UgbW9kdWxlXHJcbiAgICBSYXRlTW9kdWxlLCAvLyBSYXRlIHNlcnZpY2UgbW9kdWxlXHJcbiAgXSxcclxufSlcclxuZXhwb3J0IGNsYXNzIEFwcE1vZHVsZSB7fVxyXG4iLCJpbXBvcnQgeyBDb250cm9sbGVyLCBHZXQsIFBvc3QsIERlbGV0ZSwgQm9keSwgSGVhZGVycywgUGFyYW0gfSBmcm9tICdAbmVzdGpzL2NvbW1vbic7XHJcbmltcG9ydCB7IEJhbGFuY2VTZXJ2aWNlIH0gZnJvbSAnLi9iYWxhbmNlLnNlcnZpY2UnO1xyXG5pbXBvcnQgeyBCYWxhbmNlIH0gZnJvbSAnLi9CYWxhbmNlJztcclxuXHJcbkBDb250cm9sbGVyKCdiYWxhbmNlcycpXHJcbmV4cG9ydCBjbGFzcyBCYWxhbmNlQ29udHJvbGxlciB7XHJcbiAgY29uc3RydWN0b3IocHJpdmF0ZSByZWFkb25seSBiYWxhbmNlU2VydmljZTogQmFsYW5jZVNlcnZpY2UpIHt9XHJcblxyXG4gIEBHZXQoKVxyXG4gIGdldEJhbGFuY2VzKEBIZWFkZXJzKCdYLVVzZXItSUQnKSB1c2VySWQ6IHN0cmluZykge1xyXG4gICAgcmV0dXJuIHRoaXMuYmFsYW5jZVNlcnZpY2UuZ2V0QmFsYW5jZXModXNlcklkKTtcclxuICB9XHJcblxyXG4gIEBQb3N0KCdhZGQnKVxyXG4gIGFkZEJhbGFuY2UoQEhlYWRlcnMoJ1gtVXNlci1JRCcpIHVzZXJJZDogc3RyaW5nLCBAQm9keSgpIGJhbGFuY2U6IEJhbGFuY2UpIHtcclxuICAgIHJldHVybiB0aGlzLmJhbGFuY2VTZXJ2aWNlLmFkZEJhbGFuY2UodXNlcklkLCBiYWxhbmNlKTtcclxuICB9XHJcblxyXG4gIEBEZWxldGUoJ3JlbW92ZS86YXNzZXQnKVxyXG4gIHJlbW92ZUJhbGFuY2UoQEhlYWRlcnMoJ1gtVXNlci1JRCcpIHVzZXJJZDogc3RyaW5nLCBAUGFyYW0oJ2Fzc2V0JykgYXNzZXQ6IHN0cmluZykge1xyXG4gICAgcmV0dXJuIHRoaXMuYmFsYW5jZVNlcnZpY2UucmVtb3ZlQmFsYW5jZSh1c2VySWQsIGFzc2V0KTtcclxuICB9XHJcblxyXG4gIEBHZXQoJ3RvdGFsLzpjdXJyZW5jeScpXHJcbiAgZ2V0VG90YWxCYWxhbmNlKEBIZWFkZXJzKCdYLVVzZXItSUQnKSB1c2VySWQ6IHN0cmluZywgQFBhcmFtKCdjdXJyZW5jeScpIGN1cnJlbmN5OiBzdHJpbmcpIHtcclxuICAgIHJldHVybiB0aGlzLmJhbGFuY2VTZXJ2aWNlLmdldFRvdGFsQmFsYW5jZSh1c2VySWQsIGN1cnJlbmN5KTtcclxuICB9XHJcbn1cclxuIiwiaW1wb3J0IHsgTW9kdWxlIH0gZnJvbSAnQG5lc3Rqcy9jb21tb24nO1xyXG5pbXBvcnQgeyBCYWxhbmNlQ29udHJvbGxlciB9IGZyb20gJy4vYmFsYW5jZS5jb250cm9sbGVyJztcclxuaW1wb3J0IHsgQmFsYW5jZVNlcnZpY2UgfSBmcm9tICcuL2JhbGFuY2Uuc2VydmljZSc7XHJcblxyXG5ATW9kdWxlKHtcclxuICBjb250cm9sbGVyczogW0JhbGFuY2VDb250cm9sbGVyXSxcclxuICBwcm92aWRlcnM6IFtCYWxhbmNlU2VydmljZV0sXHJcbn0pXHJcbmV4cG9ydCBjbGFzcyBCYWxhbmNlTW9kdWxlIHt9IiwiaW1wb3J0IHsgSW5qZWN0YWJsZSB9IGZyb20gJ0BuZXN0anMvY29tbW9uJztcclxuaW1wb3J0ICogYXMgZnMgZnJvbSAnZnMnO1xyXG5pbXBvcnQgKiBhcyBwYXRoIGZyb20gJ3BhdGgnO1xyXG5pbXBvcnQgeyBCYWxhbmNlIH0gZnJvbSAnLi9CYWxhbmNlJztcclxuXHJcbmNvbnN0IERBVEFfRklMRSA9IHBhdGguam9pbihfX2Rpcm5hbWUsICdiYWxhbmNlcy5qc29uJyk7XHJcblxyXG5ASW5qZWN0YWJsZSgpXHJcbmV4cG9ydCBjbGFzcyBCYWxhbmNlU2VydmljZSB7XHJcbiAgcHJpdmF0ZSBsb2FkQmFsYW5jZXMoKTogUmVjb3JkPHN0cmluZywgQmFsYW5jZVtdPiB7XHJcbiAgICBpZiAoIWZzLmV4aXN0c1N5bmMoREFUQV9GSUxFKSkge1xyXG4gICAgICByZXR1cm4ge307XHJcbiAgICB9XHJcbiAgICByZXR1cm4gSlNPTi5wYXJzZShmcy5yZWFkRmlsZVN5bmMoREFUQV9GSUxFLCAndXRmLTgnKSk7XHJcbiAgfVxyXG5cclxuICBwcml2YXRlIHNhdmVCYWxhbmNlcyhiYWxhbmNlczogUmVjb3JkPHN0cmluZywgQmFsYW5jZVtdPikge1xyXG4gICAgZnMud3JpdGVGaWxlU3luYyhEQVRBX0ZJTEUsIEpTT04uc3RyaW5naWZ5KGJhbGFuY2VzLCBudWxsLCAyKSk7XHJcbiAgfVxyXG5cclxuICBnZXRCYWxhbmNlcyh1c2VySWQ6IHN0cmluZyk6IEJhbGFuY2VbXSB7XHJcbiAgICBjb25zdCBiYWxhbmNlcyA9IHRoaXMubG9hZEJhbGFuY2VzKCk7XHJcbiAgICByZXR1cm4gYmFsYW5jZXNbdXNlcklkXSB8fCBbXTtcclxuICB9XHJcblxyXG4gIGFkZEJhbGFuY2UodXNlcklkOiBzdHJpbmcsIGJhbGFuY2U6IEJhbGFuY2UpIHtcclxuICAgIGNvbnN0IGJhbGFuY2VzID0gdGhpcy5sb2FkQmFsYW5jZXMoKTtcclxuICAgIGlmICghYmFsYW5jZXNbdXNlcklkXSkge1xyXG4gICAgICBiYWxhbmNlc1t1c2VySWRdID0gW107XHJcbiAgICB9XHJcbiAgICBjb25zdCBleGlzdGluZyA9IGJhbGFuY2VzW3VzZXJJZF0uZmluZChiID0+IGIuYXNzZXQgPT09IGJhbGFuY2UuYXNzZXQpO1xyXG4gICAgaWYgKGV4aXN0aW5nKSB7XHJcbiAgICAgIGV4aXN0aW5nLmFtb3VudCArPSBiYWxhbmNlLmFtb3VudDtcclxuICAgIH0gZWxzZSB7XHJcbiAgICAgIGJhbGFuY2VzW3VzZXJJZF0ucHVzaChiYWxhbmNlKTtcclxuICAgIH1cclxuICAgIHRoaXMuc2F2ZUJhbGFuY2VzKGJhbGFuY2VzKTtcclxuICAgIHJldHVybiB7IG1lc3NhZ2U6ICdCYWxhbmNlIHVwZGF0ZWQgc3VjY2Vzc2Z1bGx5JyB9O1xyXG4gIH1cclxuXHJcbiAgcmVtb3ZlQmFsYW5jZSh1c2VySWQ6IHN0cmluZywgYXNzZXQ6IHN0cmluZykge1xyXG4gICAgY29uc3QgYmFsYW5jZXMgPSB0aGlzLmxvYWRCYWxhbmNlcygpO1xyXG4gICAgaWYgKCFiYWxhbmNlc1t1c2VySWRdKSB7XHJcbiAgICAgIHJldHVybiB7IG1lc3NhZ2U6ICdObyBiYWxhbmNlcyBmb3VuZCBmb3IgdGhpcyB1c2VyJyB9O1xyXG4gICAgfVxyXG4gICAgYmFsYW5jZXNbdXNlcklkXSA9IGJhbGFuY2VzW3VzZXJJZF0uZmlsdGVyKGIgPT4gYi5hc3NldCAhPT0gYXNzZXQpO1xyXG4gICAgdGhpcy5zYXZlQmFsYW5jZXMoYmFsYW5jZXMpO1xyXG4gICAgcmV0dXJuIHsgbWVzc2FnZTogJ0Fzc2V0IHJlbW92ZWQgc3VjY2Vzc2Z1bGx5JyB9O1xyXG4gIH1cclxuXHJcbiAgYXN5bmMgZ2V0VG90YWxCYWxhbmNlKHVzZXJJZDogc3RyaW5nLCBjdXJyZW5jeTogc3RyaW5nKSB7XHJcbiAgICBjb25zdCBiYWxhbmNlcyA9IHRoaXMubG9hZEJhbGFuY2VzKCk7XHJcbiAgICBjb25zdCB1c2VyQmFsYW5jZXMgPSBiYWxhbmNlc1t1c2VySWRdIHx8IFtdO1xyXG5cclxuICAgIC8vIE1vY2sgY29udmVyc2lvbiByYXRlcyAoaW4gcmVhbC13b3JsZCBzY2VuYXJpb3MsIGludGVncmF0ZSBhbiBBUEkpXHJcbiAgICBjb25zdCBjb252ZXJzaW9uUmF0ZXM6IFJlY29yZDxzdHJpbmcsIG51bWJlcj4gPSB7IEJUQzogNTAwMDAsIEVUSDogMzAwMCwgVVNEVDogMSB9O1xyXG4gICAgbGV0IHRvdGFsID0gMDtcclxuICAgIGZvciAoY29uc3QgeyBhc3NldCwgYW1vdW50IH0gb2YgdXNlckJhbGFuY2VzKSB7XHJcbiAgICAgIGNvbnN0IHJhdGUgPSBjb252ZXJzaW9uUmF0ZXNbYXNzZXRdID8/IDE7XHJcbiAgICAgIHRvdGFsICs9IGFtb3VudCAqIHJhdGU7XHJcbiAgICB9XHJcbiAgICByZXR1cm4geyB0b3RhbCwgY3VycmVuY3kgfTtcclxuICB9XHJcbn0iLCJpbXBvcnQgeyBDb250cm9sbGVyLCBHZXQgfSBmcm9tICdAbmVzdGpzL2NvbW1vbic7XHJcbmltcG9ydCB7IFJhdGVTZXJ2aWNlIH0gZnJvbSAnLi9yYXRlLnNlcnZpY2UnO1xyXG5cclxuQENvbnRyb2xsZXIoJ3JhdGVzJylcclxuZXhwb3J0IGNsYXNzIFJhdGVDb250cm9sbGVyIHtcclxuICBjb25zdHJ1Y3Rvcihwcml2YXRlIHJlYWRvbmx5IHJhdGVTZXJ2aWNlOiBSYXRlU2VydmljZSkge31cclxuXHJcbiAgQEdldCgpXHJcbiAgYXN5bmMgZ2V0UmF0ZXMoKSB7XHJcbiAgICByZXR1cm4gYXdhaXQgdGhpcy5yYXRlU2VydmljZS5nZXRSYXRlcygpO1xyXG4gIH1cclxuXHJcbiAgQEdldCgncmVmcmVzaCcpXHJcbiAgYXN5bmMgcmVmcmVzaFJhdGVzKCkge1xyXG4gICAgcmV0dXJuIGF3YWl0IHRoaXMucmF0ZVNlcnZpY2UuZmV0Y2hSYXRlcygpO1xyXG4gIH1cclxufSIsImltcG9ydCB7IE1vZHVsZSB9IGZyb20gJ0BuZXN0anMvY29tbW9uJztcclxuaW1wb3J0ICogYXMgY3J5cHRvIGZyb20gJ2NyeXB0byc7XHJcbmltcG9ydCB7IFNjaGVkdWxlTW9kdWxlIH0gZnJvbSAnQG5lc3Rqcy9zY2hlZHVsZSc7XHJcbmltcG9ydCB7IFJhdGVTZXJ2aWNlIH0gZnJvbSAnLi9yYXRlLnNlcnZpY2UnO1xyXG5pbXBvcnQgeyBSYXRlQ29udHJvbGxlciB9IGZyb20gJy4vcmF0ZS5jb250cm9sbGVyJztcclxuaW1wb3J0IHsgSHR0cE1vZHVsZSB9IGZyb20gJ0BuZXN0anMvYXhpb3MnO1xyXG5pbXBvcnQgeyBTaGFyZWRTZXJ2aWNlc01vZHVsZSB9IGZyb20gJ0BhcHAvc2hhcmVkLXNlcnZpY2VzJztcclxuXHJcbkBNb2R1bGUoe1xyXG4gIGltcG9ydHM6IFtTaGFyZWRTZXJ2aWNlc01vZHVsZSwgSHR0cE1vZHVsZS5yZWdpc3Rlcih7IHRpbWVvdXQ6IDUwMDAsIG1heFJlZGlyZWN0czogNSB9KSwgU2NoZWR1bGVNb2R1bGUuZm9yUm9vdCgpXSxcclxuICBwcm92aWRlcnM6IFtSYXRlU2VydmljZV0sXHJcbiAgY29udHJvbGxlcnM6IFtSYXRlQ29udHJvbGxlcl0sXHJcbiAgZXhwb3J0czogW1JhdGVTZXJ2aWNlXSwgLy8gRXhwb3J0IGlmIHVzZWQgaW4gb3RoZXIgbW9kdWxlc1xyXG59KVxyXG5leHBvcnQgY2xhc3MgUmF0ZU1vZHVsZSB7fVxyXG4iLCJpbXBvcnQgeyBJbmplY3RhYmxlLCBMb2dnZXIgfSBmcm9tICdAbmVzdGpzL2NvbW1vbic7XHJcbmltcG9ydCB7IEh0dHBTZXJ2aWNlIH0gZnJvbSAnQG5lc3Rqcy9heGlvcyc7XHJcbmltcG9ydCB7IENyb24gfSBmcm9tICdAbmVzdGpzL3NjaGVkdWxlJztcclxuaW1wb3J0IHsgbGFzdFZhbHVlRnJvbSB9IGZyb20gJ3J4anMnO1xyXG5pbXBvcnQgKiBhcyBmcyBmcm9tICdmcyc7XHJcbmltcG9ydCAqIGFzIHBhdGggZnJvbSAncGF0aCc7XHJcbmltcG9ydCB7IEZpbGVTZXJ2aWNlIH0gZnJvbSAnQGFwcC9zaGFyZWQtc2VydmljZXMvZmlsZS5zZXJ2aWNlJztcclxuXHJcbmNvbnN0IERBVEFfRklMRSA9IHBhdGguam9pbihfX2Rpcm5hbWUsICdyYXRlcy5qc29uJyk7XHJcbmNvbnN0IENPSU5HRUNLT19BUEkgPSAnaHR0cHM6Ly9hcGkuY29pbmdlY2tvLmNvbS9hcGkvdjMvc2ltcGxlL3ByaWNlP2lkcz1iaXRjb2luLGV0aGVyZXVtLHRldGhlciZ2c19jdXJyZW5jaWVzPXVzZCc7XHJcblxyXG5ASW5qZWN0YWJsZSgpXHJcbmV4cG9ydCBjbGFzcyBSYXRlU2VydmljZSB7XHJcbiAgcHJpdmF0ZSByZWFkb25seSByYXRlc0ZpbGUgPSAncmF0ZXMuanNvbic7XHJcbiAgcHJpdmF0ZSByZWFkb25seSBsb2dnZXIgPSBuZXcgTG9nZ2VyKFJhdGVTZXJ2aWNlLm5hbWUpO1xyXG5cclxuICBjb25zdHJ1Y3Rvcihwcml2YXRlIHJlYWRvbmx5IGh0dHBTZXJ2aWNlOiBIdHRwU2VydmljZSwgcHJpdmF0ZSByZWFkb25seSBmaWxlU2VydmljZTogRmlsZVNlcnZpY2UpIHt9XHJcblxyXG4gIHB1YmxpYyBhc3luYyBnZXRSYXRlcygpOiBQcm9taXNlPGFueT4ge1xyXG4gICAgcmV0dXJuIGF3YWl0IHRoaXMuZmlsZVNlcnZpY2UucmVhZEpzb25GaWxlKHRoaXMucmF0ZXNGaWxlKTtcclxuXHJcbiAgfVxyXG5cclxuICBwcml2YXRlIGFzeW5jIHNhdmVSYXRlcyhuZXdSYXRlczogYW55KTogUHJvbWlzZTx2b2lkPiB7XHJcbiAgICBhd2FpdCB0aGlzLmZpbGVTZXJ2aWNlLndyaXRlSnNvbkZpbGUodGhpcy5yYXRlc0ZpbGUsIG5ld1JhdGVzKTtcclxuICB9XHJcblxyXG4gIGFzeW5jIGZldGNoUmF0ZXMoKTogUHJvbWlzZTxhbnk+IHtcclxuICAgIHRyeSB7XHJcbiAgICAgIGNvbnN0IHJlc3BvbnNlID0gYXdhaXQgbGFzdFZhbHVlRnJvbSh0aGlzLmh0dHBTZXJ2aWNlLmdldChDT0lOR0VDS09fQVBJKSk7XHJcbiAgICAgIGNvbnN0IHJhdGVzID0gcmVzcG9uc2UuZGF0YTtcclxuICAgICAgYXdhaXQgdGhpcy5zYXZlUmF0ZXMocmF0ZXMpO1xyXG4gICAgICByZXR1cm4gcmF0ZXM7XHJcbiAgICB9IGNhdGNoIChlcnJvcikge1xyXG4gICAgICB0aGlzLmxvZ2dlci5lcnJvcignRmFpbGVkIHRvIGZldGNoIHJhdGVzJywgZXJyb3IpO1xyXG4gICAgICByZXR1cm4gdGhpcy5nZXRSYXRlcygpO1xyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgLy8gQENyb24oJzAgKi8xMCAqICogKiAqJykgLy8gUnVuIGV2ZXJ5IDEwIG1pbnV0ZXNcclxuICBAQ3JvbignKi81ICogKiAqICogKicpIC8vIFJ1biBldmVyeSA1IHNlY29uZHNcclxuICBhc3luYyB1cGRhdGVSYXRlcygpIHtcclxuICAgIHRoaXMubG9nZ2VyLmxvZygnVXBkYXRpbmcgY3J5cHRvY3VycmVuY3kgcmF0ZXMuLi4nKTtcclxuICAgIGF3YWl0IHRoaXMuZmV0Y2hSYXRlcygpO1xyXG4gIH1cclxufSIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcIkBuZXN0anMvYXhpb3NcIik7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwiQG5lc3Rqcy9jb21tb25cIik7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwiQG5lc3Rqcy9jb3JlXCIpOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcIkBuZXN0anMvc2NoZWR1bGVcIik7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwiY3J5cHRvXCIpOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcImZzXCIpOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcInBhdGhcIik7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwicnhqc1wiKTsiLCIvLyBUaGUgbW9kdWxlIGNhY2hlXG52YXIgX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fID0ge307XG5cbi8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG5mdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuXHR2YXIgY2FjaGVkTW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXTtcblx0aWYgKGNhY2hlZE1vZHVsZSAhPT0gdW5kZWZpbmVkKSB7XG5cdFx0cmV0dXJuIGNhY2hlZE1vZHVsZS5leHBvcnRzO1xuXHR9XG5cdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG5cdHZhciBtb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdID0ge1xuXHRcdC8vIG5vIG1vZHVsZS5pZCBuZWVkZWRcblx0XHQvLyBubyBtb2R1bGUubG9hZGVkIG5lZWRlZFxuXHRcdGV4cG9ydHM6IHt9XG5cdH07XG5cblx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG5cdF9fd2VicGFja19tb2R1bGVzX19bbW9kdWxlSWRdLmNhbGwobW9kdWxlLmV4cG9ydHMsIG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG5cdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG5cdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbn1cblxuIiwiaW1wb3J0IHsgTmVzdEZhY3RvcnkgfSBmcm9tICdAbmVzdGpzL2NvcmUnO1xyXG5pbXBvcnQgeyBBcHBNb2R1bGUgfSBmcm9tICcuL2FwcC5tb2R1bGUnO1xyXG5cclxuYXN5bmMgZnVuY3Rpb24gYm9vdHN0cmFwKCkge1xyXG4gIC8vIGlmICh0eXBlb2YgZ2xvYmFsVGhpcy5jcnlwdG8gPT09ICd1bmRlZmluZWQnKSB7XHJcbiAgLy8gICBnbG9iYWxUaGlzLmNyeXB0byA9IHJlcXVpcmUoJ2NyeXB0by1icm93c2VyaWZ5Jyk7XHJcbiAgLy8gfVxyXG4gIGNvbnN0IGFwcCA9IGF3YWl0IE5lc3RGYWN0b3J5LmNyZWF0ZShBcHBNb2R1bGUpO1xyXG4gIGF3YWl0IGFwcC5saXN0ZW4oNDAwMCk7XHJcbi8vICBhcHAubGlzdGVuKHByb2Nlc3MuZW52LlBPUlQgPz8gMzAwMCk7XHJcbn1cclxuYm9vdHN0cmFwKCk7XHJcbiJdLCJuYW1lcyI6W10sInNvdXJjZVJvb3QiOiIifQ==