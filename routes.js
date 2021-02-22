const express = require('express');
const router = express.Router();
const server = require('./server');
const fs = require('fs');
const {findPuppy, savePuppy} = require('./function-helpers')
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

router.get('/puppies/edit/:id', (req, res) => {
  findPuppy(req.params.id, (puppy) => {
    res.render('puppies/edit', puppy)
  })
})

router.post('/puppies/edit/:id', (req, res) => {
  savePuppy(req.params.id, req.body, () => {
    res.redirect('/puppies/' + req.params.id)
  })
})

module.exports = router;