"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ReturnError = void 0;
class ReturnError {
    constructor(response) {
        this.statusCode = response.statusCode;
        this.error = response.error;
    }
}
exports.ReturnError = ReturnError;
//# sourceMappingURL=ReturnError.js.map