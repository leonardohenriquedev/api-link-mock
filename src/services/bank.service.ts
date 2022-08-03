'use strict';
import { Injectable } from '@nestjs/common';

@Injectable()
export class BankService {
  getStatus(ade: string, bank: string) {
    if (Number(ade[ade.length - 1]) >= 1) {
      return {
        ade,
        bank,
        status: 'APROVADA',
      };
    } else
      return {
        ade,
        bank,
        status: 'REPROVADA',
      };
  }

  getRoles() {
    return [
      { id: 11, name: 'fred' },
      { id: 22, name: 'davi' },
      { id: 33, name: 'storm' },
    ];
  }

  approve(ade: string, bank: string) {
    if (Number(ade[ade.length - 1]) >= 1) {
      return { ade, bank, approved: true };
    } else return { ade, bank, approved: false };
  }

  cancel(ade: string, bank: string) {
    if (Number(ade[ade.length - 1]) >= 1) {
      return { ade, bank, cancelled: true };
    } else return { ade, bank, cancelled: false };
  }
}
