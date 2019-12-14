const mongoose = require('mongoose');
const dotenv = require('dotenv');

//configure environment variables
dotenv.config({ path: 'config.env' });

const DB = process.env.DATABASE_LOCAL;
//connect to mongodb
mongoose.connect(DB, {
  useNewUrlParser: true,
  useCreateIndex: true,
  useUnifiedTopology: true
});
const db = mongoose.connection;
db.on('error', console.error.bind(console, 'Failed to connect to DB'));
db.once('open', () => {
  console.log('connected to DB');
});

const app = require('./app');

const port = process.env.PORT || 3000;
app.listen(port, () => {
  console.log(`🚀️   server running on http://localhost:${port} ...`);
});
