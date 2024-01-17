import { Router } from 'express';
import { summary_get_all, summary_post } from '../controllers/summary.controller';

const router = Router();

router.get('/summary',summary_get_all);
router.post('/summary',summary_post);


export default router;