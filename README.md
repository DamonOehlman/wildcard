# wildcard

Very simple wildcard matching, which is designed to provide the same functionality that is found in the [eve](https://github.com/DmitryBaranovskiy/eve) eventing library.

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
