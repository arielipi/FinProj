"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.AppModule = void 0;
const common_1 = require("@nestjs/common");
const crypto = require('crypto');
const schedule_1 = require("@nestjs/schedule");
const axios_1 = require("@nestjs/axios");
const balance_module_1 = require("./balance.module");
const rate_module_1 = require("./rate.module");
if (typeof globalThis.crypto === 'undefined') {
    globalThis.crypto = crypto;
}
let AppModule = class AppModule {
};
exports.AppModule = AppModule;
exports.AppModule = AppModule = __decorate([
    (0, common_1.Module)({
        imports: [
            axios_1.HttpModule,
            schedule_1.ScheduleModule.forRoot(),
            balance_module_1.BalanceModule,
            rate_module_1.RateModule,
        ],
    })
], AppModule);
//# sourceMappingURL=app.module.js.map