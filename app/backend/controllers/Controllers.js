const service = require('../services/Services'); //use the service for database logic or other business logic

exports.getMessage = (req, res) => {
  res.json({ message: 'Hello from backend!' });
};