const { MongoClient } = require("mongodb");

async function seed() {
	const client = new MongoClient("mongodb+srv://alirazajutt5412:dvu4HD0qlPND72cC@cluster0.pkhg0.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0", {
		useNewUrlParser: true,
		useUnifiedTopology: true,
	});
	try {
		await client.connect();
		const db = client.db("warehouse_db");
		const collection = db.collection("products");

		const products = [
			{ _id: "1", name: "Product A", count: 100 },
			{ _id: "2", name: "Product B", count: 200 },
		];

		await collection.insertMany(products);
		console.log("Seed data inserted");
	} finally {
		await client.close();
	}
}

seed().catch(console.error);
