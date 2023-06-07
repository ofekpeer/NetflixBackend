import mongoose, { Schema } from 'mongoose';

const userContentListSchema = new mongoose.Schema({
  content: [
    {
      type: Schema.Types.ObjectId,
      ref: 'Content',
      isWatched: { type: Boolean, required: true, default: false },
    },
  ],
  user: { type: Schema.Types.ObjectId, ref: 'User' },
});
const UserContentList = mongoose.model(
  'UserContentList',
  userContentListSchema
);
export default UserContentList;
