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
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.HTTPClient = void 0;
const route_1 = require("./route");
const node_fetch_1 = __importDefault(require("node-fetch"));
const utils_1 = require("../utils/utils");
const errors_1 = require("../errors/errors");
class HTTPClient {
    constructor() {
        /**
         * HTTPClient managing all HTTP request
         */
        this.userAgent = "MobileMoney.js Repository : https://github.com/rewriteapi/mobilemoney.js ";
        this.isLive = true;
    }
    fillConfig(route) {
        route.headers['User-Agent'] = this.userAgent;
        let config = {
            url: route.url,
            headers: route.headers,
            body: route.body,
            method: route.method
        };
        return config;
    }
    isSandbox() {
        /**
         * Method to switch from live environement to sandbox env
         * @param  null
         * @returns null
         */
        this.isLive = false;
    }
    getData() {
        return this.data;
    }
    request(route) {
        return __awaiter(this, void 0, void 0, function* () {
            let config = this.fillConfig(route);
            let response = yield (0, node_fetch_1.default)(config.url, { method: config.method, body: config.body, headers: config.headers });
            this.data = yield (0, utils_1.dataManager)(response);
            return response;
        });
    }
    uuidCheker(uuid) {
        if (!(0, utils_1.isValideId4)(uuid)) {
            throw new errors_1.InvalidUniqueIDVersion("Invalid UUID version 4");
        }
    }
    createApiUser(uuid, subscriptionKey, urlcallback) {
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
            this.uuidCheker(uuid);
            if (!urlcallback) {
                urlcallback = "string";
            }
            let headers = {
                "Ocp-Apim-Subscription-Key": subscriptionKey,
                "X-Reference-Id": uuid,
                "Content-Type": "application/json"
            };
            let body = JSON.stringify({
                "providerCallbackHost": urlcallback
            });
            let response = yield this.request(new route_1.Route("POST", utils_1.PATH.get('create_apiuser').get(route_1.Route.getEnv(this.isLive)), this.isLive, headers, body));
            if (response.status == 201) {
                console.log('create worked');
                return [true, this.data];
            }
            else {
                (0, utils_1.errors_manager)(response, this.data);
            }
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
            this.uuidCheker(uuid);
            let headers = {
                "Ocp-Apim-Subscription-Key": subscriptionKey
            };
            let params = { 'uuid': uuid };
            let response = yield this.request(new route_1.Route("GET", (0, utils_1.replace)(utils_1.PATH.get('get_apiuser').get(route_1.Route.getEnv(this.isLive)), params), this.isLive, headers));
            if (response.status === 200) {
                return [true, this.data];
            }
            else {
                (0, utils_1.errors_manager)(response, this.data);
            }
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
            this.uuidCheker(uuid);
            let headers = {
                "Ocp-Apim-Subscription-Key": subscriptionKey
            };
            let params = {
                "apiuser": uuid
            };
            let response = yield this.request(new route_1.Route("POST", (0, utils_1.replace)(utils_1.PATH.get("create_apikey").get(route_1.Route.getEnv(this.isLive)), params), this.isLive, headers));
            if (response.status === 201) {
                return [true, this.data];
            }
            else {
                (0, utils_1.errors_manager)(response, this.data);
            }
        });
    }
}
exports.HTTPClient = HTTPClient;
