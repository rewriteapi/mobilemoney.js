import { HTTPClient } from "./http";
export declare class Disbursements {
    private http;
    private subscriptionKey;
    /**
     * Disbursements class managing Disbursement product
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
    getDepositStatus(uuid: string, authorization: string, target: string): Promise<[boolean, any] | any>;
    deposit(uuid: string, authorization: string, target: string, body: Object, urlcallback?: string): Promise<[boolean, any] | any>;
    transfer(uuid: string, authorization: string, target: string, body: Object, urlcallback?: string): Promise<[boolean, any] | any>;
    refund(uuid: string, authorization: string, target: string, body: Object, urlcallback?: string): Promise<[boolean, any] | any>;
    getTransferStatus(uuid: string, authorization: string, target: string): Promise<[boolean, any] | any>;
    getRefundStatus(uuid: string, authorization: string, target: string): Promise<[boolean, any] | any>;
    isActive(account: string, authorization: string, accountType: string, target: string): Promise<[boolean, any] | any>;
}
