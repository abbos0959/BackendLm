import { NextFunction, Request, Response } from "express";
import AppError from "./AppError";

const catchErrorAsync = (funksiya: any) => {
   const catchFunc = (req: Request, res: Response, next: NextFunction) => {
      funksiya(req, res, next).catch((err: any) => {
         console.log(err);
         next(new AppError(err.message, 401));
      });
   };
   return catchFunc;
};

export default catchErrorAsync;
