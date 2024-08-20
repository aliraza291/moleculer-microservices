"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const moleculer_1 = require("moleculer");
const moleculer_web_1 = __importDefault(require("moleculer-web"));
class HttpGatewayService extends moleculer_1.Service {
    constructor(broker) {
        super(broker);
        this.parseServiceSchema({
            name: "http-gateway",
            mixins: [moleculer_web_1.default],
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
exports.default = HttpGatewayService;
