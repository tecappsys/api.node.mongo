"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const summary_controller_1 = require("../controllers/summary.controller");
const router = (0, express_1.Router)();
router.get('/summary', summary_controller_1.summary_get_all);
router.post('/summary', summary_controller_1.summary_post);
router.put('/summary', summary_controller_1.summary_put);
router.delete('/summary', summary_controller_1.summary_delete);
router.get('/skill', summary_controller_1.skill_get_all);
router.get('/skill_category', summary_controller_1.skill_category_get_all);
router.get('/skill_category/:skill', summary_controller_1.skill_category_by_skill);
router.get('/job_title', summary_controller_1.job_title_get_all);
exports.default = router;
//# sourceMappingURL=api.js.map