require("dotenv").config();
const PORT = 3000;
const express = require("express");
const socketIO = require("socket.io");
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
  const randomValues = () => {
    const value = Math.random() * 10 + 15;
    const valueSTR = value.toFixed(3);
    return valueSTR.toString();
  };
  const DATA = [
    {
      id: "USD",
      name: "US DOLLAR",
    },
    {
      id: "EUR",
      name: "EURO",
    },
    {
      id: "AUD",
      name: "AUSTRALIAN DOLLAR",
    },
    {
      id: "CAD",
      name: "CANADIAN DOLLAR",
    },
    {
      id: "GBP",
      name: "POUND STERLING",
    },
    {
      id: "JPY",
      name: "JAPENESE YEN",
    },
    {
      id: "NOK",
      name: "NORWEGIAN KRONE",
    },
    {
      id: "SEK",
      name: "SWEDISH KRONA",
    },
    {
      id: "SAR",
      name: "SAUDI RIYAL",
    },
    {
      id: "DKK",
      name: "DANISH KRONE",
    },

    {
      id: "CHF",
      name: "CONFEDERATIO FRANC",
    },
    {
      id: "TRY",
      name: "TURKISH LIRA",
    },
  ];

  const priceList = DATA.map((item) => {
    return {
      id: item.id,
      name: item.name,
      sellPrice: randomValues(),
      buyPrice: randomValues(),
    };
  });

  socketHandler.emit("exchange", priceList);
};

setInterval(() => {
  getPrices();
}, 1000);
