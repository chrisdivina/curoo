const express = require('express');

const router = express.Router();

router.get('/', (req, res) => {
  const data = req.app.get('data');
  res.send(data);
});

module.exports = router;
