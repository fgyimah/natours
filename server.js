const dotenv = require('dotenv');

//configure environment variables
dotenv.config({ path: 'config.env' });

const app = require('./app');

const port = process.env.PORT || 3000;
app.listen(port, () => {
  console.log(`🚀️   server running on http://localhost:${port} ...`);
});
