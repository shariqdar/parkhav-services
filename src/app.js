import logger from 'morgan';
import bodyParser from 'body-parser';
import passport from 'passport';
import LocalStrategy from 'passport-local';

import jwt from 'jwt-simple';
import express from 'express';
import cookieParser from 'cookie-parser';
import indexRouter from './routes/index';

import {executeQueryArray} from './utils/queryFunctions'

const app = express();
app.use(bodyParser.json());
app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cookieParser());
app.use('/v1', indexRouter);
const ADMIN = 'admin';
const ADMIN_PASSWORD = 'password';
const SECRET = 'mysecret';

app.use((err, req, res, next) => {
    res.status(400).json({ error: err.stack });
});

app.post(
  '/signup',
  (req, res) => {
    const username = req.body.username;
    executeQueryArray([`INSERT INTO users (
      id ,firstname ,lastname ,mobile ,storeaddress ,landmark ,city ) VALUES 
      (2,'TEST', 'TEST2', 7867867865, 'SYED SAHIB', 'GANI STADIUM', 'SRINAGAR')`]).then(db=>{

        const token = jwt.encode({ username }, SECRET);
        res.send({
        token: token,
        });
      })
      
    
  },
);

passport.use(new LocalStrategy((username, password, done) => {
    if (username === ADMIN && password === ADMIN_PASSWORD) {
      done(null, jwt.encode({ username }, SECRET));
      return;
    }
    done(null, false);
  }));

app.post(
    '/login',
    passport.authenticate('local', { session: false }),
    (req, res) => {
        res.send({
        token: req.user,
        });
    },
);

export default app;