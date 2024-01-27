"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const mongoose_1 = require("mongoose");
const JobTitleSchemaModel = new mongoose_1.Schema({
    key: {
        type: String,
        required: true,
        unique: true
    },
    value: {
        type: String,
        required: true,
    }
}, {
    collection: 'job_title',
    timestamps: { createdAt: true, updatedAt: true }
});
JobTitleSchemaModel.methods.toJSON = function () {
    const { createdAt, updatedAt, __v, ...JobTitles } = this.toObject();
    return JobTitles;
};
const JobTitleSchema = (0, mongoose_1.model)('job_title', JobTitleSchemaModel);
exports.default = JobTitleSchema;
//# sourceMappingURL=JobTitleSchema.js.map