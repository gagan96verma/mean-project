const developement = {
  name: 'development',
  JWT_KEY: 'development',
  MONGO: 'mongodb://localhost/todo_dev'
};

const production = {
  name: 'production',
  JWT_KEY: process.env.JWT_KEY,
  MONGO: process.env.MONGO_PROD
};

const ENVIRONMENT = (process.env.NODE_ENV === undefined || 'development') ? developement : production;

export { ENVIRONMENT } ;

