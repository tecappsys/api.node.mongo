import { Router } from 'express';
import { summary_get_all, summary_post, summary_put, summary_delete, skill_get_all, skill_category_get_all, skill_category_by_skill, job_title_get_all } from '../controllers/summary.controller';

const router = Router();

router.get('/summary',summary_get_all);
router.post('/summary',summary_post);
router.put('/summary',summary_put);
router.delete('/summary',summary_delete);

router.get('/skill',skill_get_all);

router.get('/skill_category',skill_category_get_all);
router.get('/skill_category/:skill',skill_category_by_skill);

router.get('/job_title',job_title_get_all);

export default router;