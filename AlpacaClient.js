// Require Alpaca module and create instance
const Alpaca = require("@alpacahq/alpaca-trade-api");
const alpaca = new Alpaca({
	apisecret: "",
	apikey: "",
	paper: true,
});

// Create AlpacaClient class to buy and sell stocks in Alpaca
class AlpacaClient {
	constructor() {
		this.symbol = "AAPL";
		this.qty = 1;
		this.type = "market";
		this.timeInForce = "gtc";
	}

	async buy() {
		try {
			const order = await alpaca.createOrder({
				symbol: this.symbol,
				qty: this.qty,
				type: this.type,
				time_in_force: this.timeInForce,
			});
			console.log(`${this.side} order placed for ${this.qty} ${this.symbol} at ${order.price}`);
		} catch (error) {
			console.error(error);
		}
	}

	async sell() {
		try {
			const order = await alpaca.createOrder({
				symbol: this.symbol,
				qty: this.qty,
				type: this.type,
				time_in_force: this.timeInForce,
			});
			console.log(`${this.side} order placed for ${this.qty} ${this.symbol} at ${order.price}`);
		} catch (error) {
			console.error(error);
		}
	}

	// Connect method to Alpaca stream
	async connect(onData) {
		try {
			const stream = await alpaca.getStream(["trade"]);
			stream.on("data", onData);
		} catch (error) {
			console.error(error);
		}
	}
}

// Export module
module.exports = AlpacaClient;
