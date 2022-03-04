"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class ErrorCatcher {
    constructor(message, httpStatusCode) {
        this.message = message;
        this.httpStatusCode = httpStatusCode;
    }
}
exports.default = ErrorCatcher;
