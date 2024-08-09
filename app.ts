import express, { NextFunction, Request, Response } from "express";
export const app = express();

import cookieParser from "cookie-parser";
import cors from "cors";
import { ErrorControllercha } from "./controllers/errorController";
app.use(express.json({ limit: "50mb" }));
app.use(cookieParser());
app.use(
   cors({
      origin: ["http://localhost/3000"],
   })
);

app.get("/test", (req: Request, res: Response, next: NextFunction) => {
   res.status(200).json({
      message: "api ishlamoqda",
   });
});

app.all("*", (req: Request, res: Response, next: NextFunction) => {
   const err = new Error(`${req.originalUrl} bunday router mavjud emas`);

   next(err.message);
});

app.use(ErrorControllercha);
