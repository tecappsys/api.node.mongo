import { Request } from "express";
import { ErrorResponse } from "../models/ErrorResponse";
import { v4 as uuid } from 'uuid';
import path from 'path'
import { GenericResponse } from "../models/GenericResponse";
import { GenericLogInterface } from "../shared/interfaces/genericLog.interface";
const util = require('util')
var fs = require('fs');
const moment = require("moment-timezone");
moment.tz.setDefault("America/Montevideo");
moment.locale('es');

export const helpStringIsBlank = ( value: string ) => {
  return !value || !value.toString().trim() || /^[\s\b\0]+$/.test(value.toString());
}

export const helpAddTempFile = async ( file: any ): Promise< string | ErrorResponse >  => {

    const nameSplit = file.name.split('.');
    const extension = nameSplit.pop();
    const nameTemp = `${uuid()}.${extension}`;
    const filePath = path.join(__dirname, '../../tmp/', nameTemp);
  
    await file.mv(filePath).then( filePath ).catch( (error:any) =>{
      genericLog({title:'ERROR_FILE',message:error});
      throw new ErrorResponse(400,'Archivo - Error al subir el archivo');
    });
    return filePath;
}

export const isRequireParamsEmpty = (require:any[],values:any) => {
  let result = false;
  for(let key in require){
      if(values[key]){
          result=true
      }
  }
  console.log(result);
  return result;
}

export const isValueEmpty = ( value:string ) => {
  return ( value === null || value === undefined || value === '')
}

export const isValuesEmpty = ( values:any ) => {
  let result = false;
  for(let key in values){
      if( isValueEmpty(values[key]) ){
          result=true
      }
  }
  return result;
}

export const processErrorResponse = (error:any) => {  
  let setError = new GenericResponse({statusCode:400,errors:[]});
  if(typeof GenericResponse === error){
    setError.statusCode = error.statusCode;
    setError.errors = [error];
  }else{
    setError.errors = [error];
  }
  genericLog({title:'ERROR_RESPONSE',message:setError});
  return setError;
}

export const genericLog = (log:GenericLogInterface) =>{
  const dashs = dashGenerate( 
    (!log.subtitle) ? log.title.length 
      : (log.title.length > log.subtitle.length) 
        ? log.title.length 
          : log.subtitle.length 
  );
  const title = `\n\n${dashs}\n ${log.title}\n`;
  const subtitle = (log.subtitle) ? ` #${log.subtitle}\n${dashs}\n` : `${dashs}\n`;
  console.log(`${title}${subtitle}${util.inspect(log.message)}\n${dashs}\n`);
}

export const dashGenerate = (num:number) => {
  let dash = '';
  for(let i=0;i<=num+2;i++){
    dash=dash+'-';
  }
  return dash;
}

export const getDateNow = () =>{
  return moment(new Date());
}

export const sameDates = (dateFormatYYYYMMDD:string,dateFormatISO:string)=>{
  const momentDateFormatISO = moment(dateFormatISO);
  const diff = moment(dateFormatYYYYMMDD).diff(momentDateFormatISO, 'days');
  return (diff === 0) ;
}

export const formatedDateOnlyDate = (date:string) =>{
  return moment(date).format("YYYY-MM-DD");
}

export const formatedDate = (date:string) =>{
  return moment(date).format("YYYY-MM-DD HH:mm:ss");
}

export const isValidExpireToken = (date:Date,expire:number)=>{ 
  const actualDate = getDateNow();
  const expireDate = moment(date).add(expire, 'seconds');
  const diff = moment(expireDate).diff(actualDate, 'hours');
  return (diff > 1) ;
}

export const isRangeDifferentsDays = (date:Date,different:number)=>{ 
  const actualDate = getDateNow();
  const expireDate = moment(date);
  const diff = moment(expireDate).diff(actualDate, 'days');
  return ( (diff+different) >= 0 ) ;
}

export const processScrappingArticle = async(htmlString:any)=>{
  let sales = 0;
  if(htmlString.indexOf("ui-pdp-subtitle")){
      const find = htmlString.slice(htmlString.indexOf("ui-pdp-subtitle"),htmlString.indexOf("ui-pdp-subtitle")+50);            
      if(find.includes('vendido')){
          let splitFind = [];
          splitFind = find.split(' ')[4];
          if(!isNaN(splitFind)){
              sales = parseInt( splitFind );
          }            
      };
  }
  return sales;
}