const Arvosana = require('../models/arvosanaModel');

// GET all
exports.getAllArvosanat = async (req, res) => {
  try {
    console.log('Fetching all arvosanat');
    const arvosanat = await Arvosana.getAll();
    res.json(arvosanat);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

// GET by ID
exports.getArvosanaById = async (req, res) => {
  try {
    const arvosana = await Arvosana.getById(req.params.id);

    if (!arvosana) {
      return res.status(404).json({ message: 'Arvosana not found' });
    }

    res.json(arvosana);

  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

// CREATE
exports.createArvosana = async (req, res) => {
  try {
    const result = await Arvosana.create(req.body);

    res.status(201).json({
      message: 'Arvosana created successfully',
      id: result.insertId
    });

  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

// UPDATE
exports.updateArvosana = async (req, res) => {
  try {
    const result = await Arvosana.update(req.params.id, req.body);

    if (result.affectedRows === 0) {
      return res.status(404).json({ message: 'Arvosana not found' });
    }

    res.json({ message: 'Arvosana updated successfully' });

  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

// DELETE
exports.deleteArvosana = async (req, res) => {
  try {
    const result = await Arvosana.delete(req.params.id);

    if (result.affectedRows === 0) {
      return res.status(404).json({ message: 'Arvosana not found' });
    }

    res.json({ message: 'Arvosana deleted successfully' });

  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};