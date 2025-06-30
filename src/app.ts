import express from "express";
import indexRoutes from "./routes";

const app = express();

// Middleware
app.use(express.json());

// Routes
app.use("/", indexRoutes);

export default app;
