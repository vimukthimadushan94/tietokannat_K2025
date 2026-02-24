const Opintojakso = require('../models/opintojaksoModel');

// GET all
exports.getAllOpintojaksot = async (req, res) => {
  try {
    const opintojaksot = await Opintojakso.getAll();
    res.json(opintojaksot);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

// GET by ID
exports.getOpintojaksoById = async (req, res) => {
  try {
    const opintojakso = await Opintojakso.getById(req.params.id);

    if (!opintojakso) {
      return res.status(404).json({ message: 'Opintojakso not found' });
    }

    res.json(opintojakso);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

// CREATE
exports.createOpintojakso = async (req, res) => {
  try {
    const result = await Opintojakso.create(req.body);

    res.status(201).json({
      message: 'Opintojakso created successfully',
      id: result.insertId
    });

  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

// UPDATE
exports.updateOpintojakso = async (req, res) => {
  try {
    const result = await Opintojakso.update(req.params.id, req.body);

    if (result.affectedRows === 0) {
      return res.status(404).json({ message: 'Opintojakso not found' });
    }

    res.json({ message: 'Opintojakso updated successfully' });

  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

// DELETE
exports.deleteOpintojakso = async (req, res) => {
  try {
    const result = await Opintojakso.delete(req.params.id);

    if (result.affectedRows === 0) {
      return res.status(404).json({ message: 'Opintojakso not found' });
    }

    res.json({ message: 'Opintojakso deleted successfully' });

  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};