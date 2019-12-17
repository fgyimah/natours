const mongoose = require('mongoose');
const dotenv = require('dotenv');

//configure environment variables
dotenv.config({ path: 'config.env' });

//terminate server if there is an un-caught exception
process.on('uncaughtException', err => {
  console.log('UNHANDLED EXCEPTION 💥️ , shutting down....');
  console.log(err.name, err.message);
  process.exit(1);
});

const DB = process.env.DATABASE_LOCAL;
//connect to mongodb
mongoose
  .connect(DB, {
    useNewUrlParser: true,
    useCreateIndex: true,
    useUnifiedTopology: true
  })
  .then(() => console.log('Connected to DB'));

const app = require('./app');

const port = process.env.PORT || 3000;
const server = app.listen(port, () => {
  console.log(`🚀️   server running on http://localhost:${port} ...`);
});

//terminate server if there is an unhandled promise rejections
process.on('unhandledRejection', err => {
  console.log(err.name, err.message);
  console.log('UNHANDLED REJECTION 💥️ , shutting down....');
  server.close(() => {
    process.exit(1);
  });
});
