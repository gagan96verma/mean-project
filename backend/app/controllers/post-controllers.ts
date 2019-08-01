import mongoose from 'mongoose';
import { PostSchema } from '../models/post-model';
import { Request, Response } from 'express';

const PostModelSchema = mongoose.model('Post', PostSchema);

export class PostControllers {

  createPost(req: Request, res: Response) {
    const newPost = new PostModelSchema(req.body);
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
