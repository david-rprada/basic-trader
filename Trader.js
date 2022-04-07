// Import AlpacaClient and create instance
const AlpacaClient = require("./AlpacaClient.js");
const alpaca = new AlpacaClient();

// Import TradeAlgorithm and create instance
const TradeAlgorithm = require("./TradeAlgorithm.js");
const tradeAlgorithm = new TradeAlgorithm(0.5, 0.1, alpaca);

// Trade examples
//tradeAlgorithm.trade("AAPL", 100);
//tradeAlgorithm.trade("REE", 75);

function onData(data) {
	tradeAlgorithm.trade(data.symbol, data.close);
}

// Connect trader to market data stream
alpaca.connect(onData);
