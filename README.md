# debug-to-json
[![NPM version][npm-image]][npm-url]
[![build status][travis-image]][travis-url]
[![Test coverage][coveralls-image]][coveralls-url]
[![Downloads][downloads-image]][downloads-url]

Convert [`debug`](http://ghub.io/debug) logs to JSON.

## Installation
```bash
npm install debug-to-json
```

## Usage
```sh
$ node ./app.js | dtj
{"time":"2014-05-18T23:47:06.545Z","hostname":"tweedy","pid":27374,"level":"debug","name":"mymodule","message":"Starting mymodule#derp()"}
```

## Why?
[`debug`](http://ghub.io/debug) is a great module, but isn't particularly tied
to any logging. So in order to make `debug` output more parseable we turn it
into JSON first, which in turn can be streamed to your logging location of
choice. Unix all the way down.

## See also
- [bole](http://ghub.io/bole) - tiny JSON logger
- [bistre](http://ghub.io/bistre) - pretty bole logs

## Contributors
- [Yoshua Wuyts](https://github.com/yoshuawuyts)
- [Hugh Kennedy](https://github.com/hughsk)

## License
[MIT](https://tldrlegal.com/license/mit-license)

[npm-image]: https://img.shields.io/npm/v/debug-to-json.svg?style=flat-square
[npm-url]: https://npmjs.org/package/debug-to-json
[travis-image]: https://img.shields.io/travis/yoshuawuyts/debug-to-json.svg?style=flat-square
[travis-url]: https://travis-ci.org/yoshuawuyts/debug-to-json
[coveralls-image]: https://img.shields.io/coveralls/yoshuawuyts/debug-to-json.svg?style=flat-square
[coveralls-url]: https://coveralls.io/r/yoshuawuyts/debug-to-json?branch=master
[downloads-image]: http://img.shields.io/npm/dm/debug-to-json.svg?style=flat-square
[downloads-url]: https://npmjs.org/package/debug-to-json
