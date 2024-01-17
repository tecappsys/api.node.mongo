export class ErrorResponse{
    public statusCode:number;
    public message:string;
    public errors:any[];
    public isGenerics:boolean;
    constructor(statusCode:number,message:string,errors:any[]=[],isGenerics:boolean=false){
        this.statusCode=statusCode;
        this.message=message;
        this.errors=errors;
        this.isGenerics=isGenerics;
    }
}