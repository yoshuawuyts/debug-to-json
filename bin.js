#!/usr/bin/env node

/**
 * Module dependencies.
 */

var dtj = require('./')

/**
 * Options.
 */

var opts = {};

/**
 * Parse.
 */

process.stdin.resume();
process.stdin.setEncoding('utf8');
process.stdin
  .pipe(dtj(opts))
  .pipe(process.stdout);
