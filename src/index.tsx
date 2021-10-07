import React from "react";
import ReactDOM from "react-dom";
import { createServer, Model } from "miragejs";
import { App } from "./App";

createServer({
  models: {
    transaction: Model,
  },

  seeds(server) {
    server.db.loadData({
      transactions: [
        {
          id: 1,
          title: "Playstation 5 - fastshop",
          type: "withdraw",
          category: "Outros",
          amount: 4000,
          createdAt: new Date("2022-07-24 12:33:03"),
        },
        {
          id: 2,
          title: "Freelance FrontEnd",
          type: "deposit",
          category: "Dev",
          amount: 6000,
          createdAt: new Date("2021-11-24 07:00:02"),
        },
        {
          id: 3,
          title: "Aluguel",
          type: "withdraw",
          category: "Casa",
          amount: 1000,
          createdAt: new Date("2021-10-01 15:11:02"),
        },
        {
          id: 4,
          title: "AirBnb",
          type: "withdraw",
          category: "Outros",
          amount: 530,
          createdAt: new Date("2021-09-15 09:00:02"),
        },
      ],
    });
  },

  routes() {
    this.namespace = "api";

    this.get("/transactions", () => {
      return this.schema.all("transaction");
    });
    this.post("/transactions", (schema, request) => {
      const data = JSON.parse(request.requestBody);
      return schema.create("transaction", data);
    });
  },
});
ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById("root")
);
