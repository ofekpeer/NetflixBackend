import express from 'express';
import List from '../models/listSchema.js';
import { isAuth } from '../utils.js';

const listsRouter = express.Router();
//some change
listsRouter.get('/', isAuth, async (req, res) => {
  const typeQuery = req.query.type;
  const genreQuery = req.query.genre;

  let list = [];

  try {
    if (typeQuery) {
      if (genreQuery) {
        list = await List.aggregate([
          { $match: { type: typeQuery, genre: genreQuery } },
          { $sample: { size: 10 } },
        ]);
        list = await List.populate(list, { path: 'contents' });
      } else {
        list = await List.aggregate([
          { $match: { type: typeQuery } },
          { $sample: { size: 10 } },
        ]);

        list = await List.populate(list, { path: 'contents' });
      }
    } else {

      list = await List.find().populate('contents'); // Retrives whole object
    }
    res.status(200).json(list);
  } catch (err) {
    res.status(500).json(err);
  }
});

export default listsRouter;
