import { Service, Context, ServiceBroker } from "moleculer";

interface GetProductCountResponse {
	productId: string;
	count: number;
}

interface UpdateProductCountResponse {
	productId: string;
	newCount: number;
}

export default class WarehouseService extends Service {
	constructor(broker:ServiceBroker) {
		super(broker);

		this.parseServiceSchema({
			name: "warehouse",
			actions: {
				async getProductCount(
					ctx: Context<{ productId: string }>
				): Promise<GetProductCountResponse> {
					return { productId: ctx.params.productId, count: 100 };
				},
				async updateProductCount(
					ctx: Context<{ productId: string; quantity: number }>
				): Promise<UpdateProductCountResponse> {
					const newCount = 100 - ctx.params.quantity;
					return { productId: ctx.params.productId, newCount };
				},
			},
		});
	}
}
