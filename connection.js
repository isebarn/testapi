const { MongoClient } = require('mongodb');
require('dotenv').config()
const connectionString = process.env.MONGO
const client = new MongoClient(connectionString);

let dbConnection;

module.exports = {
  connectToServer: function (callback) {
    setTimeout(() => { console.log("Connecting")}, 5000);
    client.connect(function (err, db) {
      if (err || !db) {
        console.log(err)
      }

      console.log('Connected')
      dbConnection = db.db('sensemaker');
      console.log('Successfully connected to MongoDB.');

      return callback();
    });
  },

  getDb: function () {
    return dbConnection;
  }
};