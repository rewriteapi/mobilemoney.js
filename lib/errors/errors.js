"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.InvalidBearerToken = exports.InvalidBasicToken = exports.InvalidUniqueIDVersion = exports.Conflict = exports.NotFound = exports.InvalidData = exports.MomoServerError = exports.Unauthorized = exports.HTTPError = exports.MomoError = void 0;
class MomoError extends Error {
}
exports.MomoError = MomoError;
class HTTPError extends MomoError {
}
exports.HTTPError = HTTPError;
class Unauthorized extends HTTPError {
}
exports.Unauthorized = Unauthorized;
class MomoServerError extends HTTPError {
}
exports.MomoServerError = MomoServerError;
class InvalidData extends HTTPError {
}
exports.InvalidData = InvalidData;
class NotFound extends HTTPError {
}
exports.NotFound = NotFound;
class Conflict extends HTTPError {
}
exports.Conflict = Conflict;
class InvalidUniqueIDVersion extends Error {
}
exports.InvalidUniqueIDVersion = InvalidUniqueIDVersion;
class InvalidBasicToken extends Error {
}
exports.InvalidBasicToken = InvalidBasicToken;
class InvalidBearerToken extends Error {
}
exports.InvalidBearerToken = InvalidBearerToken;
