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
exports.Disbursements = void 0;
const errors_1 = require("../errors/errors");
const utils_1 = require("../utils/utils");
const route_1 = require("./route");
class Disbursements {
    /**
     * Disbursements class managing Disbursement product
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
             * @return `[boolean, Object]
             */
            if ((0, utils_1.isValidBasicToken)(authorization)) {
                let headers = { "Authorization": authorization, "Ocp-Apim-Subscription-Key": this.subscriptionKey };
                let response = yield this.http.request(new route_1.Route('POST', utils_1.DISBURSEMENT_PATH.get('create_access_token').get(route_1.Route.getEnv(this.http.isLive)), this.http.isLive, headers));
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
                let headers = { 'Authorization': authorization, 'X-Target-Environment': target, 'Ocp-Apim-Subscription-Key': this.subscriptionKey };
                let response = yield this.http.request(new route_1.Route("GET", utils_1.DISBURSEMENT_PATH.get('get_account_balance').get(route_1.Route.getEnv(this.http.isLive)), this.http.isLive, headers));
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
                let headers = { 'Authorization': authorization, 'X-Target-Environment': target, 'Ocp-Apim-Subscription-Key': this.subscriptionKey };
                let params = {
                    "currency": currency
                };
                let response = yield this.http.request(new route_1.Route("GET", (0, utils_1.replace)(utils_1.DISBURSEMENT_PATH.get('get_account_balance_in').get(route_1.Route.getEnv(this.http.isLive)), params), this.http.isLive, headers));
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
                let headers = { 'Authorization': authorization, 'X-Target-Environment': target, 'Ocp-Apim-Subscription-Key': this.subscriptionKey };
                let params = {
                    "MSISDN": msisdn
                };
                let response = yield this.http.request(new route_1.Route("GET", (0, utils_1.replace)(utils_1.DISBURSEMENT_PATH.get('get_basic_info').get(route_1.Route.getEnv(this.http.isLive)), params), this.http.isLive, headers));
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
                let headers = { 'Authorization': authorization, 'X-Target-Environment': target, 'Ocp-Apim-Subscription-Key': this.subscriptionKey };
                let response = yield this.http.request(new route_1.Route("GET", utils_1.DISBURSEMENT_PATH.get('get_user_info').get(route_1.Route.getEnv(this.http.isLive)), this.http.isLive, headers));
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
    getDepositStatus(uuid, authorization, target) {
        return __awaiter(this, void 0, void 0, function* () {
            /**
             * Method to get a deposit status
             *
             * @param uuid - a string of valid UUID version 4
             * @param authorization - a string of valid bearer token
             * @param target - a string of your target environement
             *
             * @return `[boolean, any]`
             */
            if ((0, utils_1.isValidBearerToken)(authorization)) {
                this.http.uuidCheker(uuid);
                let headers = { 'Authorization': authorization, 'X-Target-Environment': target, 'Ocp-Apim-Subscription-Key': this.subscriptionKey };
                let params = {
                    "referenceId": uuid
                };
                let response = yield this.http.request(new route_1.Route("GET", (0, utils_1.replace)(utils_1.DISBURSEMENT_PATH.get('get_tranfer_status').get(route_1.Route.getEnv(this.http.isLive)), params), this.http.isLive, headers));
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
    deposit(uuid, authorization, target, body, urlcallback) {
        return __awaiter(this, void 0, void 0, function* () {
            /**
             * Method to deposit money
             *
             * @remarks
             * uuid should be different for each request
             * The Library is using deposit V2 from MTN MOMO API
             *
             * @param uuid - a string of valid UUID version 4
             * @param authorization - a string of valid bearer token
             * @param target - a string of your target environement
             * @param body - a Object type refer to documentation for full detail
             * @param urlCallback - [Optional] a string of website receiving call back
             *
             * @return `[boolean, any]`
             */
            if ((0, utils_1.isValidBearerToken)(authorization)) {
                this.http.uuidCheker(uuid);
                let callkey = 'X-Callback-Url';
                if (urlcallback === undefined) {
                    urlcallback = "No callback url given";
                    callkey = "No-callback-Url";
                }
                let headers = {
                    'Authorization': authorization,
                    'X-Target-Environment': target,
                    'Ocp-Apim-Subscription-Key': this.subscriptionKey,
                    'X-Reference-Id': uuid,
                    'Content-Type': 'application/json',
                    callkey: urlcallback
                };
                let response = yield this.http.request(new route_1.Route("POST", utils_1.DISBURSEMENT_PATH.get('deposit').get(route_1.Route.getEnv(this.http.isLive)), this.http.isLive, headers, JSON.stringify(body)));
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
    transfer(uuid, authorization, target, body, urlcallback) {
        return __awaiter(this, void 0, void 0, function* () {
            /**
             * Method to transfer money to a payee acccount
             *
             * @remarks
             * uuid should be different for each request
             *
             * @param uuid - a string of valid UUID version 4
             * @param  authorization - a string of a valid bearer token
             * @param target - a string of your target environement
             * @param body - a Object type refer to documentation for full detail
             * @param urlCallback - [Optional] a string of website receiving call back
             *
             * @retun `[boolean, any]`
             */
            if ((0, utils_1.isValidBearerToken)(authorization)) {
                this.http.uuidCheker(uuid);
                let callkey = 'X-Callback-Url';
                if (urlcallback === undefined) {
                    urlcallback = "No callback url given";
                    callkey = "No-callback-Url";
                }
                let headers = {
                    'Authorization': authorization,
                    'X-Target-Environment': target,
                    'Ocp-Apim-Subscription-Key': this.subscriptionKey,
                    'X-Reference-Id': uuid,
                    'Content-Type': 'application/json',
                    callkey: urlcallback
                };
                let response = yield this.http.request(new route_1.Route("POST", utils_1.DISBURSEMENT_PATH.get('transfer').get(route_1.Route.getEnv(this.http.isLive)), this.http.isLive, headers, JSON.stringify(body)));
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
    refund(uuid, authorization, target, body, urlcallback) {
        return __awaiter(this, void 0, void 0, function* () {
            /**
             * Method to refund money to a user
             *
             * @remarks
             * The library is using refund V2 from MTN MOMO API
             *
             * @param uuid -  a string of a valid UUID version 4
             * @param authorization - a string of a valid bearer token
             * @param target - a string of your target environement
             * @param body - a Object type refer to documentation for full detail
             * @param urlcallback - [Optional] a string of website receiving call back
             *
             * @return `[boolean, any]`
             */
            if ((0, utils_1.isValidBearerToken)(authorization)) {
                this.http.uuidCheker(uuid);
                let callkey = 'X-Callback-Url';
                if (urlcallback === undefined) {
                    urlcallback = "No callback url given";
                    callkey = "No-callback-Url";
                }
                let headers = {
                    'Authorization': authorization,
                    'X-Target-Environment': target,
                    'Ocp-Apim-Subscription-Key': this.subscriptionKey,
                    'X-Reference-Id': uuid,
                    'Content-Type': 'application/json',
                    callkey: urlcallback
                };
                let response = yield this.http.request(new route_1.Route("POST", utils_1.DISBURSEMENT_PATH.get('refund').get(route_1.Route.getEnv(this.http.isLive)), this.http.isLive, headers, JSON.stringify(body)));
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
    getTransferStatus(uuid, authorization, target) {
        return __awaiter(this, void 0, void 0, function* () {
            /**
             * Method to get a Tranfer status
             *
             * @param authorization - a string of valid bearer token
             * @param uuid - a string of valid UUID version 4 used for withdrawal request
             * @param target - a string of your target environement
             *
             * @return `[boolean, any]`
             */
            if ((0, utils_1.isValidBearerToken)(authorization)) {
                this.http.uuidCheker(uuid);
                let headers = { 'Authorization': authorization, 'X-Target-Environment': target, 'Ocp-Apim-Subscription-Key': this.subscriptionKey };
                let params = {
                    "referenceId": uuid
                };
                let response = yield this.http.request(new route_1.Route("GET", (0, utils_1.replace)(utils_1.DISBURSEMENT_PATH.get("get_transfer_status").get(route_1.Route.getEnv(this.http.isLive)), params), this.http.isLive, headers));
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
    getRefundStatus(uuid, authorization, target) {
        return __awaiter(this, void 0, void 0, function* () {
            /**
             * Method to get a refund status
             *
             * @param authorization - a string of valid bearer token
             * @param uuid - a string of valid UUID version 4 used for withdrawal request
             * @param target - a string of your target environement
             *
             * @return `[boolean, any]`
             */
            if ((0, utils_1.isValidBearerToken)(authorization)) {
                this.http.uuidCheker(uuid);
                let headers = { 'Authorization': authorization, 'X-Target-Environment': target, 'Ocp-Apim-Subscription-Key': this.subscriptionKey };
                let params = {
                    "referenceId": uuid
                };
                let response = yield this.http.request(new route_1.Route("GET", (0, utils_1.replace)(utils_1.DISBURSEMENT_PATH.get("get_refund_status").get(route_1.Route.getEnv(this.http.isLive)), params), this.http.isLive, headers));
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
    isActive(account, authorization, accountType, target) {
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
                let headers = { 'Authorization': authorization, 'X-Target-Environment': target, 'Ocp-Apim-Subscription-Key': this.subscriptionKey };
                let params = {
                    "accountHolderId": account,
                    "accountHolderIdType": accountType
                };
                let response = yield this.http.request(new route_1.Route("GET", (0, utils_1.replace)(utils_1.DISBURSEMENT_PATH.get('is_active').get(route_1.Route.getEnv(this.http.isLive)), params), this.http.isLive, headers));
            }
            else {
                throw new errors_1.InvalidBearerToken("Invalid Bearer Token Type given");
            }
        });
    }
}
exports.Disbursements = Disbursements;
