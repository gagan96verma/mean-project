import mongoose from 'mongoose';

const Schema = mongoose.Schema;

export const PostSchema = new Schema({
  postTitle: { type: String },
  user: {
    id: { type: String },
    first_name: { type: String },
    last_name: { type: String }
  }
});
