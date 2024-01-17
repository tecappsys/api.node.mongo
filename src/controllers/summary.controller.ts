import { Request, Response } from "express";
import { processErrorResponse } from "../utils/helpers";
import SummarySchema from "../schemes/SummarySchema";

export const summary_get_all = async( req: Request , res: Response ) => {
    try {      
        let data = null;
        await Promise.all([SummarySchema.countDocuments(),SummarySchema.find()]).then(results => {
            data = {
                total:results[0],
                summaries:results[1]
            } ;             
        })
        .catch(err => { 
            processErrorResponse(err);
        });
        return res.json( data );
    } catch (fail) {
        processErrorResponse(fail);
    }    
}

export const summary_post = async( req: Request , res: Response ) => {
    try {     
        const {summary,skill,category} = req.body;
        if(summary && skill && category){
            const summarySchema = new SummarySchema({summary,skill,category});
            let data = null;
            await Promise.all([summarySchema.save()]).then(results => {
                // results is an array of the results of each promise, in order.
                data = { results: results[0] };
            }).catch(err => {
                processErrorResponse(err);
            });
            return res.json( data );
        }else{
            res.json(null);
        }
    } catch (fail) {
        processErrorResponse(fail);
    }    
}
