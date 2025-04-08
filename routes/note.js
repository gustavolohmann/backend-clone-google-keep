const express = require('express');
const router = express.Router();
const notesController = require('../controllers/notesController');

router.post('/', notesController.createNote);

router.get('/:id', notesController.fetchNoteById);

router.put('/:id', notesController.updateNote);

router.delete('/:id', notesController.deleteNote);

module.exports = router;