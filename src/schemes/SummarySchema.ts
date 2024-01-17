
import { Schema, model } from 'mongoose';

const SummarySchemaModel = new Schema(
    {
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
    },
    {
        collection: 'summary',
        timestamps: { createdAt: true, updatedAt: false }
    }
);

SummarySchemaModel.methods.toJSON = function() {
    const { ...Summaries  } = this.toObject();
    return Summaries;
}

const SummarySchema = model( 'summary', SummarySchemaModel );

export default SummarySchema;
