var RandomStream = require('../.')

var r = RandomStream({
  min: 250
, max: 1000
})

r.pipe(process.stdout)