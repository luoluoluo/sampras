import redis from "@/core/redis";

const accessTokenCacheKey = "swssWechatAccessToken";
const getAccessTokenUrl = "https://api.weixin.qq.com/cgi-bin/token";
const getWxaCodeUnlimitUrl = "https://api.weixin.qq.com/wxa/getwxacodeunlimit";

interface Response {
  errcode: number;
  errmsg: string;
}

export interface GetAccessTokenRequest {
  grant_type: string; // client_credential
  appid: string;
  secret: string;
}

export interface GetAccessTokenResponse extends Response {
  access_token: string;
  expires_in: number;
}

export interface GetWxaCodeUnlimitUrlRequest {
  scene: string;
  page: string;
  width: number;
  check_path: boolean;
  env_version: "release" | "trial" | "develop";
}

export interface GetWxaCodeUnlimitUrlResponse extends Response {
  data: string;
}

// token
export const getAccessToken = async (): Promise<string> => {
  const accessToken = await redis.get(accessTokenCacheKey);
  if (accessToken) {
    return accessToken;
  }
  const data: GetAccessTokenRequest = {
    appid: process.env.WECHAT_APP_ID || "",
    secret: process.env.WECHAT_APP_SECRET || "",
    grant_type: "client_credential",
  };
  const url = `${getAccessTokenUrl}?${new URLSearchParams(
    data as any
  ).toString()}`;
  const res = await fetch(url);
  const resData = await (res.json() as Promise<GetAccessTokenResponse>);
  if (resData.errcode) {
    throw new Error(resData.errmsg);
  }
  redis.setEx(accessTokenCacheKey, 7200, resData.access_token);
  return resData.access_token;
};

// 获取小程序码
export const getWxaCodeUnlimit = async (
  data: GetWxaCodeUnlimitUrlRequest
): Promise<GetWxaCodeUnlimitUrlResponse> => {
  const accessToken = await getAccessToken();
  const url = `${getWxaCodeUnlimitUrl}?access_token=${accessToken}`;
  const res = await fetch(url, {
    method: "POST",
    body: JSON.stringify(data),
  });
  const contentType = res.headers.get("Content-Type");
  if (res.status !== 200 || contentType !== "image/jpeg") {
    return (await res.json()) as Promise<GetWxaCodeUnlimitUrlResponse>;
  }
  return {
    errcode: 0,
    errmsg: "",
    data: `data:image/png;base64,${Buffer.from(
      await res.arrayBuffer()
    ).toString("base64")}`,
  };
};
