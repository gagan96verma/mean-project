import mongoose from 'mongoose';
import { PostSchema } from '../models/post-model';
import { Request, Response } from 'express';
import { UserSchema } from '../models/user-model';

const PostModelSchema = mongoose.model('Post', PostSchema);
const UserModelSchema = mongoose.model('User', UserSchema);

export class PostControllers {

  createPost(req: Request, res: Response) {
    const { id, first_name, last_name } = req[`user`];
    const newPost = new PostModelSchema({
      postTitle: req.body.postTitle,
      user: { id, first_name, last_name }
    });
    newPost.save((error, post) => {
      if (error) {
        res.send(error);
      } else {
        res.json(post);
      }
    });
  }

  getAllPosts(req: Request, res: Response) {
    PostModelSchema.find({}, (err, posts) => {
      if (err) {
        res.send(err);
      } else {
        res.json(posts);
      }
    });
  }

}
