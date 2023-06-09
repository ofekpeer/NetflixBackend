import express from 'express';
import dotenv from 'dotenv';
import mongoose from 'mongoose';
import seedRouter from './routes/seedRoutes.js';
import cors from 'cors';
import contentRouter from './routes/contentRoutes.js';
import listsRouter from './routes/listsRoutes.js';
import authRouter from './routes/authRoutes.js';

dotenv.config();

const port = process.env.PORT || 5000;

const app = express();

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use('/api/seed', seedRouter);
app.use('/api/contents', contentRouter);
app.use('/api/lists', listsRouter);
app.use('/api/auth', authRouter);
app.get("/*", function (req, res) {
  res.sendFile(path.join(__dirname, "https://netflix-backend-wd1s.onrender.com"), function (err) {
    if (err) {
      res.status(500).send(err);
    }
  });
});


mongoose
  .connect(process.env.MONGO_PW)
  .then(() => {
    app.listen(port, () => {
      console.log('connected to server on port', process.env.PORT);
    });
  })
  .catch((err) => {
    console.log('connected fail ', err);
  });
