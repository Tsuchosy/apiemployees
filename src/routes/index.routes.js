//Configuración de las routas usando Router del modulo express también se podría hacer lo mismo usando el methodo app.

import { Router } from "express";

//Recordar que cuando son módulos creados para exportar ponet el js al final.
import { ping } from "../controllers/index.controllers.js";

//Router es lo mismo que app.get para hacer las rutas
const router = Router();

router.get("/ping", ping);

export default router;
