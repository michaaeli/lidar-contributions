const express = require('express')
const {getBeta, getBP} = require('./geometry.js')
const app = express()
const cors = require('cors')
const { computeDestinationPoint } = require('geolib')
const port = 3000

const geolib = require('geolib')

app.use(express.json())

const corsOpts = {
  origin: "*",
}

let buffer;

let hashMap = new Map();

app.get('/cars', (req, res) => {
  res.sendStatus(201);
})

app.get('/test', cors(corsOpts), (req, res) => {
  let respp = {texxt: "sup"};
  res.json(respp);
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})

// 5-17 car test starts here
app.get('/cars', (req, res) => {
  let hashArray = [];
  for(let [key, value] of hashMap){
    console.log(key);
    hashArray.push({"price" : value, "make" : key});
  }
  res.json({hashArray});
})

app.post('/cars', (req, res) => {
  console.log(req.body);
  const cars = req.body.list;
  for (let i in cars){
    hashMap.set(cars[i].make, cars[i].price);
  }
  console.log(hashMap);
  res.sendStatus(201);
})

// 5-20 
// let x = geolib.computeDestinationPoint([52.518611, 13.408056], 15000, 180);
// console.log(x);
// let y = geolib.getGreatCircleBearing(
//   { latitude: 52.518611, longitude: 13.408056 },
//   { latitude: 51.519475, longitude: 7.46694444 }
// );
// console.log(y);

let x = getBeta(1, 2);
console.log(x);

