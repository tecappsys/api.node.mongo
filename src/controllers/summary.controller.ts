import { Request, Response } from "express";
import { processErrorResponse } from "../utils/helpers";
import SummarySchema from "../schemes/SummarySchema";
import SkillSchema from "../schemes/SkillSchema";
import SkillCategorySchema from "../schemes/SkillCategorySchema";
import JobTitleSchema from "../schemes/JobTitleSchema";

export const summary_get_all = async( req: Request , res: Response ) => {
    try {      
        let data = null;
        await Promise.all([SummarySchema.countDocuments(),SummarySchema.find()]).then(results => {
            data = {
                total:results[0],
                entity:results[1]
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

export const summary_put = async( req: Request , res: Response ) => {
    try {     
        const {id,summary,skill,category} = req.body;
        if(id && summary && skill && category){
            let data = null;
            await Promise.all([SummarySchema.findByIdAndUpdate( id, {summary,skill,category} )]).then(results => {
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

export const summary_delete = async( req: Request , res: Response ) => {
    try {     
        const {id} = req.body;
        if(id){
            let data = null;
            await Promise.all([SummarySchema.deleteOne({ _id: id })]).then(results => {
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

export const skill_get_all = async( req: Request , res: Response ) => {
    try {      
        let data = null;
        await Promise.all([SkillSchema.countDocuments(),SkillSchema.find()]).then(results => {
            data = {
                total:results[0],
                entity:results[1]
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

export const skill_category_get_all = async( req: Request , res: Response ) => {
    try {
        let data = null;
        await Promise.all([SkillCategorySchema.countDocuments(),SkillCategorySchema.find()]).then(results => {
            // results is an array of the results of each promise, in order.
            data = {
                total:results[0],
                entity:results[1]
            } ;  
        }).catch(err => {
            processErrorResponse(err);
        });
        return res.json( data ); 
    } catch (fail) {
        processErrorResponse(fail);
    }    
}

export const skill_category_by_skill = async( req: Request , res: Response ) => {
    try {
        const {skill} = req.params;
        if(skill){
            let data = null;
            await Promise.all([SkillCategorySchema.countDocuments({skill:skill}),SkillCategorySchema.find({skill:skill})]).then(results => {
                // results is an array of the results of each promise, in order.
                data = {
                    total:results[0],
                    entity:results[1]
                } ;  
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

export const job_title_get_all = async( req: Request , res: Response ) => {
    try {
        let data = null;
        await Promise.all([JobTitleSchema.countDocuments(),JobTitleSchema.find()]).then(results => {
            // results is an array of the results of each promise, in order.
            data = {
                total:results[0],
                entity:results[1]
            } ;  
        }).catch(err => {
            processErrorResponse(err);
        });
        return res.json( data ); 
    } catch (fail) {
        processErrorResponse(fail);
    }    
}