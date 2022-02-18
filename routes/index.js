import express from 'express';
import "core-js/stable";
import "regenerator-runtime/runtime";

import userRouters from './users.js';

var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  console.log('index');
  res.json({
    success: true,
  });
});

router.use('/user', userRouters);

export default router;
