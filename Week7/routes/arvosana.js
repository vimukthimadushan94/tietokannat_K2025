const express = require('express');
const router = express.Router();
const arvosanaController = require('../controllers/arvosanaController');

router.get('/', arvosanaController.getAllArvosanat);
router.get('/:id', arvosanaController.getArvosanaById);
router.post('/', arvosanaController.createArvosana);
router.put('/:id', arvosanaController.updateArvosana);
router.delete('/:id', arvosanaController.deleteArvosana);

module.exports = router;