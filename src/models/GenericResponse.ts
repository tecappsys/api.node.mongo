import { GenericResponseInterface } from "../shared/interfaces/genericResponse.interface";

export class GenericResponse{
    public statusCode:number;
    public data:any;
    public errors:any[];
    public isGenerics:boolean;
    constructor(response:GenericResponseInterface){
        this.statusCode=response.statusCode;
        this.data=response.data ? response.data : null;
        this.errors=response.errors ? response.errors : [];
        this.isGenerics=response.isGenerics ? response.isGenerics : true;
    }
}