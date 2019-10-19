const express = require('express')
const redis = require('redis')
const util = require('util')
const { Pool } = require('pg')

const pgClient = new Pool()
 
// create express application instance
const app = express()

const redisClient = redis.createClient({host: 'redis'})

const get = util.promisify(redisClient.get).bind(redisClient);
const set = util.promisify(redisClient.set).bind(redisClient);

app.get('/', async (req, res) => {
  const redisData = await get('latestposts')
  if (redisData) {
    return res.json({source: 'redis', data: JSON.parse(redisData)})
  }
  const data = await pgClient.query('select * from posts')
  await set('latestposts', JSON.stringify(data.rows), 'EX', 10)
  res.json({source: 'pg', data: data.rows});
});

app.listen(3000, () => {
  console.log('listening');
});
