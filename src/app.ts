import express from "express";
import router from "./routes/index";
import { errorHandler } from "./shared/middlewares/errorHandler";

export function myApp() {

  const app = express();
  app.use(express.json());
  app.use("/api", router);

  app.use((req, res) => {
    res.status(404).json({ error: "Rota não encontrada" });
  });

  app.use(errorHandler)
  return app;
}
