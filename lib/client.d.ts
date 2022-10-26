import { Collection } from "./request/collection";
import { Disbursements } from "./request/disbursements";
export declare class Client {
    /**
     * Client Agent
     *
     * @param null
     *
     */
    private request;
    private http;
    constructor();
    collection(subscriptionKey: string): Collection;
    disbursements(subscriptionKey: string): Disbursements;
    createApiUser(uuid: string, subscriptionKey: string, urlCallback?: string): Promise<[boolean, any]>;
    getApiUser(uuid: string, subscriptionKey: string): Promise<[boolean, any]>;
    createApiKey(uuid: string, subscriptionKey: string): Promise<[boolean, any]>;
    getReferenceId(): string;
    isSandbox(): void;
    basicToken(apiUser: string, apiKey: string): string;
    bearerToken(token: string): string;
}
