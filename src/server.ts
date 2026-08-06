import connectDB from "./config/database.js";
import app from "./app.js";
import "dotenv/config";


const startServer = async () => {
  try {
    await connectDB();

    const server = app.listen(process.env.PORT, () => {
      console.log(`Servidor rodando em http://localhost:${process.env.PORT}`);
    });

    server.on("error", (error) => {
      console.error("Erro no servidor:", error);
      process.exit(1);
    });
  } catch (error) {
    console.log("Falha na conexão com o banco de dados", error);
    process.exit(1);
  }
};

startServer();
