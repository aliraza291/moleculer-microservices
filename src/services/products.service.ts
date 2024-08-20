import { Service, Context, ServiceBroker } from "moleculer";

interface GetAvailableProductsResponse {
    productId: string;
    count: number;
}

interface BuyProductResponse {
    productId: string;
    newCount: number;
}

export default class ProductsService extends Service {
    constructor(broker:ServiceBroker) {
        super(broker);

        this.parseServiceSchema({
            name: "products",
            actions: {
                async getAvailableProducts(ctx: Context<{ productId: string }>): Promise<GetAvailableProductsResponse> {
                    return this.broker.call("warehouse.getProductCount", {
                        productId: ctx.params.productId,
                    });
                },
                async buyProduct(ctx: Context<{ productId: string; quantity: number }>): Promise<BuyProductResponse> {
                    return this.broker.call("warehouse.updateProductCount", {
                        productId: ctx.params.productId,
                        quantity: ctx.params.quantity,
                    });
                },
            },
        });
    }
}
