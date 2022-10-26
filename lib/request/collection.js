"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.Collection = void 0;
const route_1 = require("./route");
const utils_1 = require("../utils/utils");
const errors_1 = require("../errors/errors");
class Collection {
    /**
     * Collection class managing collection product
     *
     * @param http - a HTTPClient type
     * @param subscriptionKey - a string of your credential
     */
    constructor(http, subscriptionKey) {
        this.http = http;
        this.subscriptionKey = subscriptionKey;
        this.http = http;
        this.subscriptionKey = subscriptionKey;
    }
    createAccessToken(authorization) {
        return __awaiter(this, void 0, void 0, function* () {
            /**
             * Method to create access token
             *
             * @param authorization - a string of your basic token
             *
             * @return `[boolean, Object]`
             */
            if ((0, utils_1.isValidBasicToken)(authorization)) {
                let headers = {
                    "Authorization": authorization,
                    "Ocp-Apim-Subscription-Key": this.subscriptionKey
                };
                let response = yield this.http.request(new route_1.Route("POST", utils_1.COLLECTION_PATH.get("create_access_token").get(route_1.Route.getEnv(this.http.isLive)), this.http.isLive, headers));
                if (response.status === 200) {
                    return [true, this.http.getData()];
                }
                else {
                    (0, utils_1.errors_manager)(response, this.http.getData());
                }
            }
            else {
                throw new errors_1.InvalidBasicToken("Invalid Basic Token Type given");
            }
        });
    }
    getAccountBalance(authorization, target) {
        return __awaiter(this, void 0, void 0, function* () {
            /**
             * method to get Account Balance
             *
             * @param authorization - a string of your Bearer Token
             * @param target - a string of your target environement
             *
             * @return `[boolean, any]`
             */
            if ((0, utils_1.isValidBearerToken)(authorization)) {
                let headers = {
                    "Authorization": authorization,
                    "X-Target-Environment": target,
                    "Ocp-Apim-Subscription-Key": this.subscriptionKey
                };
                let response = yield this.http.request(new route_1.Route("GET", utils_1.COLLECTION_PATH.get("get_account_balance").get(route_1.Route.getEnv(this.http.isLive)), this.http.isLive, headers));
                if (response.status === 200) {
                    return [true, this.http.getData()];
                }
                else {
                    (0, utils_1.errors_manager)(response, this.http.getData());
                }
            }
            else {
                throw new errors_1.InvalidBearerToken("Invalid Bearer Token Type given");
            }
        });
    }
    getAccountBalanceIn(currency, authorization, target) {
        return __awaiter(this, void 0, void 0, function* () {
            /**
             * Method to get Account Balance in specific currency
             *
             * @param currency - a string of a valid ISO4217 currency
             * @param authorization - a string of a valid Bearer token
             * @param target - a string of your target environement
             *
             * @return `[boolean, Object]` Object is JSON type
             */
            if ((0, utils_1.isValidBearerToken)(authorization)) {
                let headers = {
                    'Authorization': authorization,
                    'X-Target-Environment': target,
                    'Ocp-Apim-Subscription-Key': this.subscriptionKey
                };
                let params = {
                    "currency": currency
                };
                let response = yield this.http.request(new route_1.Route("GET", (0, utils_1.replace)(utils_1.COLLECTION_PATH.get('get_account_balance_in').get(route_1.Route.getEnv(this.http.isLive)), params), this.http.isLive, headers));
                if (response.status === 200) {
                    return [true, this.http.getData()];
                }
                else {
                    (0, utils_1.errors_manager)(response, this.http.getData());
                }
            }
            else {
                throw new errors_1.InvalidBearerToken("Invalid Bearer Token Type given");
            }
        });
    }
    getBasicUserInfo(msisdn, authorization, target) {
        return __awaiter(this, void 0, void 0, function* () {
            /**
             * Method to get Basic User Informaton without his consent
             *
             * @param msisdn - a string number of the target user
             * @param authorization -  a string of a valid Bearer Token
             * @param target - a string of your target environement
             *
             * @return `[boolean, Object]` Object is JSON type
             */
            if ((0, utils_1.isValidBearerToken)(authorization)) {
                let headers = { 'Authorization': authorization,
                    'X-Target-Environment': target,
                    'Ocp-Apim-Subscription-Key': this.subscriptionKey
                };
                let params = {
                    "MSISDN": msisdn
                };
                let response = yield this.http.request(new route_1.Route("GET", (0, utils_1.replace)(utils_1.COLLECTION_PATH.get("get_basic_info").get(route_1.Route.getEnv(this.http.isLive)), params), this.http.isLive, headers));
                if (response.status === 200) {
                    return [true, this.http.getData()];
                }
                else {
                    (0, utils_1.errors_manager)(response, this.http.getData());
                }
            }
            else {
                throw new errors_1.InvalidBearerToken("Invalid Bearer Token Type given");
            }
        });
    }
    askUserInfo(authorization, target) {
        return __awaiter(this, void 0, void 0, function* () {
            /**
             * Method to get full user Info with consent
             *
             * @remarks
             * User here is Collection user
             *
             * @param authorization - a string of a valid bearer token
             * @param target - a string of your target environement
             *
             * @return `[boolean, Object]` Object is JSON type
             */
            if ((0, utils_1.isValidBearerToken)(authorization)) {
                let headers = {
                    'Authorization': authorization,
                    'X-Target-Environment': target,
                    'Ocp-Apim-Subscription-Key': this.subscriptionKey
                };
                let response = yield this.http.request(new route_1.Route("GET", utils_1.COLLECTION_PATH.get("get_user_info").get(route_1.Route.getEnv(this.http.isLive)), this.http.isLive, headers));
                if (response.status === 200) {
                    return [true, this.http.getData()];
                }
                else {
                    (0, utils_1.errors_manager)(response, this.http.getData());
                }
            }
            else {
                throw new errors_1.InvalidBearerToken("Invalid Bearer Token Type given");
            }
        });
    }
    requestToPay(authorization, uuid, target, body, callback) {
        return __awaiter(this, void 0, void 0, function* () {
            /**
             * Method to request a payment
             *
             * @remarks
             * uuid should be different for each request
             *
             * @param authorization - a string of a valid bearer token
             * @param uuid - a string of valid UUID version 4
             * @param target - a string of your target environement
             * @param body - a Object type refer to documentation for full detail
             * @param callback - [Optional] a string of website receiving call back
             *
             * @return `[boolean, any]` boolean is true if request is done successfully
             */
            if ((0, utils_1.isValidBearerToken)(authorization)) {
                this.http.uuidCheker(uuid);
                let callKey = "X-Callback-Url";
                if (callback === undefined) {
                    callback = "No callback url given";
                    callKey = "No-callback-Url";
                }
                let headers = { 'Authorization': authorization,
                    'X-Target-Environment': target,
                    'Ocp-Apim-Subscription-Key': this.subscriptionKey,
                    'X-Reference-Id': uuid,
                    'Content-Type': 'application/json',
                    callkey: callback
                };
                let response = yield this.http.request(new route_1.Route("POST", utils_1.COLLECTION_PATH.get("request_to_pay").get(route_1.Route.getEnv(this.http.isLive)), this.http.isLive, headers, JSON.stringify(body)));
                if (response.status === 202) {
                    return [true, this.http.getData()];
                }
                else {
                    (0, utils_1.errors_manager)(response, this.http.getData());
                }
            }
            else {
                throw new errors_1.InvalidBearerToken("Invalid Bearer Token Type given");
            }
        });
    }
    getWithdrawStatus(authorization, uuid, target = "sandbox") {
        return __awaiter(this, void 0, void 0, function* () {
            /**
             * Method to get a withdrawal status
             *
             * @param authorization - a string of valid bearer token
             * @param uuid - a string of valid UUID version 4 used for withdrawal request
             * @param target - a string of your target environement
             *
             * @return `[boolean, any]`
             */
            if ((0, utils_1.isValidBearerToken)(authorization)) {
                this.http.uuidCheker(uuid);
                let headers = {
                    'Authorization': authorization,
                    'X-Target-Environment': target,
                    'Ocp-Apim-Subscription-Key': this.subscriptionKey
                };
                let params = {
                    "referenceId": uuid
                };
                let response = yield this.http.request(new route_1.Route("GET", (0, utils_1.replace)(utils_1.COLLECTION_PATH.get("withdraw_status").get(route_1.Route.getEnv(this.http.isLive)), params), this.http.isLive, headers));
                if (response.status === 200) {
                    return [true, this.http.getData()];
                }
                else {
                    (0, utils_1.errors_manager)(response, this.http.getData());
                }
            }
            else {
                throw new errors_1.InvalidBearerToken("Invalid Bearer Token Type given");
            }
        });
    }
    withdraw(authorization, uuid, target, body, callback) {
        return __awaiter(this, void 0, void 0, function* () {
            /**
             * Method to withdraw money
             *
             * @remarks
             * The library is using only V2 from MTN MOMO API
             *
             * @param authorization - a string of a valid bearer token
             * @param uuid - a string of a valid UUID version 4
             * @param target - a string of your target environenement
             * @param body - a Object type refer to documentation for full detail
             * @param callback - [Optional] a string of website receiving call back
             *
             * @return `[boolean, any]`
             */
            if ((0, utils_1.isValidBearerToken)(authorization)) {
                this.http.uuidCheker(uuid);
                let callkey = 'X-Callback-Url';
                if (callback === undefined) {
                    callback = "No callback url given";
                    callkey = "No-callback-Url";
                }
                let headers = {
                    'Authorization': authorization,
                    'X-Target-Environment': target,
                    'X-Reference-Id': uuid,
                    'Content-Type': 'application/json',
                    'Ocp-Apim-Subscription-Key': this.subscriptionKey,
                    callkey: callback
                };
                let response = yield this.http.request(new route_1.Route("GET", utils_1.COLLECTION_PATH.get("withdraw").get(route_1.Route.getEnv(this.http.isLive)), this.http.isLive, headers, JSON.stringify(body)));
                if (response.status === 202) {
                    return [true, this.http.getData()];
                }
                else {
                    (0, utils_1.errors_manager)(response, this.http.getData());
                }
            }
            else {
                throw new errors_1.InvalidBearerToken("Invalid Bearer Token Type given");
            }
        });
    }
    isActive(account, accountType, authorization, target) {
        return __awaiter(this, void 0, void 0, function* () {
            /**
             * Method to check if a user is active
             *
             * @param account - a string of the account
             * @param accountType - a string of the account type
             * @param authorization - a string of a valid bearer token
             * @param target - a string of your target environement
             *
             * @return `[boolean, any]`
             */
            if ((0, utils_1.isValidBearerToken)(authorization)) {
                let headers = {
                    'Authorization': authorization,
                    'X-Target-Environment': target,
                    'Ocp-Apim-Subscription-Key': this.subscriptionKey
                };
                let params = {
                    "accountHolderIdType": accountType,
                    "accountHolderId": account
                };
                let response = yield this.http.request(new route_1.Route("GET", utils_1.COLLECTION_PATH.get("is_active").get(route_1.Route.getEnv(this.http.isLive)), this.http.isLive, headers));
                if (response.status === 200) {
                    return [true, this.http.getData()];
                }
                else {
                    (0, utils_1.errors_manager)(response, this.http.getData());
                }
            }
            else {
                throw new errors_1.InvalidBearerToken("Invalid Bearer Token Type given");
            }
        });
    }
}
exports.Collection = Collection;
