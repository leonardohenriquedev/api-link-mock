export declare class BankService {
    getStatus(ade: string, bank: string): {
        ade: string;
        bank: string;
        status: string;
    };
    approve(ade: string, bank: string): {
        ade: string;
        bank: string;
        approved: boolean;
    };
    cancel(ade: string, bank: string): {
        ade: string;
        bank: string;
        cancelled: boolean;
    };
}
