"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.BankController = void 0;
const common_1 = require("@nestjs/common");
const bank_service_1 = require("../services/bank.service");
let BankController = class BankController {
    constructor(bankService) {
        this.bankService = bankService;
    }
    getStatus(params, res) {
        const { ade, bank } = params;
        return res.status(200).json(this.bankService.getStatus(ade, bank));
    }
    approve(params, res) {
        const { ade, bank } = params;
        return res.status(200).json(this.bankService.approve(ade, bank));
    }
    cancel(params, res) {
        const { ade, bank } = params;
        return res.status(200).json(this.bankService.cancel(ade, bank));
    }
};
__decorate([
    (0, common_1.Get)(':bank/status/:ade'),
    __param(0, (0, common_1.Param)()),
    __param(1, (0, common_1.Res)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, Object]),
    __metadata("design:returntype", void 0)
], BankController.prototype, "getStatus", null);
__decorate([
    (0, common_1.Patch)(':bank/aprovacao/:ade'),
    __param(0, (0, common_1.Param)()),
    __param(1, (0, common_1.Res)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, Object]),
    __metadata("design:returntype", void 0)
], BankController.prototype, "approve", null);
__decorate([
    (0, common_1.Patch)(':bank/cancelamento/:ade'),
    __param(0, (0, common_1.Param)()),
    __param(1, (0, common_1.Res)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, Object]),
    __metadata("design:returntype", void 0)
], BankController.prototype, "cancel", null);
BankController = __decorate([
    (0, common_1.Controller)(),
    __metadata("design:paramtypes", [bank_service_1.BankService])
], BankController);
exports.BankController = BankController;
//# sourceMappingURL=bank.controller.js.map