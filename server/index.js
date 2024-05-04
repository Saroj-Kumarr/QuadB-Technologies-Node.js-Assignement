const express = require("express");
const app = express();
const PORT = process.env.PORT || 8000;
const connectDatabase = require("./config/database");
const Ticker = require("./models/Ticker");

app.get("/", async (req, res) => {
  try {
    const response = await fetch("https://api.wazirx.com/api/v2/tickers");
    const json = await response.json();

    const entries = Object.entries(json);

    const results = entries.slice(0, 10);

    const finalResults = results.map(([, data]) => {
      return {
        name: data.name,
        last: data.last,
        buy: data.buy,
        sell: data.sell,
        volume: data.volume,
        base_unit: data.base_unit,
      };
    });

    Ticker.insertMany(finalResults);

    res.status(200).json({
      success: true,
      message: "Data fetched and stored successfully.",
    });
  } catch (error) {
    console.log(error.message);
  }
});

app.get("/tickers", async (req, res) => {
  try {
    const tickers = await Ticker.find().limit(10);
    res.status(200).json({
      success: true,
      data: tickers,
    });
  } catch (error) {
    console.log(error.message);
  }
});

app.listen(PORT, async () => {
  try {
    console.log(`Server is running on port ${PORT}`);
    await connectDatabase();
  } catch (error) {
    console.log(error.message);
  }
});
