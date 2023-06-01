require("dotenv").config();

const PORT = 3000;
const express = require("express");
const socketIO = require("socket.io");
const axios = require("axios");
const app = express();

const server = app.listen(process.env.PORT, () => {
  console.log(`Listning to ${PORT}`);
});
const socketHandler = socketIO(server);

socketHandler.on("connection", (socket) => {
  socket.on("connect_error", () => {
    console.log("Connection error!");
  });
  socket.on("disconnect", () => {
    console.log("Client disconnected!");
  });
  console.log("Client Connected!");
  socket.emit("exchange", "Hello Exchange Client!");
});

const getPrices = () => {
  axios
    .get(process.env.LIST_URL)
    .then((response) => {
      const randomValues = () => {
        const value = Math.random() * 10 + 15;
        const valueSTR = value.toFixed(3);
        return valueSTR.toString();
      };
      const list = [
        (USD = response.data.USD),
        (EUR = response.data.EUR),
        (AUD = response.data.AUD),
        (CAD = response.data.CAD),
        (GBP = response.data.GBP),
        (JPY = response.data.JPY),
        (NOK = response.data.NOK),
        (SEK = response.data.SEK),
        (DKK = response.data.DKK),
        (SAR = response.data.SAR),
        (RUB = response.data.RUB),
        (RON = response.data.RON),
      ];
      const priceList = list.map((item) => {
        return {
          id: item.Kod,
          name: item.CurrencyName,
          sellPrice: randomValues(),
          buyPrice: item.ForexBuying,
        };
      });
      socketHandler.emit("exchange", priceList);
    })
    .catch((err) => {
      console.log(err);
    });
};

setInterval(() => {
  getPrices();
}, 2000);
