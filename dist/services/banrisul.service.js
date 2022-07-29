'use strict';
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.BankService = void 0;
const common_1 = require("@nestjs/common");
let BankService = class BankService {
    getStatus(ade) {
        if (Number(ade[ade.length - 1]) >= 1) {
            return {
                ade,
                detail: 'APROVADA',
                bank: 'BANRISUL',
                last_verify: '2022-05-10T10:13:29',
                last_modify_situation: '2022-05-10T10:13:30',
            };
        }
        else
            return {
                ade,
                detail: 'REPROVADA',
                bank: 'BANRISUL',
                last_verify: '2022-05-10T10:13:29',
                last_modify_situation: '2022-05-10T10:13:30',
            };
    }
    approve(ade) {
        if (Number(ade[ade.length - 1]) >= 1) {
            return { ade, approved: true };
        }
        else
            return { ade, approved: false };
    }
    cancel(ade) {
        if (Number(ade[ade.length - 1]) >= 1) {
            return { ade, cancelled: true };
        }
        else
            return { ade, cancelled: false };
    }
};
BankService = __decorate([
    (0, common_1.Injectable)()
], BankService);
exports.BankService = BankService;
//# sourceMappingURL=banrisul.service.js.map