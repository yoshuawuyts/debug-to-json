/*eslint no-unused-expressions: 0*/

/**
 * Module dependencies
 */

var assert = require('assert');
var dtj = require('./');

/**
 * Test
 */
describe('debug to json', function() {
  it('should parse `debug` output', function(next) {
    var stream = dtj();
    var str = 'Sun, 07 Dec 2014 09:44:50 GMT mocha:runner run suite ctx.type= with a mime';

    stream.once('data', function(nw) {
      assert.deepEqual(nw, {
        time: '2014-12-07T09:44:50.000Z',
        level: 'debug',
        name: 'mocha:runner',
        message: 'run suite ctx.type= with a mime'
      });

      next();
    });

    stream.end(str);
  });

  // it('should return on non valid strings', function() {
  //   assert.equal('undefined', typeof dtj(123));
  //   assert.equal('undefined', typeof dtj('. . . . .'));
  //   assert.equal('undefined', typeof dtj('Sun, 07 Dec 2014 09:44:50 DERP'));
  // });
});
