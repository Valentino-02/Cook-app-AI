import {Router} from 'express'
import recipesRoutes from './recipesRoutes';

const router = Router();
router.use('/recipes',recipesRoutes);

export default router;