import { Router } from 'express';
import { userController } from '../controllers/index.js';

const router = Router();


router.get('/user', userController.getUser);
router.post('/user', userController.createUser);

export default router;