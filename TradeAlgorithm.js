// Create a Trade algorithm class
// buy when the algorithm is above the buy threshold
// sell when the algorithm is below the sell threshold
class TradeAlgorithm {
	constructor(buyThreshold, sellThreshold, alpacaClient) {
		this.buyThreshold = buyThreshold;
		this.sellThreshold = sellThreshold;
		this.alpacaClient = alpacaClient;
	}

	async buy(symbol, qty) {
		try {
			const order = await alpacaClient.buy(symbol, qty);
			console.log(`${symbol} BUY order placed for ${qty} at ${order.price}`);
		} catch (error) {
			console.error(error);
		}
	}

	async sell(symbol, qty) {
		try {
			const order = await alpacaClient.sell(symbol, qty);
			console.log(`${symbol} SELL order placed for ${qty} at ${order.price}`);
		} catch (error) {
			console.error(error);
		}
	}

	// Algorithm to buy when the price is above the buy threshold
	// Algorithm to sell when the price is below the sell threshold
	async trade(symbol, price) {
		if (price > this.buyThreshold) {
			this.buy(symbol, 1);
		} else if (price < this.sellThreshold) {
			this.sell(symbol, 1);
		}
	}
}

// Export module
module.exports = TradeAlgorithm;
