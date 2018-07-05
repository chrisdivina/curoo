const express = require('express');
const routers = require('./routers');
const data = require('./data/data.json');
const { allowCrossDomain } = require('./middleware');

const app = express();
app.set('data', data);

app.use(express.static('server/public'));
app.use(allowCrossDomain);
app.use('/experience', routers.experience);
app.use('/', routers.all);

const server = app.listen(6565, () => {
  console.log('Listening on port 6565');
});

module.exports = server;
