"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Route = void 0;
class Route {
    constructor(method, path, production, headers, body = null) {
        this.method = method;
        this.path = path;
        this.production = production;
        this.headers = headers;
        this.body = body;
        this.method = method;
        this.path = path;
        this.production = production;
        this.headers = headers;
        this.body = body;
        this.url = Route.getBase(Route.getEnv(this.production)) + this.path;
    }
    static getEnv(production) {
        /**
         * Method in charge to return the environement where we are running
         * @param production - a boolean true if we are in production or false if we are in test environement
         * @returns The environement `live` if production `sandbox` if test
         */
        let ENV = new Map([
            [true, "live"],
            [false, "sandbox"]
        ]);
        return ENV.get(production);
    }
    static getBase(environement) {
        /**
         * Method in charge to return the base link regarding for each environement we are running for
         * @remarks
         * It's highly recommend to use Route.getEnv() return as param to avoid any Error
         *
         * @param environement - a string of the environement
         * @returns Base link
         */
        let BASE = new Map([
            ["sandbox", "https://sandbox.momodeveloper.mtn.com"],
            ["live", "https://proxy.momoapi.mtn.com"]
        ]);
        return BASE.get(environement);
    }
}
exports.Route = Route;
