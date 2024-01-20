"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const mongoose_1 = require("mongoose");
const SkillSCategorychemaModel = new mongoose_1.Schema({
    skill: {
        type: String,
        required: true,
    },
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
    collection: 'skillcategory',
    timestamps: { createdAt: true, updatedAt: false }
});
SkillSCategorychemaModel.methods.toJSON = function () {
    const { ...SkillCategories } = this.toObject();
    return SkillCategories;
};
const SkillCategorySchema = (0, mongoose_1.model)('skillcategory', SkillSCategorychemaModel);
exports.default = SkillCategorySchema;
//# sourceMappingURL=SkillCategorySchema%20copy.js.map