import categoriaRoutes from "../modules/categoria/categoria.routes"
import { Router } from "express";

const router = Router();

router.use("/categorias", categoriaRoutes);

export default router;
