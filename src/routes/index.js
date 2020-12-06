import express from 'express';
import { indexPage, messagesPage } from '../controllers';
const indexRouter = express.Router();

indexRouter.get('/', indexPage);

//indexRouter.get('/messages', (req, res) => res.status(200).json({message:"hello"}))
indexRouter.get('/messages', messagesPage)

export default indexRouter;