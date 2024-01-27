
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
        timestamps: { createdAt: true, updatedAt: true }
    }
);

SkillSchemaModel.methods.toJSON = function() {
    const { createdAt,updatedAt,__v,...Skills  } = this.toObject();
    return Skills;
}

const SkillSchema = model( 'skill', SkillSchemaModel );

export default SkillSchema;
