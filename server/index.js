const express = require('express');
const routers = require('./routers');
const data = require('./data/data.json');

const app = express();
app.set('data', data);

app.use(express.static('server/public'));
app.use('/experience', routers.experience);
app.use('/', routers.all);

const server = app.listen(6565, () => {
  console.log('Listening on port 6565');
});

module.exports = server;
