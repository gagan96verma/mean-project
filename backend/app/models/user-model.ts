import mongoose from 'mongoose';

const Schema = mongoose.Schema;

export const UserSchema = new Schema({
  first_name: { type: String },
  last_name: { type: String },
  email: { type: String },
  zip_code: { type: String },
  password: { type: String }
});

