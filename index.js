'use strict';

var concat = require('concat-stream'),
    through = require('through2'),
    duplexer = require('duplexer2');

var fs = require('fs');


module.exports = function (file) {
  if (file != null) {
    return concat(function (data) {
      fs.createWriteStream(file).end(data);
    });
  }
  else {
    var readable = through();
    var writable = concat(readable.end.bind(readable));
    return duplexer(writable, readable);
  }
};
