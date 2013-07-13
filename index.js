var Readable = require('stream').Readable

module.exports = function (options) {

  var stream = new Readable()

  var randInt = randIntGenerator(options.min, options.max)

  stream._read = function(n) {
    var self = this
    setTimeout(
      function () {
        self.push( randChar() )
      }, randInt() )
  }


  return stream

}

var randAscii = randIntGenerator(33, 126)

function randChar () {
  return String.fromCharCode(randAscii())
}

function randIntGenerator(min, max) {
  if (!min) min = 250
  if (!max) max = 1000

  return function () {
    return Math.floor(Math.random() * (max - min + 1)) + min
  }
}