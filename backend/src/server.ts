import express from "express";
import { setGeneraMiddleware } from "./middlewares/setGeneralMiddlewares";
import infoRouter from "@Router/info.router";
import userRouter from "@Router/users.route";
import { ENVS } from "@ENV";
import { homeMessage } from "./utils/homeMessage";

const server = express();

setGeneraMiddleware(server);

// Rutas
server.get("/", homeMessage);

server.use("/api/info", infoRouter);
server.use("/api/user", userRouter);

export function startServer() {
  server.listen(ENVS.PORT, () => {
    console.log(`Server up and running on port http://localhost:${ENVS.PORT}`);
  });
}
