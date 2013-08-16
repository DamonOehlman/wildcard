# wildcard

Very simple wildcard matching, which is designed to provide the same
functionality that is found in the
[eve](https://github.com/adobe-webplatform/eve) eventing library.


[![NPM](https://nodei.co/npm/wildcard.png)](https://nodei.co/npm/wildcard/)

[![Build Status](https://travis-ci.org/DamonOehlman/wildcard.png?branch=master)](https://travis-ci.org/DamonOehlman/wildcard)
[![stable](http://hughsk.github.io/stability-badges/dist/stable.svg)](http://github.com/hughsk/stability-badges)

[![browser support](https://ci.testling.com/DamonOehlman/wildcard.png)](https://ci.testling.com/DamonOehlman/wildcard)


## Usage

It works with strings:

```js
wildcard('foo.*', 'foo.bar'); // true
wildcard('foo.*', 'foo'); // true
```

Arrays:

```js
var testdata = [
    'a.b.c',
    'a.b',
    'a',
    'a.b.d'
];

wildcard('a.b.*', testdata); // ['a.b.c', 'a.b', 'a.b.d']
```

Objects (matching against keys):

```js
var testdata = {
    'a.b.c' : {},
    'a.b'   : {},
    'a'     : {},
    'a.b.d' : {}
};

wildcard('a.*.c', testdata); // { 'a.b.c': {} }
```

While the library works in Node, if you are are looking for file-based
wildcard matching then you should have a look at:

<https://github.com/isaacs/node-glob>
