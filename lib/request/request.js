"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Request = void 0;
const http_1 = require("./http");
const collection_1 = require("./collection");
const disbursements_1 = require("./disbursements");
class Request {
    constructor() {
        this._http = new http_1.HTTPClient();
    }
    http() {
        return this._http;
    }
    collection(subscriptionKey, http) {
        this._collection = new collection_1.Collection(http, subscriptionKey);
        return this._collection;
    }
    disbursements(subscriptionKey, http) {
        this._disbursements = new disbursements_1.Disbursements(http, subscriptionKey);
        return this._disbursements;
    }
}
exports.Request = Request;
