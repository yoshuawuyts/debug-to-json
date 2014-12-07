/**
 * Module dependencies
 */

var combine = require('stream-combiner');
var through2 = require('through2');
var split = require('split2');

/**
 * Expose `parse`.
 */

module.exports = createStream;

function createStream() {
  var sp = split();
  var tr = through2.obj(write);

  return combine(sp, tr);

  function write(data, _, next) {
    var parsed = parse(data);
    if (parsed) this.push(parsed);
    next();
  }
}

/**
 * Parse a string input.
 *
 * Example input:
 *   Sun, 07 Dec 2014 09:44:50 GMT mocha:runner run suite ctx.type= with a mime
 *
 * @param {String} data
 * @return {Object}
 * @api public
 */

function parse(data) {
  if ('string' != typeof data) return;

  var spl = data.trim().split(' ');
  if (!(spl.length >= 7)) return;

  var date = spl.splice(0, 6).join(' ');
  if (!(/\w{3}, \d{2} \w{3} \d{4} \d{2}:\d{2}:\d{2} GMT/).test(date)) return;

  return {
    time: new Date(date).toISOString(),
    level: 'debug',
    name: spl.shift(),
    message: spl.join(' ')
  };
}
