const { MongoClient } = require('mongodb');
const { DB_URI, DB_NAME } = process.env;
const client = new MongoClient(process.env.DB_URI, {
  useNewUrlParser: true, useUnifiedTopology: true
});

module.exports = async () => {
  await client.connect();
  return client.db(DB_NAME); 
};
