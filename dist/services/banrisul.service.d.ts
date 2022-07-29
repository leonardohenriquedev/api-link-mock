export declare class BankService {
    getStatus(ade: string): {
        ade: string;
        detail: string;
        bank: string;
        last_verify: string;
        last_modify_situation: string;
    };
    approve(ade: string): {
        ade: string;
        approved: boolean;
    };
    cancel(ade: string): {
        ade: string;
        cancelled: boolean;
    };
}
