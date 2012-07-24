# wildcard

Very simple wildcard matching, which is designed to provide the same functionality that is found in the [eve](https://github.com/DmitryBaranovskiy/eve) eventing library.

<a href="http://travis-ci.org/#!/DamonOehlman/wildcard"><img src="https://secure.travis-ci.org/DamonOehlman/wildcard.png" alt="Build Status"></a>

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

While the library works in Node, if you are are looking for file-based wildcard matching then you should have a look at:

https://github.com/isaacs/node-glob
