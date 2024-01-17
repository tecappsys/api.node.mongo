import mongoose from 'mongoose';
import { genericLog } from '../utils/helpers';

export const mongo = async() => {
    try {
        await mongoose.connect(process.env.MONGODB_CNN);

        genericLog({title:'MONGO_DB',message:'MONGO DB Online'});

    } catch (error) {
        genericLog({title:'MONGO_DB',message:error});
        throw new Error('ERROR START MONGO DB');
    }
}

