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
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.BalanceController = void 0;
const common_1 = require("@nestjs/common");
const balance_service_1 = require("./balance.service");
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
exports.BalanceController = BalanceController = __decorate([
    (0, common_1.Controller)('balances'),
    __metadata("design:paramtypes", [balance_service_1.BalanceService])
], BalanceController);
//# sourceMappingURL=balance.controller.js.map