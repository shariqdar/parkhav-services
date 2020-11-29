import express from 'express';

const indexRouter = express.Router();

indexRouter.get('/', (req, res) =>
  res.status(200).json({message: 'Welcome to express API'})
);

export default indexRouter;