import { Router } from "express";

const router = Router();

router.get("/", (req, res) => {
  res.send("Hello from TypeScript Express JUAN!");
});

export default router;
