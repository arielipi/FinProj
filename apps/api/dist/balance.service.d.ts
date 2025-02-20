import { Balance } from './Balance';
export declare class BalanceService {
    private loadBalances;
    private saveBalances;
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
