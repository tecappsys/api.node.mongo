import { ReturnErrorInterface } from "../shared/interfaces/returnError.interface";

export class ReturnError{
    public statusCode:number;
    public error:any;
    constructor(response:ReturnErrorInterface){
        this.statusCode=response.statusCode;
        this.error=response.error;
    }
}