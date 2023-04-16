//Configuración de las routas usando Router del modulo express también se podría hacer lo mismo usando el methodo app.

import { Router } from "express";
import {
  getEmployees,
  createEmployees,
  modifyEmployees,
  deleteEmployees,
  getEmployee,
} from "../controllers/employees.controllers.js";

const router = Router();

router.get("/employees", getEmployees);
router.get("/employees/:id", getEmployee);
router.post("/employees", createEmployees);
router.patch("/employees/:id", modifyEmployees);
router.delete("/employees/:id", deleteEmployees);

export default router;
