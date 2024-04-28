import { Request, Response } from "express";

export function homeMessage(req: Request, res: Response) {
  return res.sendFile(__dirname + "/public/index.html");
}
