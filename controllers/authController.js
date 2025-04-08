const authModel = require('../models/authModel');

exports.register = (req, res) => {
  const { email, password } = req.body;
  if (!email || !password) {
    return res.status(400).json({ msg: 'Preencha todos os campos' });
  }

  authModel.register(email, password, (err, result) => {
    if (err) {
      if (err.code === 'ER_DUP_ENTRY') {
        return res.status(409).json({ msg: 'Email já cadastrado' });
      }
      return res.status(500).json({ msg: 'Erro ao registrar', err });
    }

    res.status(201).json({ msg: 'Usuário registrado com sucesso' });
  });
};

exports.login = (req, res) => {
  const { email, password } = req.body;
  if (!email || !password) {
    return res.status(400).json({ msg: 'Preencha todos os campos' });
  }

  authModel.login(email, password, (err, success, user) => {
    if (err) return res.status(500).json({ msg: 'Erro no servidor', err });
    if (!user) return res.status(404).json({ msg: 'Usuário não encontrado' });
    if (!success) return res.status(401).json({ msg: 'Senha incorreta' });
    res.status(200).json({
      msg: 'Login realizado com sucesso', token: user.token,
    });
  });
};
