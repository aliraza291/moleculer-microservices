import { Service, ServiceBroker } from "moleculer";
import MoleculerWeb from "moleculer-web";

export default class HttpGatewayService extends Service {
    constructor(broker: ServiceBroker) {
        super(broker);

        this.parseServiceSchema({
            name: "http-gateway",
            mixins: [MoleculerWeb],
            settings: {
                // Expose all services as HTTP endpoints
                routes: [
                    {
                        aliases: {
                            // Forward all HTTP requests to Moleculer services
                            "GET /products/getAvailableProducts": "products.getAvailableProducts",
                            "POST /products/buyProduct": "products.buyProduct",
                            "GET /warehouse/getProductCount": "warehouse.getProductCount",
                            "POST /warehouse/updateProductCount": "warehouse.updateProductCount",
                        },
                    },
                ],
                cors: true,
            },
        });
    }
}
