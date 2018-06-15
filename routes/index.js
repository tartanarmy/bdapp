import express from 'express';

import dotenv from 'dotenv';
// use dotenv
dotenv.config({
  silent: true,
});

const router = express.Router();
/* GET home page. */
router.get('*', (req, res) => {
  res.render('index');
});

export default router;
