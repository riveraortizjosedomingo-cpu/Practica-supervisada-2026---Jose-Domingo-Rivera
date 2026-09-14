import { Router } from 'express';
import { obtenerIdeas, obtenerIdeaPorId, crearIdeaController,
         actualizarIdeaController, eliminarIdeaController } from '../controllers/ideas.controller.mjs';

const router = Router();
router.get('/', obtenerIdeas);
router.get('/:id', obtenerIdeaPorId);
router.post('/', crearIdeaController);
router.patch('/:id', actualizarIdeaController);
router.delete('/:id', eliminarIdeaController);

export default router;
