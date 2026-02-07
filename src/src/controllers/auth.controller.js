exports.register = (req, res) => {
  const { email } = req.body;

  res.status(201).json({
    message: 'User registered successfully (mock)',
    user: { email },
  });
};

exports.login = (req, res) => {
  res.status(200).json({
    message: 'User logged in successfully (mock)',
    token: 'fake-jwt-token',
  });
};
