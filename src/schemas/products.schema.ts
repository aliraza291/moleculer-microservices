import { ServiceSchema } from "moleculer";

export const ProductsSchema: ServiceSchema = {
    name: "products",
    actions: {
        async getAvailableProducts(ctx) {
            return this.broker.call("warehouse.getProductCount", {
                productId: ctx.params.productId,
            });
        },
        async buyProduct(ctx) {
            return this.broker.call("warehouse.updateProductCount", {
                productId: ctx.params.productId,
                quantity: ctx.params.quantity,
            });
        }
    },
};
