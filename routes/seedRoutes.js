import User from '../models/userSchema.js';
import express from 'express';
import Content from '../models/contentSchema.js';
import expressAsyncHandler from 'express-async-handler';
import { listMovieNames, listSeriesNames, genres, data } from '../data.js';
import List from '../models/listSchema.js';
import UserContentList from '../models/userContentListSchema.js';

const seedRouter = express.Router();
seedRouter.get(
  '/',
  expressAsyncHandler(async (req, res) => {
    try {
      await User.deleteMany({});
      const createdUsers = await addUsers();

      await Content.deleteMany({});
      const createdContent = await Content.insertMany(data.content);

      await addUserContent()
      await List.deleteMany({});

      await seedLists(listSeriesNames, 'Series');
      await seedLists(listMovieNames, 'Movies');

      // const createdList = await List.insertMany(data.lists);

      res.send({ createdContent, createdUsers });
    } catch (err) {
      console.log(err);
    }
  })
);

const addUserContent = async () => {
  const randomContent = await Content.aggregate([{ $sample: { size: 1 } }]);
  const users = await User.find();
  const newUserContent = new UserContentList({
    user: users[0],
    content: randomContent,
    isWatched: false
  });
  return await newUserContent.save();
};

const addUsers = async () => {
  return await User.insertMany(data.users);
};

const seedLists = async (array, type) => {
  for (let i = 0; i < array.length; i++) {
    const isSeries = type === 'Movies' ? false : true;
    let newList = await Content.aggregate([
      { $match: { isSeries: isSeries } },
      { $sample: { size: 8 } },
    ]);

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
