import { Response } from "express";
import { ENVS } from "@ENV";

export function successResponse(res: Response, message: string, data?: any[]) {
  return res.status(200).json({
    message,
    data,
    info: {
      version: ENVS.VERSION,
      results: data?.length,
      time: new Date(),
    },
  });
}
