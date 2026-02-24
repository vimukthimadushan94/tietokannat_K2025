var express = require('express');
var router = express.Router();

const opiskelijaController = require('../controllers/opiskelijaController');

router.get('/', opiskelijaController.getAllOpiskelijat);
router.get('/:id', opiskelijaController.getOpiskelijaById);
router.post('/', opiskelijaController.createOpiskelija);
router.put('/:id', opiskelijaController.updateOpiskelija);
router.delete('/:id', opiskelijaController.deleteOpiskelija);

module.exports = router;
