const Note = require('../models/notesModel.js');

exports.createNote = (req, res) => {
    const { user_id, title, content, isPinned } = req.body;

    Note.createNote(user_id, title, content, isPinned, (err, result) => {
        if (err) return res.status(500).json({ msg: 'Erro ao criar nota', err });

        res.status(201).json({ msg: 'Nota criada com sucesso', noteId: result.insertId });
    });
};

exports.fetchNoteById = (req, res) => {
    const { id } = req.params;
    Note.fetchNoteById(id, (err, result) => {
        if (err) return res.status(500).json({ msg: 'Erro ao buscar nota', err });
        if (result.length === 0) return res.status(404).json({ msg: 'Nota não encontrada' });
        res.status(200).json(result);
    });
};

exports.updateNote = (req, res) => {
    const { id } = req.params;
    const { title, content, isPinned } = req.body;

    Note.updateNote(id, title, content, isPinned, (err, result) => {
        if (err) return res.status(500).json({ msg: 'Erro ao atualizar nota', err });
        if (result.affectedRows === 0) return res.status(404).json({ msg: 'Nota não encontrada' });

        res.status(200).json({ msg: 'Nota atualizada com sucesso' });
    });
};

exports.deleteNote = (req, res) => {
    const { id } = req.params;

    Note.deleteNote(id, (err, result) => {
        if (err) return res.status(500).json({ msg: 'Erro ao deletar nota', err });
        if (result.affectedRows === 0) return res.status(404).json({ msg: 'Nota não encontrada' });

        res.status(200).json({ msg: 'Nota deletada com sucesso' });
    });
};
