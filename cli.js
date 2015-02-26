#!/usr/bin/env node
'use strict';

var sponge = require('./');


var usage = function () {
  return 'Usage:  sponge [<file>]';
};

process.exitCode = (function (argv) {
  switch (argv.length) {
    case 0:
      process.stdin
        .pipe(sponge())
        .pipe(process.stdout);
      return 0;

    case 1:
      if (argv[0] == '--help') {
        console.log(usage());
      }
      else {
        process.stdin.pipe(sponge(argv[0]));
      }
      return 0;

    default:
      console.error(usage());
      return 1;
  }
}(process.argv.slice(2)));
