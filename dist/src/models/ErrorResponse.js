"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ErrorResponse = void 0;
class ErrorResponse {
    constructor(statusCode, message, errors = [], isGenerics = false) {
        this.statusCode = statusCode;
        this.message = message;
        this.errors = errors;
        this.isGenerics = isGenerics;
    }
}
exports.ErrorResponse = ErrorResponse;
//# sourceMappingURL=ErrorResponse.js.map