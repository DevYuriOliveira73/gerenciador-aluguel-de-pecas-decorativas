import categoriaRoutes from "../modules/categoria/categoria.routes"
import clienteRoutes from "../modules/cliente/cliente.routes"
import { Router } from "express";

const router = Router();

router.use("/categorias", categoriaRoutes);
router.use("/clientes", clienteRoutes);


export default router;
