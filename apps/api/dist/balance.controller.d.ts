import { BalanceService } from './balance.service';
import { Balance } from './Balance';
export declare class BalanceController {
    private readonly balanceService;
    constructor(balanceService: BalanceService);
    getBalances(userId: string): Balance[];
    addBalance(userId: string, balance: Balance): {
        message: string;
    };
    removeBalance(userId: string, asset: string): {
        message: string;
    };
    getTotalBalance(userId: string, currency: string): Promise<{
        total: number;
        currency: string;
    }>;
}
