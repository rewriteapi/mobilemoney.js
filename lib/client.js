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
exports.Client = void 0;
const request_1 = require("./request/request");
const utils_1 = require("./utils/utils");
class Client {
    constructor() {
        this.request = new request_1.Request();
        this.http = this.request.http();
    }
    collection(subscriptionKey) {
        /**
         * Method to get the collection client
         *
         * @param subscriptionKey - a string of your collection product
         *
         * @returns `Collection` class representing collection product
         */
        return this.request.collection(subscriptionKey, this.http);
    }
    disbursements(subscriptionKey) {
        /**
         * Method to get the disbursements client
         *
         * @param subscriptionKey - a string of your disbursement product
         *
         * @returns `Disbursements` class representing disbursement product
         */
        return this.request.disbursements(subscriptionKey, this.http);
    }
    createApiUser(uuid, subscriptionKey, urlCallback) {
        return __awaiter(this, void 0, void 0, function* () {
            /**
             * Method to create API USER on sandbox environement
             *
             * @param uuid - a string representing X-Reference-Id
             * @param subscriptionKey - a string of your credential
             * @param urlCallback - [optional] a string of your website receiving call back
             *
             * @return `[boolean, string]` -  `boolean` is true if it work well
             */
            return yield this.http.createApiUser(uuid, subscriptionKey, urlCallback);
        });
    }
    getApiUser(uuid, subscriptionKey) {
        return __awaiter(this, void 0, void 0, function* () {
            /**
             * Method to get API USER on sandbox environement
             *
             * @param uuid - a string representing X-Reference-Id
             * @param subscriptionKey - a string of your credential
             *
             * @return `[boolean, Object]` -  `boolean` is true if it work well
             */
            return yield this.http.getApiUser(uuid, subscriptionKey);
        });
    }
    createApiKey(uuid, subscriptionKey) {
        return __awaiter(this, void 0, void 0, function* () {
            /**
             * Method to create API KEY on sandbox environement
             *
             * @param uuid - a string representing X-Reference-Id
             * @param subscriptionKey - a string of your credential
             *
             * @return `[boolean, Object]` -  `boolean` is true if it work well
             */
            return yield this.http.createApiKey(uuid, subscriptionKey);
        });
    }
    getReferenceId() {
        /**
         * Method to create UUID version 4
         *
         * @param null
         *
         * @return `UUID` version 4
         */
        return (0, utils_1.getReferenceId)();
    }
    isSandbox() {
        /**
         * Method to switch to sandbox environement
         *
         * @remarks
         * If you're running in sandbox, make sure to call this method firstly
         * before any type of request
         *
         * @param null
         *
         * @return `null`
         */
        this.http.isSandbox();
    }
    basicToken(apiUser, apiKey) {
        /**
         * Method to Create a basic token from API USER & API KEY
         *
         * @param apiUser - string of your apiUser
         * @param apikey - string of your apiKey
         *
         * @return A valid `Basic Token`
         */
        let data = `${apiUser}:${apiKey}`;
        let encoded = Buffer.from(data, 'utf8').toString('base64');
        return `Basic ${encoded}`;
    }
    bearerToken(token) {
        /**
         * Method to create a bearer token from access token
         *
         * @param token - a string of your access token
         *
         * @return A valid `Bearer Token`
         */
        return `Bearer ${token}`;
    }
}
exports.Client = Client;
