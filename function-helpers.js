const fs = require('fs')

function findPuppy(id, callback) {
  fs.readFile('./data.json', 'utf-8', (err, data) => {
    let puppies = JSON.parse(data).puppies
    let puppy = puppies.find(selectedPuppy => selectedPuppy.id == id)
    callback(puppy)
  })
}


function savePuppy(id, puppy, callback) {
  fs.readFile('./data.json', 'utf-8', (err, rawData) => {
    data = JSON.parse(rawData)
    const updatedPuppy = data.puppies.map(pup => {
      if (pup.id != id) return pup
        return {
          ...puppy, id
        }
    })
    let newData = JSON.stringify({ puppies: updatedPuppy }, null, 2)
    fs.writeFile('./data.json', newData, () => {
      callback()
  })
})
}

module.exports = {
  findPuppy,
  savePuppy
}