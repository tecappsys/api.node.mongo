"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.GenericResponse = void 0;
class GenericResponse {
    constructor(response) {
        this.statusCode = response.statusCode;
        this.data = response.data ? response.data : null;
        this.errors = response.errors ? response.errors : [];
        this.isGenerics = response.isGenerics ? response.isGenerics : true;
    }
}
exports.GenericResponse = GenericResponse;
//# sourceMappingURL=GenericResponse.js.map