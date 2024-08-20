import { ServiceBroker } from "moleculer";
import ProductsService from "./services/products.service";
import WarehouseService from "./services/warehouse.service";
import { MongoClient } from "mongodb";
import HttpGatewayService from "./services/http-gateway.service";

const broker = new ServiceBroker({
    nodeID: "node-1",
    transporter: "TCP",
});

async function checkMongoDBConnection() {
    const client = new MongoClient("mongodb+srv://alirazajutt5412:dvu4HD0qlPND72cC@cluster0.pkhg0.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0");

    try {
        await client.connect();
        console.log("MongoDB is connected");
    } catch (err) {
        if (err instanceof Error) {
            console.error(`MongoDB connection failed: ${err.message}`);
        } else {
            console.error(`MongoDB connection failed: ${String(err)}`);
        }
    } finally {
        await client.close();
    }
}

broker.createService(ProductsService);
broker.createService(WarehouseService);
broker.createService(HttpGatewayService);

broker.start().then(() => {
    console.log("Broker started");
    checkMongoDBConnection();
}).catch(err => {
    console.error("Broker start failed:", err);
});
