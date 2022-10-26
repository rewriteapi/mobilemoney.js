import { HTTPClient } from "./http";
import { Collection } from "./collection";
import { Disbursements } from "./disbursements";
export declare class Request {
    private _http;
    private _collection;
    private _disbursements;
    constructor();
    http(): HTTPClient;
    collection(subscriptionKey: string, http: HTTPClient): Collection;
    disbursements(subscriptionKey: string, http: HTTPClient): Disbursements;
}
