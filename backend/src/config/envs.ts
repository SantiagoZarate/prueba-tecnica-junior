import dotenv from "dotenv";
import z from "zod";
dotenv.config();

const envSchema = z.object({
  PORT: z.coerce.number(),
  ENVIROMENT: z.string().min(3),
  VERSION: z.string().min(3),
});

export const ENVS = envSchema.parse(process.env);
