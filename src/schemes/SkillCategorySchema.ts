
import { Schema, model } from 'mongoose';

const SkillSCategorychemaModel = new Schema(
    {
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
    },
    {
        collection: 'skill_category',
        timestamps: { createdAt: true, updatedAt: false }
    }
);

SkillSCategorychemaModel.methods.toJSON = function() {
    const { ...SkillCategories  } = this.toObject();
    return SkillCategories;
}

const SkillCategorySchema = model( 'skill_category', SkillSCategorychemaModel );

export default SkillCategorySchema;