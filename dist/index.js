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
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const moleculer_1 = require("moleculer");
const products_service_1 = __importDefault(require("./services/products.service"));
const warehouse_service_1 = __importDefault(require("./services/warehouse.service"));
const mongodb_1 = require("mongodb");
const http_gateway_service_1 = __importDefault(require("./services/http-gateway.service"));
const broker = new moleculer_1.ServiceBroker({
    nodeID: "node-1",
    transporter: "TCP",
});
function checkMongoDBConnection() {
    return __awaiter(this, void 0, void 0, function* () {
        const client = new mongodb_1.MongoClient("mongodb+srv://alirazajutt5412:dvu4HD0qlPND72cC@cluster0.pkhg0.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0");
        try {
            yield client.connect();
            console.log("MongoDB is connected");
        }
        catch (err) {
            if (err instanceof Error) {
                console.error(`MongoDB connection failed: ${err.message}`);
            }
            else {
                console.error(`MongoDB connection failed: ${String(err)}`);
            }
        }
        finally {
            yield client.close();
        }
    });
}
broker.createService(products_service_1.default);
broker.createService(warehouse_service_1.default);
broker.createService(http_gateway_service_1.default);
broker.start().then(() => {
    console.log("Broker started");
    checkMongoDBConnection();
}).catch(err => {
    console.error("Broker start failed:", err);
});
