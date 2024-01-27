"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const tslib_1 = require("tslib");
const mongoose_1 = require("mongoose");
const SummarySchema_1 = tslib_1.__importDefault(require("./SummarySchema"));
const _SummarySchema = new mongoose_1.Schema({
    summary: {
        type: String,
        required: true,
        unique: true
    },
    skill: {
        type: String,
        required: true,
    },
    category: {
        type: String,
        required: true,
    }
}, { _id: true });
const ExperienceSchemaModel = new mongoose_1.Schema({
    country: {
        type: String,
        required: true,
        unique: true
    },
    jobTitle: {
        type: String,
        required: true,
    },
    employer: {
        type: String,
        required: true,
    },
    startDate: {
        type: String,
        required: true,
    },
    endDate: {
        type: String,
        required: true,
    },
    summary: [
        { type: mongoose_1.Schema.Types.Mixed, ref: SummarySchema_1.default }
    ]
}, {
    collection: 'experience',
    timestamps: { createdAt: true, updatedAt: true }
});
ExperienceSchemaModel.methods.toJSON = function () {
    const { createdAt, updatedAt, __v, ...Experiences } = this.toObject();
    return Experiences;
};
const ExperienceSchema = (0, mongoose_1.model)('experience', ExperienceSchemaModel);
exports.default = ExperienceSchema;
//# sourceMappingURL=ExperienceSchema.js.map