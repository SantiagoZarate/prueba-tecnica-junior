import { Application, urlencoded, json, static as static_ } from "express";
import cors from "cors";
import morgan from "morgan";
import { ENVS } from "@ENV";
import path from "path";

export function setGeneraMiddleware(server: Application) {
  server.use(static_(path.join(__dirname, "../../public")));

  server.use(
    urlencoded({
      extended: true,
    })
  );
  server.use(json());

  server.use(cors());
  ENVS.ENVIROMENT === "DEV" && server.use(morgan("dev"));
}
