# random-stream

Generate a random stream of acscii characters. Characters are written during a random interval supplied by the user. Useful for testing and spamming.

## Example
```javascript
var RandomStream = require('../.')

var r = RandomStream({
  min: 250
, max: 1000
})

r.pipe(process.stdout)
```
where `options.min` and `options.max` are the user supplied random time interval for the write.

## Install
```shell
npm install random-stream
```

## License
MIT