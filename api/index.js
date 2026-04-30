const express = require('express');
const cors = require('cors');
const path = require('path');
const app = express();
const port = 3000;

// data
const buildingData = require('./data/buildingPronto.json');
const homeData = require('./data/home.json');
const filtersData = require('./data/filters.json');
const internAX1111 = require('./data/internAX1111.json');
const internAX2629 = require('./data/internAX2629.json');

const geocode = require('./data/geocode.json');
const directions = require('./data/directions.json');

// home
homeData.components[1].items[0].building = buildingData;
homeData.components[1].items[1].building = buildingData;

homeData.components[2].items[0].building = buildingData;
homeData.components[2].items[1].building = buildingData;

homeData.components[3].items[0].building = buildingData;
homeData.components[3].items[1].building = buildingData;
homeData.components[3].items[2].building = buildingData;
homeData.components[3].items[3].building = buildingData;

homeData.components[4].items[0].building = buildingData;
homeData.components[4].items[1].building = buildingData;
homeData.components[4].items[2].building = buildingData;
homeData.components[4].items[3].building = buildingData;
homeData.components[4].items[4].building = buildingData;
homeData.components[4].items[5].building = buildingData;

app.get('/', cors(), (req, res) =>
  res.sendFile('./links.html', {
    root: path.join(__dirname, './')
  })
);
app.get('/home', cors(), (req, res) => res.json(homeData));
app.get('/filters', cors(), (req, res) => res.json(filtersData));
app.get('/building/AX1111', cors(), (req, res) => res.json(internAX1111));
app.get('/building/AX2629', cors(), (req, res) => res.json(internAX2629));
app.get('/geocode', cors(), (req, res) => res.json(geocode));
app.get('/directions', cors(), (req, res) => res.json(directions));

app.listen(port, () =>
  console.log(`Axpe API listening on http://localhost:${port}`)
);
