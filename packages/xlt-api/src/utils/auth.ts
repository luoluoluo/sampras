import type { JwtPayload } from "jsonwebtoken";
import jwt from "jsonwebtoken";
import bcrypt from "bcryptjs";
import {
  ignoreAclPermissions,
  ignoreAuthPermissions,
} from "@/packages/admin/variables/permission";

const appKey = process.env.APP_KEY || "";

interface Data {
  id: string;
  password: string;
}

export const ignoreAuth = (queryPermissions: string[]) => {
  let ignore = true;
  queryPermissions.map((permission) => {
    if (!ignoreAuthPermissions.includes(permission)) {
      ignore = false;
      return;
    }
  });
  return ignore;
};

export const ignoreAcl = (queryPermissions: string[]) => {
  let ignore = true;
  queryPermissions.map((permission) => {
    if (!ignoreAclPermissions.includes(permission)) {
      ignore = false;
      return;
    }
  });
  return ignore;
};

export const hashPassword = async (password: string) => {
  return await bcrypt.hash(
    password,
    // crypto.createHash("md5").update(password, "utf8").digest("hex"),
    10
  );
};

export const sign = (id: string, password: string) => {
  const token = jwt.sign(
    {
      exp: Math.floor(Date.now() / 1000) + 60 * 60 * 24 * 7,
      data: JSON.stringify({
        id,
        password,
      }),
    },
    appKey
  );
  return token;
};

export const verify = (token: string): Data | undefined => {
  if (!token) {
    return;
  }
  try {
    const payload = jwt.verify(token, appKey);
    if (!payload || !(payload as JwtPayload).data) {
      return;
    }
    const data = JSON.parse((payload as JwtPayload).data);
    return data as Data;
  } catch (e) {
    console.log(e);
    return;
  }
};
