"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.processScrappingArticle = exports.isRangeDifferentsDays = exports.isValidExpireToken = exports.formatedDate = exports.formatedDateOnlyDate = exports.sameDates = exports.getDateNow = exports.dashGenerate = exports.genericLog = exports.processErrorResponse = exports.isValuesEmpty = exports.isValueEmpty = exports.isRequireParamsEmpty = exports.helpAddTempFile = exports.helpStringIsBlank = void 0;
const tslib_1 = require("tslib");
const ErrorResponse_1 = require("../models/ErrorResponse");
const uuid_1 = require("uuid");
const path_1 = tslib_1.__importDefault(require("path"));
const GenericResponse_1 = require("../models/GenericResponse");
const util = require('util');
var fs = require('fs');
const moment = require("moment-timezone");
moment.tz.setDefault("America/Montevideo");
moment.locale('es');
const helpStringIsBlank = (value) => {
    return !value || !value.toString().trim() || /^[\s\b\0]+$/.test(value.toString());
};
exports.helpStringIsBlank = helpStringIsBlank;
const helpAddTempFile = async (file) => {
    const nameSplit = file.name.split('.');
    const extension = nameSplit.pop();
    const nameTemp = `${(0, uuid_1.v4)()}.${extension}`;
    const filePath = path_1.default.join(__dirname, '../../tmp/', nameTemp);
    await file.mv(filePath).then(filePath).catch((error) => {
        (0, exports.genericLog)({ title: 'ERROR_FILE', message: error });
        throw new ErrorResponse_1.ErrorResponse(400, 'Archivo - Error al subir el archivo');
    });
    return filePath;
};
exports.helpAddTempFile = helpAddTempFile;
const isRequireParamsEmpty = (require, values) => {
    let result = false;
    for (let key in require) {
        if (values[key]) {
            result = true;
        }
    }
    console.log(result);
    return result;
};
exports.isRequireParamsEmpty = isRequireParamsEmpty;
const isValueEmpty = (value) => {
    return (value === null || value === undefined || value === '');
};
exports.isValueEmpty = isValueEmpty;
const isValuesEmpty = (values) => {
    let result = false;
    for (let key in values) {
        if ((0, exports.isValueEmpty)(values[key])) {
            result = true;
        }
    }
    return result;
};
exports.isValuesEmpty = isValuesEmpty;
const processErrorResponse = (error) => {
    let setError = new GenericResponse_1.GenericResponse({ statusCode: 400, errors: [] });
    if (typeof GenericResponse_1.GenericResponse === error) {
        setError.statusCode = error.statusCode;
        setError.errors = [error];
    }
    else {
        setError.errors = [error];
    }
    (0, exports.genericLog)({ title: 'ERROR_RESPONSE', message: setError });
    return setError;
};
exports.processErrorResponse = processErrorResponse;
const genericLog = (log) => {
    const dashs = (0, exports.dashGenerate)((!log.subtitle) ? log.title.length
        : (log.title.length > log.subtitle.length)
            ? log.title.length
            : log.subtitle.length);
    const title = `\n\n${dashs}\n ${log.title}\n`;
    const subtitle = (log.subtitle) ? ` #${log.subtitle}\n${dashs}\n` : `${dashs}\n`;
    console.log(`${title}${subtitle}${util.inspect(log.message)}\n${dashs}\n`);
};
exports.genericLog = genericLog;
const dashGenerate = (num) => {
    let dash = '';
    for (let i = 0; i <= num + 2; i++) {
        dash = dash + '-';
    }
    return dash;
};
exports.dashGenerate = dashGenerate;
const getDateNow = () => {
    return moment(new Date());
};
exports.getDateNow = getDateNow;
const sameDates = (dateFormatYYYYMMDD, dateFormatISO) => {
    const momentDateFormatISO = moment(dateFormatISO);
    const diff = moment(dateFormatYYYYMMDD).diff(momentDateFormatISO, 'days');
    return (diff === 0);
};
exports.sameDates = sameDates;
const formatedDateOnlyDate = (date) => {
    return moment(date).format("YYYY-MM-DD");
};
exports.formatedDateOnlyDate = formatedDateOnlyDate;
const formatedDate = (date) => {
    return moment(date).format("YYYY-MM-DD HH:mm:ss");
};
exports.formatedDate = formatedDate;
const isValidExpireToken = (date, expire) => {
    const actualDate = (0, exports.getDateNow)();
    const expireDate = moment(date).add(expire, 'seconds');
    const diff = moment(expireDate).diff(actualDate, 'hours');
    return (diff > 1);
};
exports.isValidExpireToken = isValidExpireToken;
const isRangeDifferentsDays = (date, different) => {
    const actualDate = (0, exports.getDateNow)();
    const expireDate = moment(date);
    const diff = moment(expireDate).diff(actualDate, 'days');
    return ((diff + different) >= 0);
};
exports.isRangeDifferentsDays = isRangeDifferentsDays;
const processScrappingArticle = async (htmlString) => {
    let sales = 0;
    if (htmlString.indexOf("ui-pdp-subtitle")) {
        const find = htmlString.slice(htmlString.indexOf("ui-pdp-subtitle"), htmlString.indexOf("ui-pdp-subtitle") + 50);
        if (find.includes('vendido')) {
            let splitFind = [];
            splitFind = find.split(' ')[4];
            if (!isNaN(splitFind)) {
                sales = parseInt(splitFind);
            }
        }
        ;
    }
    return sales;
};
exports.processScrappingArticle = processScrappingArticle;
//# sourceMappingURL=helpers.js.map