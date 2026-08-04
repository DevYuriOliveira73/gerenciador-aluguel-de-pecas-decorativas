import express from "express";

const app = express()

app.use(express.json())

//routes import
import pecaRouter from "./routes/peca.route"
import clienteRouter from "./routes/cliente.route"
import pedidoRouter from "./routes/pedido.route"


//routes declaration
app.use('/api/v1', pecaRouter)
app.use('/api/v1', clienteRouter)
app.use('/api/v1', pedidoRouter)


export default app;
