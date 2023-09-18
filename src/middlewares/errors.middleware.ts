import { NextFunction, Request, Response } from "express";
import { CustomError } from "@/protocols/error.types";

export default function errorHandlingMiddleware(
  error: CustomError,
  req: Request,
  res: Response,
  next: NextFunction
) {
  if (error.type === "conflictError") {
    return res.status(error.status).send(error.message);
  }

  return res.sendStatus(500);
}
