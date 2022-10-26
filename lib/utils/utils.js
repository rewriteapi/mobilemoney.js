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
exports.DISBURSEMENT_PATH = exports.COLLECTION_PATH = exports.PATH = exports.replace = exports.isValidBearerToken = exports.isValidBasicToken = exports.dataManager = exports.errors_manager = exports.isValideId4 = exports.getReferenceId = void 0;
const uuid_1 = require("uuid");
const errors_1 = require("../errors/errors");
function getReferenceId() {
    let uniqueId = (0, uuid_1.v4)();
    return uniqueId;
}
exports.getReferenceId = getReferenceId;
function isValideId4(uuid) {
    return (0, uuid_1.validate)(uuid) && (0, uuid_1.version)(uuid) === 4;
}
exports.isValideId4 = isValideId4;
function errors_manager(response, data) {
    console.log(data);
    let res = JSON.stringify(data);
    switch (response.status) {
        case 500:
            throw new errors_1.MomoServerError("A MoMo Server Error occured with : " + res);
        case 400:
            throw new errors_1.InvalidData("Invalid data Error occured : " + res);
        case 401:
            throw new errors_1.Unauthorized("Unauthorized Error occured : " + res);
        case 404:
            throw new errors_1.NotFound("Not Found Error occured : " + res);
        case 409:
            throw new errors_1.Conflict("A Conflict Error occured : " + res);
        default:
            throw new errors_1.HTTPError(`HTTP Error occured, STATUS : ${response.status} ; Message : ${res}`);
    }
}
exports.errors_manager = errors_manager;
function dataManager(response) {
    return __awaiter(this, void 0, void 0, function* () {
        let dataText = yield response.text();
        if (response.headers.get('Content-Type') === 'application/json' || response.headers.get('content-type') === 'application/json;charset=utf-8') {
            try {
                let dataJson = JSON.parse(dataText);
                dataJson.name;
                return dataJson;
            }
            catch (error) {
                console.log('Json Parse Error Occurred : ' + error);
                //this.data = await response.text()
            }
        }
        else {
            return dataText;
        }
    });
}
exports.dataManager = dataManager;
function isValidBasicToken(token) {
    return token.lastIndexOf("Basic ", 0) === 0;
}
exports.isValidBasicToken = isValidBasicToken;
function isValidBearerToken(token) {
    return token.lastIndexOf("Bearer ", 0) === 0;
}
exports.isValidBearerToken = isValidBearerToken;
function replace(format, object) {
    var val = format;
    var entries = Object.entries(object);
    entries.forEach((para) => {
        var find = '{' + para[0] + '}';
        var regExp = new RegExp(find, 'g');
        val = val.replace(regExp, para[1]);
    });
    return val;
}
exports.replace = replace;
exports.PATH = new Map([
    ["create_apiuser", new Map([["sandbox", "/v1_0/apiuser"], ["live", "/provisioning/v1_0/apiuser"]])],
    ["get_apiuser", new Map([["sandbox", "/v1_0/apiuser/{uuid}"], ["live", ""]])],
    ["create_apikey", new Map([["sandbox", "/v1_0/apiuser/{apiuser}/apikey"], ["live", ""]])]
]);
exports.COLLECTION_PATH = new Map([
    ["create_access_token", new Map([["sandbox", "/collection/token/"], ["live", "/collection/token/"]])],
    ["get_account_balance", new Map([["sandbox", "/collection/v1_0/account/balance"], ["live", "/collection/v1_0/account/balance"]])],
    ["get_account_balance_in", new Map([["sandbox", "/collection/v1_0/account/balance/{currency}"], ["live", "/collection/v1_0/account/balance/{currency}"]])],
    ["get_basic_info", new Map([["sandbox", "/collection/v1_0/accountholder/msisdn/{MSISDN}/basicuserinfo"], ["live", "/collection/v1_0/accountholder/msisdn/{MSISDN}/basicuserinfo"]])],
    ["get_user_info", new Map([["sandbox", "/collection/oauth2/v1_0/userinfo"], ["live", "/collection/oauth2/v1_0/userinfo"]])],
    ["request_to_pay", new Map([["sandbox", "/collection/v1_0/requesttopay"], ["live", "/collection/v1_0/requesttopay"]])],
    ["withdraw_status", new Map([["sandbox", "/collection/v1_0/requesttowithdraw/{referenceId}"], ["live", "/collection/v1_0/requesttowithdraw/{referenceId}"]])],
    ["withdraw", new Map([["sandbox", "/collection/v2_0/requesttowithdraw"], ["live", "/collection/v2_0/requesttowithdraw"]])],
    ["is_active", new Map([["sandbox", "/collection/v1_0/accountholder/{accountHolderIdType}/{accountHolderId}/active"], ["live", "/collection/v1_0/accountholder/{accountHolderIdType}/{accountHolderId}/active"]])]
]);
exports.DISBURSEMENT_PATH = new Map([
    ["create_access_token", new Map([["sandbox", "/disbursement/token/"], ["live", "/disbursement/token/"]])],
    ["get_account_balance", new Map([["sandbox", "/disbursement/v1_0/account/balance"], ["live", "/disbursement/v1_0/account/balance"]])],
    ["get_account_balance_in", new Map([["sandbox", "/disbursement/v1_0/account/balance/{currency}"], ["live", "/disbursement/v1_0/account/balance/{currency}"]])],
    ["get_basic_info", new Map([["sandbox", "/disbursement/v1_0/accountholder/msisdn/{MSISDN}/basicuserinfo"], ["live", "/disbursement/v1_0/accountholder/msisdn/{MSISDN}/basicuserinfo"]])],
    ["get_user_info", new Map([["sandbox", "/disbursement/oauth2/v1_0/userinfo"], ["live", "/disbursement/oauth2/v1_0/userinfo"]])],
    ["get_tranfer_status", new Map([["sandbox", "/disbursement/v1_0/transfer/{referenceId}"], ["live", "/disbursement/v1_0/transfer/{referenceId}"]])],
    ["deposit", new Map([["sandbox", "/disbursement/v2_0/deposit"], ["live", "/disbursement/v2_0/deposit"]])],
    ["transfer", new Map([["sandbox", "/disbursement/v1_0/transfer"], ["live", "/disbursement/v1_0/transfer"]])],
    ["refund", new Map([["sandbox", "/disbursement/v2_0/refund"], ["live", "/disbursement/v2_0/refund"]])],
    ["get_transfer_status", new Map([["sandbox", "/disbursement/v1_0/transfer/{referenceId}"], ["live", "/disbursement/v1_0/transfer/{referenceId}"]])],
    ["get_refund_status", new Map([["sandbox", "/disbursement/v1_0/refund/{referenceId}"], ["live", "/disbursement/v1_0/refund/{referenceId}"]])],
    ["is_active", new Map([["sandbox", "/disbursement/v1_0/accountholder/{accountHolderIdType}/{accountHolderId}/active"], ["live", "/disbursement/v1_0/accountholder/{accountHolderIdType}/{accountHolderId}/active"]])]
]);
