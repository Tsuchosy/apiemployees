import express from "express";
import config from "./server/config.js";
import routerIndex from "./routes/index.routes.js";
import routerEmployees from "./routes/employees.routes.js";

const app = config(express());
app.use(express.json());

app.use("/api/", routerEmployees);
app.use(routerIndex);

app.use((req, res, next) => {
  res.status(404).json({
    message: "endpoint not found",
  });
});

export default app;
