const express = require('express');

const router = express.Router();

router.get('/', (req, res) => {
  const data = req.app.get('data');
  const { experience = {} } = data;
  res.send(experience);
});

router.get('/work', (req, res) => {
  const data = req.app.get('data');
  const { experience = {} } = data;
  const { work = {} } = experience;
  res.send(work);
});

router.get('/work/:index', (req, res) => {
  const data = req.app.get('data');
  const { experience = {} } = data;
  const { work = {} } = experience;
  const { items = [] } = work;
  res.send(items[req.params.index]);
});

router.get('/education', (req, res) => {
  const data = req.app.get('data');
  const { experience = {} } = data;
  const { education = {} } = experience;
  res.send(education);
});

router.get('/education/:index', (req, res) => {
  const data = req.app.get('data');
  const { experience = {} } = data;
  const { education = {} } = experience;
  const { items = [] } = education;
  res.send(items[req.params.index]);
});

module.exports = router;
