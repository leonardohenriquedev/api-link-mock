'use strict';
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.BanrisulService = void 0;
const common_1 = require("@nestjs/common");
let BanrisulService = class BanrisulService {
    getStatus(ade) {
        return {
            ade,
            detail: 'APROVADA',
            bank: 'BANRISUL',
            last_verify: '2022-05-10T10:13:29',
            last_modify_situation: '2022-05-10T10:13:30',
        };
    }
};
BanrisulService = __decorate([
    (0, common_1.Injectable)()
], BanrisulService);
exports.BanrisulService = BanrisulService;
//# sourceMappingURL=mail.service.js.map