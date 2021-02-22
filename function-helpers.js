const fs = require('fs')

function findPuppy(id, cb) {
  fs.readFile('./data.json', 'utf-8', (err, data) => {
    let puppies = JSON.parse(data).puppies
    let puppy = puppies.find(selectedPuppy => selectedPuppy.id === id)
    cb(puppy)
  })
}

module.exports = {
  findPuppy
}