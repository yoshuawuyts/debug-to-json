#!/usr/bin/env node

/**
 * Module dependencies.
 */

var through2 = require('through2');
var dtj = require('./');

/**
 * Parse.
 */

process.stdin.resume();
process.stdin.setEncoding('utf8');
process.stdin
  .pipe(dtj())
  .pipe(through2.obj(function(data, _, next) {
    this.push(JSON.stringify(data));
    this.push('\n');
    next()
  }))
  .pipe(process.stdout);
