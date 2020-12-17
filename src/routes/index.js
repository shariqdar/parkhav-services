import express from 'express';
import { indexPage, messagesPage, addMessage } from '../controllers';
import { modifyMessage, performAsyncAction } from '../middleware';
import passport from 'passport';
import BearerStrategy from 'passport-http-bearer';
import jwt from 'jwt-simple';
const SECRET = 'mysecret';
const ADMIN = 'admin';
const indexRouter = express.Router();

passport.use(new BearerStrategy((token, done) => {
    try {
      const { username } = jwt.decode(token, SECRET);
      if (username === ADMIN) {
        done(null, username);
        return;
      }
      done(null, false);
    } catch (error) {
      done(null, false);
    }
  }));

indexRouter.get('/',
passport.authenticate('bearer', { session: false }), indexPage);

//indexRouter.get('/messages', (req, res) => res.status(200).json({message:"hello"}))
indexRouter.get('/messages', 
passport.authenticate('bearer', { session: false }),  messagesPage)

indexRouter.post('/messages', 
passport.authenticate('bearer', { session: false }), modifyMessage, performAsyncAction, addMessage);

export default indexRouter;