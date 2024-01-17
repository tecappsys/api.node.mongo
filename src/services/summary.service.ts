import { genericLog } from "../utils/helpers";
import { ReturnError } from "../models/ReturnError";
import SummarySchema from "../schemes/SummarySchema";

export const summary_created = async(payload:any) => {
    try {
        return await new SummarySchema({...payload}).save();     
    } catch (err) {
        genericLog({title:'SUMMARY_SERVICES',subtitle:'CATCH summary_created',message:err});
        throw new ReturnError({statusCode:500,error:'error summary_created'});
    }
}

export const summary_getAll = async() => {
    try {
        return await SummarySchema.find();     
    } catch (err) {
        genericLog({title:'SUMMARY_SERVICES',subtitle:'CATCH summary_getAll',message:err});
        throw new ReturnError({statusCode:500,error:'error summary_getAll'});
    }
}