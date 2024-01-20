"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.job_title_get_all = exports.skill_category_by_skill = exports.skill_category_get_all = exports.skill_get_all = exports.summary_delete = exports.summary_put = exports.summary_post = exports.summary_get_all = void 0;
const tslib_1 = require("tslib");
const helpers_1 = require("../utils/helpers");
const SummarySchema_1 = tslib_1.__importDefault(require("../schemes/SummarySchema"));
const SkillSchema_1 = tslib_1.__importDefault(require("../schemes/SkillSchema"));
const SkillCategorySchema_1 = tslib_1.__importDefault(require("../schemes/SkillCategorySchema"));
const JobTitleSchema_1 = tslib_1.__importDefault(require("../schemes/JobTitleSchema"));
const summary_get_all = async (req, res) => {
    try {
        let data = null;
        await Promise.all([SummarySchema_1.default.countDocuments(), SummarySchema_1.default.find()]).then(results => {
            data = {
                total: results[0],
                entity: results[1]
            };
        })
            .catch(err => {
            (0, helpers_1.processErrorResponse)(err);
        });
        return res.json(data);
    }
    catch (fail) {
        (0, helpers_1.processErrorResponse)(fail);
    }
};
exports.summary_get_all = summary_get_all;
const summary_post = async (req, res) => {
    try {
        const { summary, skill, category } = req.body;
        if (summary && skill && category) {
            const summarySchema = new SummarySchema_1.default({ summary, skill, category });
            let data = null;
            await Promise.all([summarySchema.save()]).then(results => {
                // results is an array of the results of each promise, in order.
                data = { results: results[0] };
            }).catch(err => {
                (0, helpers_1.processErrorResponse)(err);
            });
            return res.json(data);
        }
        else {
            res.json(null);
        }
    }
    catch (fail) {
        (0, helpers_1.processErrorResponse)(fail);
    }
};
exports.summary_post = summary_post;
const summary_put = async (req, res) => {
    try {
        const { id, summary, skill, category } = req.body;
        if (id && summary && skill && category) {
            let data = null;
            await Promise.all([SummarySchema_1.default.findByIdAndUpdate(id, { summary, skill, category })]).then(results => {
                // results is an array of the results of each promise, in order.
                data = { results: results[0] };
            }).catch(err => {
                (0, helpers_1.processErrorResponse)(err);
            });
            return res.json(data);
        }
        else {
            res.json(null);
        }
    }
    catch (fail) {
        (0, helpers_1.processErrorResponse)(fail);
    }
};
exports.summary_put = summary_put;
const summary_delete = async (req, res) => {
    try {
        const { id } = req.body;
        if (id) {
            let data = null;
            await Promise.all([SummarySchema_1.default.deleteOne({ _id: id })]).then(results => {
                // results is an array of the results of each promise, in order.
                data = { results: results[0] };
            }).catch(err => {
                (0, helpers_1.processErrorResponse)(err);
            });
            return res.json(data);
        }
        else {
            res.json(null);
        }
    }
    catch (fail) {
        (0, helpers_1.processErrorResponse)(fail);
    }
};
exports.summary_delete = summary_delete;
const skill_get_all = async (req, res) => {
    try {
        let data = null;
        await Promise.all([SkillSchema_1.default.countDocuments(), SkillSchema_1.default.find()]).then(results => {
            data = {
                total: results[0],
                entity: results[1]
            };
        })
            .catch(err => {
            (0, helpers_1.processErrorResponse)(err);
        });
        return res.json(data);
    }
    catch (fail) {
        (0, helpers_1.processErrorResponse)(fail);
    }
};
exports.skill_get_all = skill_get_all;
const skill_category_get_all = async (req, res) => {
    try {
        let data = null;
        await Promise.all([SkillCategorySchema_1.default.countDocuments(), SkillCategorySchema_1.default.find()]).then(results => {
            // results is an array of the results of each promise, in order.
            data = {
                total: results[0],
                entity: results[1]
            };
        }).catch(err => {
            (0, helpers_1.processErrorResponse)(err);
        });
        return res.json(data);
    }
    catch (fail) {
        (0, helpers_1.processErrorResponse)(fail);
    }
};
exports.skill_category_get_all = skill_category_get_all;
const skill_category_by_skill = async (req, res) => {
    try {
        const { skill } = req.params;
        if (skill) {
            let data = null;
            await Promise.all([SkillCategorySchema_1.default.countDocuments({ skill: skill }), SkillCategorySchema_1.default.find({ skill: skill })]).then(results => {
                // results is an array of the results of each promise, in order.
                data = {
                    total: results[0],
                    entity: results[1]
                };
            }).catch(err => {
                (0, helpers_1.processErrorResponse)(err);
            });
            return res.json(data);
        }
        else {
            res.json(null);
        }
    }
    catch (fail) {
        (0, helpers_1.processErrorResponse)(fail);
    }
};
exports.skill_category_by_skill = skill_category_by_skill;
const job_title_get_all = async (req, res) => {
    try {
        let data = null;
        await Promise.all([JobTitleSchema_1.default.countDocuments(), JobTitleSchema_1.default.find()]).then(results => {
            // results is an array of the results of each promise, in order.
            data = {
                total: results[0],
                entity: results[1]
            };
        }).catch(err => {
            (0, helpers_1.processErrorResponse)(err);
        });
        return res.json(data);
    }
    catch (fail) {
        (0, helpers_1.processErrorResponse)(fail);
    }
};
exports.job_title_get_all = job_title_get_all;
//# sourceMappingURL=summary.controller.js.map