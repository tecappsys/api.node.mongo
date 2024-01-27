
import { Schema, model } from 'mongoose';
import SummarySchema from './SummarySchema';

const _SummarySchema = new Schema({
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
},{ _id : true });

const ExperienceSchemaModel = new Schema(
    {
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
        summary:[ 
            { type: Schema.Types.Mixed, ref: SummarySchema }
        ]
    },
    {
        collection: 'experience',
        timestamps: { createdAt: true, updatedAt: true }
    }
);

ExperienceSchemaModel.methods.toJSON = function() {
    const { createdAt,updatedAt,__v,...Experiences  } = this.toObject();
    return Experiences;
}

const ExperienceSchema = model( 'experience', ExperienceSchemaModel );

export default ExperienceSchema;
