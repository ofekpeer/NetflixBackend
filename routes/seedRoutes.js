import User from '../models/userSchema.js';
import express from 'express';
import Content from '../models/contentSchema.js';
import expressAsyncHandler from 'express-async-handler';
import { listMovieNames, listSeriesNames, genres, data } from '../data.js';
import List from '../models/listSchema.js';

const seedRouter = express.Router();
seedRouter.get(
  '/',
  expressAsyncHandler(async (req, res) => {
    try {
      await User.deleteMany({});
      const createdUsers = await User.insertMany(data.users);

      await Content.deleteMany({});
      const createdContent = await Content.insertMany(data.content);

      await List.deleteMany({});

      await seedLists(listSeriesNames, 'Series');
      await seedLists(listMovieNames, 'Movies');

      //const createdList = await List.insertMany(data.lists);

      res.send({ createdList, createdContent, createdUsers });
    } catch (err) {
      console.log('fail update users content list');
    }
  })
);

const seedLists = async (array, type) => {
  for (let i = 0; i < array.length; i++) {
    const isSeries = type === 'movies' ? false : true;
    let newList = await Content.aggregate([
      { $match: { isSeries: isSeries } },
      { $sample: { size: 8 } },
    ]);
    console.log("---------"+ newList[i]);
    newList = newList.map((i) => i._id);
    console.log("=================================");
    console.log("---------"+ newList[i]);

    const newListcontent = new List({
      title: array[i],
      type: type,
      genre: genres[i],
      contents: newList,
    });
    await newListcontent.save();
  }
};

export default seedRouter;
