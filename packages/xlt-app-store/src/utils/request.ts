import { getToken } from "@/utils/auth";
import { ApolloClient, InMemoryCache, createHttpLink, from } from "@apollo/client";
import { onError } from "@apollo/client/link/error";
const baseUrl = process.env.NEXT_PUBLIC_BASE_API_URL;

const httpLink = createHttpLink({
    uri: `${baseUrl}/store`,
    fetch: async (url, init?: RequestInit) => {
        const token = getToken();
        return fetch(url as string, {
            body: init?.body,
            method: init?.method,
            headers: { ...init?.headers, token }
        }).then(res => {
            if (res.status === 401) {
                // deleteMe();
                // deleteToken();
            }
            return res;
        });
    }
});

const errorLink = onError(({ graphQLErrors, networkError }) => {
    console.log("GraphQL error:", graphQLErrors, networkError);
    if (graphQLErrors)
        graphQLErrors.forEach(({ message, locations, path, extensions }) => {
            switch (extensions.code) {
                case "UNAUTHENTICATED":
                    // deleteMe();
                    // deleteToken();
                    window.location.href = "/login";
                    break;
            }
            console.log(`[GraphQL error]: Message: ${message}, Location: ${locations}, Path: ${path}`);
        });
    if (networkError) {
        console.log(`[Network error]: ${networkError}`);
    }
    networkError = null;
});

export const apolloClient = new ApolloClient({
    link: from([errorLink, httpLink]),
    cache: new InMemoryCache()
});
export const upload = async <T>(url: string, formData: FormData) => {
    return fetch(`${baseUrl}${url}`, {
        body: formData,
        method: "POST",
        headers: { token: getToken() }
    })
        .then(async res => {
            return res.json() as Promise<T>;
        })
        .catch(e => {
            return { code: 500, message: e.message } as T;
        });
};