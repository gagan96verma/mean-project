import { Request, Response } from 'express';
import { UserController } from '../controllers/user-controller';
import { PostControllers } from '../controllers/post-controllers';
import { JwtVerify } from '../middlewares/jwt-verify';

export class Routes {

  userController: UserController = new UserController();
  postController: PostControllers = new PostControllers();
  jetVerify: JwtVerify = new JwtVerify();

  public routes(app: any): void {
    app.route('/').get((req: Request, res: Response) => {
      res.status(200).send('Hello from routes/index.ts');
    });

    app.route('/api/users').get(this.userController.getUsers);

    app.route('/api/dummy').get(this.userController.generateDummyData);

    app.route('/api/signup').post(this.userController.addNewUser);

    app.route('/api/login').post(this.userController.userLogin);

    app.post('/api/create-post', this.jetVerify.verifyJsonWebToken, this.postController.createPost);

    app.get('/api/all-posts', this.postController.getAllPosts);
  }
}
