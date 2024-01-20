"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.summary_getAll = exports.summary_created = void 0;
const tslib_1 = require("tslib");
const helpers_1 = require("../utils/helpers");
const ReturnError_1 = require("../models/ReturnError");
const SummarySchema_1 = tslib_1.__importDefault(require("../schemes/SummarySchema"));
const summary_created = async (payload) => {
    try {
        return await new SummarySchema_1.default({ ...payload }).save();
    }
    catch (err) {
        (0, helpers_1.genericLog)({ title: 'SUMMARY_SERVICES', subtitle: 'CATCH summary_created', message: err });
        throw new ReturnError_1.ReturnError({ statusCode: 500, error: 'error summary_created' });
    }
};
exports.summary_created = summary_created;
const summary_getAll = async () => {
    try {
        return await SummarySchema_1.default.find();
    }
    catch (err) {
        (0, helpers_1.genericLog)({ title: 'SUMMARY_SERVICES', subtitle: 'CATCH summary_getAll', message: err });
        throw new ReturnError_1.ReturnError({ statusCode: 500, error: 'error summary_getAll' });
    }
};
exports.summary_getAll = summary_getAll;
//# sourceMappingURL=summary.service.js.map