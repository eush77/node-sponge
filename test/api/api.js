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
  var writeblock = true;

  sponge.__set__('fs', {
    createWriteStream: function (file) {
      t.false(writeblock, 'writeblock');
      t.equal(file, 'file', 'destination file');

      return concat({ encoding: 'string' }, function (foo) {
        t.equal(foo, 'foo', 'content');
        t.end();
      });
    }
  });


  var spongeStream = sponge('file');
  spongeStream.write('f');

  process.nextTick(function () {
    spongeStream.write('o');

    setTimeout(function () {
      spongeStream.end('o');
      writeblock = false;
    }, 0);
  });
});
