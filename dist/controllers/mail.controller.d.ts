import { Response } from 'express';
import { BankService } from '../services/banrisul.service';
export declare class BankController {
    private readonly bankService;
    constructor(bankService: BankService);
    getStatus(params: any, res: Response): Response<any, Record<string, any>>;
    approve(params: any, res: Response): Response<any, Record<string, any>>;
    cancel(params: any, res: Response): Response<any, Record<string, any>>;
}
