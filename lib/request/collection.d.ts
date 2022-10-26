import { HTTPClient } from "./http";
export declare class Collection {
    private http;
    private subscriptionKey;
    /**
     * Collection class managing collection product
     *
     * @param http - a HTTPClient type
     * @param subscriptionKey - a string of your credential
     */
    constructor(http: HTTPClient, subscriptionKey: string);
    createAccessToken(authorization: string): Promise<[boolean, any] | any>;
    getAccountBalance(authorization: string, target: string): Promise<[boolean, any] | any>;
    getAccountBalanceIn(currency: string, authorization: string, target: string): Promise<[boolean, any] | any>;
    getBasicUserInfo(msisdn: string, authorization: string, target: string): Promise<[boolean, any] | any>;
    askUserInfo(authorization: string, target: string): Promise<[boolean, any] | any>;
    requestToPay(authorization: string, uuid: string, target: string, body: Object, callback?: string): Promise<[boolean, any] | any>;
    getWithdrawStatus(authorization: string, uuid: string, target?: string): Promise<[boolean, any] | any>;
    withdraw(authorization: string, uuid: string, target: string, body: Object, callback?: string): Promise<any[] | undefined>;
    isActive(account: string, accountType: string, authorization: string, target: string): Promise<any[] | undefined>;
}
