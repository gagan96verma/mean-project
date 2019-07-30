import momgoose from 'mongoose';
import { UserSchema } from '../models/user-model';
import { Request, Response } from 'express';

const UserMongooseModel = momgoose.model('User', UserSchema);

export class UserController {

  addNewUser(req: Request, res: Response) {
    const newUser = new UserMongooseModel(req.body);
    UserMongooseModel.find({email: req.body.email}, (err, data) => {
      if (err) {
        newUser.save((error, userData) => {
          if (error) {
            res.send(error);
          } else {
            res.json(userData);
          }
        });
      } else {
        res.send(`User already exists` + err);
      }
    });
  }

  userLogin(req: Request, res: Response) {
    const { email, password } = req.body;
    UserMongooseModel.find({email}, (err, data) => {
      if (err) {
        res.send('Login Failed ' + err);
      } else if (data.length && (data[0].password === password)) {
        res.json(data);
      } else if (!data.length) {
        res.send('Email does not exists!');
      } else {
        res.send({ code: 204, status: 'Invalid Credentials!' });
      }
    });
  }

  getUsers(req: Request, res: Response) {
    UserMongooseModel.find({}, (err, data) => {
      if (err) {
        res.send(err);
      } else {
        res.json(data);
      }
    });
  }

  generateDummyData(req: Request, res: Response) {
    var data = [
      {first_name: 'Gagan',
      last_name: 'Verma',
      email: 'gagan.verma@engineer.ai',
      zip_code: '122022',
      password: '11111111'
  }];

    UserMongooseModel.collection.insertMany(data, (err, User) => {
      if (err) {
        res.send(err);
      } else {
        res.json(User);
      }
    });
  }

}
