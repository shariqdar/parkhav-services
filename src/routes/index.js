import express from 'express';
import { indexPage, messagesPage, addMessage } from '../controllers';
const indexRouter = express.Router();

indexRouter.get('/', indexPage);

//indexRouter.get('/messages', (req, res) => res.status(200).json({message:"hello"}))
indexRouter.get('/messages', messagesPage)

indexRouter.post('/messages', addMessage);

export default indexRouter;