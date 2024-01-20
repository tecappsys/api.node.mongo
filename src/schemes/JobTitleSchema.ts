
import { Schema, model } from 'mongoose';

const JobTitleSchemaModel = new Schema(
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
        collection: 'job_title',
        timestamps: { createdAt: true, updatedAt: false }
    }
);

JobTitleSchemaModel.methods.toJSON = function() {
    const { ...JobTitles  } = this.toObject();
    return JobTitles;
}

const JobTitleSchema = model( 'job_title', JobTitleSchemaModel );

export default JobTitleSchema;
