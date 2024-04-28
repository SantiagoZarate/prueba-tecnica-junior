import { NextFunction, Request, Response } from "express";

type inputFn = (req: Request, res: Response) => Promise<any>;

export function catchedAsync(fn: inputFn) {
  return (req: Request, res: Response, next: NextFunction) => {
    console.log("Catcheando los async");
    fn(req, res).catch((e) => next(e));
  };
}
