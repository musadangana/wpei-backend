import express, { type Express, type Request, type Response, type NextFunction } from "express";
import cors from "cors";
import router from "./routes";

const app: Express = express();

// CORS — allow your frontend origin, or * for open access
const corsOrigin = process.env.CORS_ORIGIN ?? "*";
app.use(cors({ origin: corsOrigin }));

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// All API routes are prefixed with /api
app.use("/api", router);

// Global error handler
app.use((err: Error, _req: Request, res: Response, _next: NextFunction) => {
  console.error("[WPEI API Error]", err.message);
  res.status(500).json({ error: "Internal server error" });
});

export default app;
