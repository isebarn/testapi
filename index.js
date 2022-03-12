const express = require('express')
const dbo = require('./connection');
const ObjectId = require('mongodb').ObjectId;

const app = express()
app.use(express.json());

function isObjectId(value) {
  return ObjectId.isValid(value) && typeof value === 'string'
}

app.get('/crud/:collection', async (req, res) => {
  Object.keys(req.query).map(function(key, index) {
    req.query[key] = isObjectId(req.query[key]) ? ObjectId(req.query[key]): req.query[key]
  });

  dbo.getDb()
    .collection(req.params.collection)
    .find(req.query)
    .toArray(function (err, result) {
      if (err) {
        res.status(400).send('Error inserting!');
      } else {
        res.json(result)
      }
    }
  )
})

app.post('/crud/:collection', async (req, res) => {
  Object.keys(req.body).map(function(key, index) {
    req.body[key] = isObjectId(req.query[key]) ? ObjectId(req.body[key]): req.body[key]
  });

  dbo.getDb()
    .collection(req.params.collection)
    .insertOne(req.body, function (err, result) {
      if (err) {
        res.status(400).send('Error inserting!');
      } else {
        res.json(result)
        res.status(204)
      }
    });
})


dbo.connectToServer(function (err) {
  if (err) {
    console.error(err);
    process.exit();
  }

  // start the Express server
  app.listen(3000, () => console.log('Listening on port 3000.'));
});
