"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
const moleculer_1 = require("moleculer");
class WarehouseService extends moleculer_1.Service {
    constructor(broker) {
        super(broker);
        this.parseServiceSchema({
            name: "warehouse",
            actions: {
                getProductCount(ctx) {
                    return __awaiter(this, void 0, void 0, function* () {
                        return { productId: ctx.params.productId, count: 100 };
                    });
                },
                updateProductCount(ctx) {
                    return __awaiter(this, void 0, void 0, function* () {
                        const newCount = 100 - ctx.params.quantity;
                        return { productId: ctx.params.productId, newCount };
                    });
                },
            },
        });
    }
}
exports.default = WarehouseService;
