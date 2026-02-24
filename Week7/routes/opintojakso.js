const express = require('express');
const router = express.Router();
const opintojaksoController = require('../controllers/opintojaksoController');

router.get('/', opintojaksoController.getAllOpintojaksot);
router.get('/:id', opintojaksoController.getOpintojaksoById);
router.post('/', opintojaksoController.createOpintojakso);
router.put('/:id', opintojaksoController.updateOpintojakso);
router.delete('/:id', opintojaksoController.deleteOpintojakso);

module.exports = router;