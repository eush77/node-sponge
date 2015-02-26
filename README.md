[![npm](https://nodei.co/npm/sponge.png)](https://nodei.co/npm/sponge/)

# sponge

[![Build Status][travis-badge]][travis] [![Dependency Status][david-badge]][david]

Reimplementation of sponge(1) from [moreutils].

[travis]: https://travis-ci.org/eush77/node-sponge
[travis-badge]: https://travis-ci.org/eush77/node-sponge.svg
[david]: https://david-dm.org/eush77/node-sponge
[david-badge]: https://david-dm.org/eush77/node-sponge.png

## CLI

```
sponge [<file>]
```

If `<file>` is omitted, write to stdout.

## API

### `sponge(filename)`

Returns a writable stream that buffers the input and then writes to a file.

### `sponge()`

Returns a transform stream that buffers the input and then writes to the output.

## References

- [moreutils] - growing collection of the unix tools that nobody thought to write long ago when unix was young.

[moreutils]: http://joeyh.name/code/moreutils

## Install

```
npm install sponge
```

## License

MIT
