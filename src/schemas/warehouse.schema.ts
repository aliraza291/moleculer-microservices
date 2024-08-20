// src/schemas/warehouse.schema.ts
import { ServiceSchema } from "moleculer";

export const WarehouseSchema: ServiceSchema = {
    name: "warehouse",
    actions: {
        async getProductCount(ctx) {
            return { productId: ctx.params.productId, count: 100 };
        },
        async updateProductCount(ctx) {
            return { productId: ctx.params.productId, newCount: 100 - ctx.params.quantity };
        }
    },
};
