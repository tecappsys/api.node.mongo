
import { Schema, model } from 'mongoose';

const SummarySchemaModel = new Schema(
    {
        summary: {
            type: String,
            required: true,
            unique: true
        },        
        richtext: {
            type: String,
            required: true,
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
        timestamps: { createdAt: true, updatedAt: true }
    }
);

SummarySchemaModel.methods.toJSON = function() {
    const { createdAt,updatedAt,__v,...Summaries  } = this.toObject();
    return Summaries;
}

const SummarySchema = model( 'summary', SummarySchemaModel );

export default SummarySchema;
