"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const mongoose_1 = require("mongoose");
const SkillSchemaModel = new mongoose_1.Schema({
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
    collection: 'skill',
    timestamps: { createdAt: true, updatedAt: true }
});
SkillSchemaModel.methods.toJSON = function () {
    const { createdAt, updatedAt, __v, ...Skills } = this.toObject();
    return Skills;
};
const SkillSchema = (0, mongoose_1.model)('skill', SkillSchemaModel);
exports.default = SkillSchema;
//# sourceMappingURL=SkillSchema.js.map