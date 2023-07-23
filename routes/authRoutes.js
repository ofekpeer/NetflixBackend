import express from 'express';
import expressAsyncHandler from 'express-async-handler';
import bcrypt from 'bcryptjs';
import User from '../models/userSchema.js';
import { generateToken } from '../utils.js';
import Content from '../models/contentSchema.js';
import UserContentList from '../models/userContentListSchema.js';

const authRouter = express.Router();

authRouter.post(
  '/login',
  expressAsyncHandler(async (req, res) => {
    const user = await User.findOne({ email: req.body.email });
    if (user) {
      if (bcrypt.compareSync(req.body.password, user.password)) {
        console.log('success');
        let contentList = await UserContentList.findOne({ user: user._id });
        if (!contentList) {
          const userContentList = new UserContentList({
            user: user,
            content: [],
          });
          contentList = await userContentList.save();
        }
        const list = await UserContentList.populate(contentList, {
          path: 'content',
        });

        console.log(list);
        res.send({
          user: {
            _id: user._id,
            username: user.username,
            profilePicture: user.profilePicture,
            email: user.email,
            token: generateToken(user),
          },
          contentList: list,
        });
        return;
      }

      res.status(401).send({ message: 'Invalid Password' });
    } else {
      res.status(401).send({ message: 'Invalid Email' });
    }
  })
);

authRouter.post(
  '/register',
  expressAsyncHandler(async (req, res) => {
    console.log(req.body.password);
    const newUser = new User({
      username: req.body.username,
      email: req.body.email,
      password: bcrypt.hashSync(req.body.password),
    });
    const user = await newUser.save();

    res.send({
      _id: user._id,
      username: user.username,
      email: user.email,
      profilePicture: user.profilePicture,
      token: generateToken(user),
    });
  })
);

export default authRouter;
