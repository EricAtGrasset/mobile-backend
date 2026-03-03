import { Router } from 'express';
import * as controller from '../controllers/files.js';

const router = Router();

router.post('/', controller.upload);

export default router;