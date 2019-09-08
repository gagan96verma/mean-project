import mongoose from 'mongoose';
import { PostSchema } from '../models/post-model';
import { Request, Response } from 'express';
import { UserSchema } from '../models/user-model';

const PostModelSchema = mongoose.model('Post', PostSchema);
const UserModelSchema = mongoose.model('User', UserSchema);

export class PostControllers {

  createPost(req: Request, res: Response) {
    const { id } = req[`user`];
    const newPost = new PostModelSchema({
      postTitle: req.body.postTitle,
      user: { id }
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
        const logs = posts.map((post) => {
          UserModelSchema.findOne({_id: post.user.id}, (error, userDetail) => {
            post['name'] = userDetail.first_name + ' ' + userDetail.last_name;
            return post;
          });
        });
        res.json(posts);
      }
    });
  }

}
