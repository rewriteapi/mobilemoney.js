import { Route } from "./route";
export declare class HTTPClient {
    /**
     * HTTPClient managing all HTTP request
     */
    private userAgent;
    private data;
    isLive: boolean;
    constructor();
    private fillConfig;
    isSandbox(): void;
    getData(): any;
    request(route: Route): Promise<import("node-fetch").Response>;
    uuidCheker(uuid: string): void;
    createApiUser(uuid: string, subscriptionKey: string, urlcallback?: string): Promise<[boolean, any] | any>;
    getApiUser(uuid: string, subscriptionKey: string): Promise<[boolean, any] | any>;
    createApiKey(uuid: string, subscriptionKey: string): Promise<[boolean, any] | any>;
}
