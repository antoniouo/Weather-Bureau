import express from 'express';
import template from '../template';

const route = express.Router();

route.get('/', async (req, res) => {
  res.send(template({ path: req.originalUrl }));
});

export default route;
