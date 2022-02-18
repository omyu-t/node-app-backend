import express from 'express';
//import db from './config/database';
import routes from '../routes/index.js';
import calc from './util/calc.js';
const app = express();

const port = 3000;

app.use('/api/:version', (req, res, next) => {
    console.log('`okke', req.params);
    next();
  },
  routes);

app.listen(port, () => console.log(`Server running on port ${port}`));