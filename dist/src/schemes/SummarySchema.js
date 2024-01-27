"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const mongoose_1 = require("mongoose");
const SummarySchemaModel = new mongoose_1.Schema({
    summary: {
        type: String,
        required: true,
        unique: true
    },
    richtext: {
        type: String,
        required: true,
    },
    skill: {
        type: String,
        required: true,
    },
    category: {
        type: String,
        required: true,
    }
}, {
    collection: 'summary',
    timestamps: { createdAt: true, updatedAt: true }
});
SummarySchemaModel.methods.toJSON = function () {
    const { createdAt, updatedAt, __v, ...Summaries } = this.toObject();
    return Summaries;
};
const SummarySchema = (0, mongoose_1.model)('summary', SummarySchemaModel);
exports.default = SummarySchema;
//# sourceMappingURL=SummarySchema.js.map