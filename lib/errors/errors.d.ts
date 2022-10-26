export declare class MomoError extends Error {
}
export declare class HTTPError extends MomoError {
}
export declare class Unauthorized extends HTTPError {
}
export declare class MomoServerError extends HTTPError {
}
export declare class InvalidData extends HTTPError {
}
export declare class NotFound extends HTTPError {
}
export declare class Conflict extends HTTPError {
}
export declare class InvalidUniqueIDVersion extends Error {
}
export declare class InvalidBasicToken extends Error {
}
export declare class InvalidBearerToken extends Error {
}
