const express = require('express');
const router = express.Router();
const server = require('./server');
const fs = require('fs');
const {findPuppy} = require('./function-helpers')
const puppies = require('./data.json');


// router.get('/', (req, res) => {
//   res.send('Pupperazzi')
// })

router.get('/', (req, res) => {
  fs.readFile('./data.json', 'utf-8', (err, data) => {
    res.render('./puppies/index', JSON.parse(data))
   })
})

router.get('/puppies/:id', (req, res) => {
  findPuppy(req.params.id, (puppy) => {
    res.render('puppies/view', puppy)
  })
})

module.exports = router;