const Opiskelija = require('../models/opiskelijaModel');

// GET all students
exports.getAllOpiskelijat = async (req, res) => {
  try {
    const opiskelijat = await Opiskelija.getAll();
    res.json(opiskelijat);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

// GET student by ID
exports.getOpiskelijaById = async (req, res) => {
  try {
    const opiskelija = await Opiskelija.getById(req.params.id);

    if (!opiskelija) {
      return res.status(404).json({ message: 'Student not found' });
    }

    res.json(opiskelija);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

// CREATE student
exports.createOpiskelija = async (req, res) => {
  try {
    const result = await Opiskelija.create(req.body);
    res.status(201).json({
      message: 'Student created successfully',
      id: result.insertId
    });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

// UPDATE student
exports.updateOpiskelija = async (req, res) => {
  try {
    const result = await Opiskelija.update(req.params.id, req.body);

    if (result.affectedRows === 0) {
      return res.status(404).json({ message: 'Student not found' });
    }

    res.json({ message: 'Student updated successfully' });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

// DELETE student
exports.deleteOpiskelija = async (req, res) => {
  try {
    const result = await Opiskelija.delete(req.params.id);

    if (result.affectedRows === 0) {
      return res.status(404).json({ message: 'Student not found' });
    }

    res.json({ message: 'Student deleted successfully' });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};