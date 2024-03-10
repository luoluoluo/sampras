import express from "express";
import cors from "cors";
import dotenv from "dotenv";
import { Request, Response } from "express";
import redisClient from "./core/redis";
import bodyParser from "body-parser";
import log4js from "log4js";
import logger from "./core/logger";
import { startServer as cmsStartServer } from "@/packages/admin";
import { downloadFile, uploadFile } from "./file";
import multer from "multer";

dotenv.config();
const app = express();
const port = process.env.PORT || 4000;

const startServer = async () => {
  await redisClient.connect();
  app.use(cors());
  app.use(express.json());
  app.use(express.urlencoded({ extended: true }));
  // log
  app.use(log4js.connectLogger(logger, { level: "info" }));

  app.get("/", (req: Request, res: Response) => {
    res.send("Hello World!");
  });

  app.use(bodyParser.json()); // for parsing application/json
  app.use(bodyParser.urlencoded({ extended: true })); // for parsing application/x-www-form-urlencoded

  await cmsStartServer(app);

  app.post(
    "/file",
    multer({
      dest: "/tmp/",
      fileFilter(req, file, callback) {
        // 解决中文名乱码的问题
        file.originalname = Buffer.from(file.originalname, "latin1").toString(
          "utf8"
        );
        callback(null, true);
      },
    }).single("file"),
    uploadFile
  );
  app.get("/file", downloadFile);

  app.listen(port, () => {
    console.log(`🚀 Express ready at http://localhost:${port}`);
  });
};

startServer();
