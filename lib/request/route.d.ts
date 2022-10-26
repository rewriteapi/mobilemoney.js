export declare class Route {
    method: string;
    path: string;
    production: boolean;
    headers: any;
    body: any;
    url: string;
    constructor(method: string, path: string, production: boolean, headers: any, body?: any);
    static getEnv(production: boolean): string;
    static getBase(environement: string): string;
}
