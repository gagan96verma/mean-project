import jwt from 'jsonwebtoken';
import { UserSchema } from '../models/user-model';
import { ENVIRONMENT } from '../environment/environment';
import {HttpRequest, HttpResponse} from '@angular/common/http';
import mongoose from 'mongoose';

const UserModelSchema = mongoose.model('User', UserSchema);

export class JwtVerify {

  verifyJsonWebToken(req: HttpRequest, res: HttpResponse, next) {
    const authToken = req.headers[`auth_token`];
    if (!authToken) {
      return res.send('Unauthorised access to the API');
    } else {
      jwt.verify(authToken, ENVIRONMENT.JWT_KEY, async (err, data) => {
        if (err) {
          return res.send('Unauthorised access to the API');
        } else {
          const email = data.email;
          UserModelSchema.findOne({email}, (error, user) => {
            if (error) {
              res.send('Unauthorised access to the API');
            } else {
              req.body[`userId`] = data.id;
              next();
            }
          });
        }
      });
    }
  }

}
