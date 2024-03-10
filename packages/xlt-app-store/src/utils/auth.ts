import { cookies, headers } from "next/headers";
import { redirect } from "next/navigation";

export const tokenKey = "token";
export const myKey = "my";

export const auth = () => {
    const headersList = headers();
    const url = headersList.get("x-url") || "";
    const token = getToken();
    if (!token) redirect(`/login?url=${encodeURI(url)}`);
};

export const getToken = () => {
    const cookieData = cookies();
    const token = cookieData.get(tokenKey)?.value;
    return token || "";
};

export const getMy = () => {
    const cookieData = cookies();
    const my = cookieData.get(myKey)?.value;
    return my ? JSON.parse(my) : undefined;
};
