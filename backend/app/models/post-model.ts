import mongoose from 'mongoose';

const Schema = mongoose.Schema;

export const PostSchema = new Schema({
  userId: { type: String },
  postTitle: { type: String }
});
