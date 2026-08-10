import categoriaRoutes from "../modules/categoria/categoria.routes"
import clienteRoutes from "../modules/cliente/cliente.routes"
import pecasRoutes from "../modules/peca/peca.routes"
import { Router } from "express";

const router = Router();

router.use("/categorias", categoriaRoutes);
router.use("/clientes", clienteRoutes);
router.use("/pecas", pecasRoutes)


export default router;
