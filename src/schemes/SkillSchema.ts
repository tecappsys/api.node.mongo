
import { Schema, model } from 'mongoose';

const SkillSchemaModel = new Schema(
    {
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
        collection: 'skill',
        timestamps: { createdAt: true, updatedAt: false }
    }
);

SkillSchemaModel.methods.toJSON = function() {
    const { ...Skills  } = this.toObject();
    return Skills;
}

const SkillSchema = model( 'skill', SkillSchemaModel );

export default SkillSchema;
