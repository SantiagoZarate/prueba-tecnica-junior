import { Request, Response } from "express";

function getAllInfo(req: Request, res: Response) {
  return res.status(200).json({
    message: "Returning all info",
  });
}

export { getAllInfo };
