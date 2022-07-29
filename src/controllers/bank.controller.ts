import { Controller, Get, Param, Patch, Req, Res } from '@nestjs/common';
import { Response } from 'express';
import { BankService } from '../services/bank.service';

@Controller()
export class BankController {
  constructor(private readonly bankService: BankService) {}

  @Get(':bank/status/:ade')
  getStatus(@Param() params, @Res() res: Response) {
    const { ade, bank } = params;
    return res.status(200).json(this.bankService.getStatus(ade, bank));
  }

  @Patch(':bank/aprovacao/:ade')
  approve(@Param() params, @Res() res: Response) {
    const { ade, bank } = params;
    return res.status(200).json(this.bankService.approve(ade, bank));
  }

  @Patch(':bank/cancelamento/:ade')
  cancel(@Param() params, @Res() res: Response) {
    const { ade, bank } = params;
    return res.status(200).json(this.bankService.cancel(ade, bank));
  }
}
