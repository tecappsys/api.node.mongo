"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.mongo = void 0;
const tslib_1 = require("tslib");
const mongoose_1 = tslib_1.__importDefault(require("mongoose"));
const helpers_1 = require("../utils/helpers");
const mongo = async () => {
    try {
        await mongoose_1.default.connect(process.env.MONGODB_CNN);
        (0, helpers_1.genericLog)({ title: 'MONGO_DB', message: 'MONGO DB Online' });
    }
    catch (error) {
        (0, helpers_1.genericLog)({ title: 'MONGO_DB', message: error });
        throw new Error('ERROR START MONGO DB');
    }
};
exports.mongo = mongo;
//# sourceMappingURL=confDBMongo.js.map