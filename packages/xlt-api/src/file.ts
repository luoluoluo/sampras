import { Request, Response } from "express";
import fs from "fs";
import prisma from "@/core/prisma";
import { genId } from "@/utils/genId";
import path from "path";

const storagePath = process.env.STORSGE_PATH || `${process.cwd()}/files`;
export const uploadFile = async (req: Request, res: Response) => {
  const fileId = genId();
  const filePath = path.resolve(
    `${storagePath}/${fileId}-${req.file?.originalname}`
  );
  // db
  await prisma.file.create({
    data: {
      id: fileId,
      path: filePath,
      name: req.file?.originalname,
      size: req.file?.size,
      type: req.file?.mimetype,
    },
  });
  // storage
  const dirPath = path.dirname(filePath);
  if (!fs.existsSync(dirPath)) {
    fs.mkdirSync(dirPath, { recursive: true });
  }
  fs.rename(req.file?.path!, filePath, (err) => {
    console.log(err);
  });
  res.send({
    id: fileId,
    name: req.file?.originalname,
  });
};

export const downloadFile = async (req: Request, res: Response) => {
  const id = req.query.id;
  const file = await prisma.file.findFirst({ where: { id: String(id) } });
  if (!file || !file.path) {
    res.status(404).send();
    return;
  }
  res.download(file.path);
};
