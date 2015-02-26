'use strict';

var sponge = require('rewire')('../..');

var test = require('tape'),
    concat = require('concat-stream');


test('transform', function (t) {
  var spongeStream = sponge();

  spongeStream.end('foo');
  spongeStream.pipe(concat({ encoding: 'string' }, function (foo) {
    t.equal(foo, 'foo', 'content');
    t.end();
  }));
});


test('writable', function (t) {
  sponge.__set__('fs', {
    createWriteStream: function (file) {
      t.equal(file, 'file', 'destination file');
      return concat({ encoding: 'string' }, function (foo) {
        t.equal(foo, 'foo', 'content');
        t.end();
      });
    }
  });

  sponge('file').end('foo');
});
