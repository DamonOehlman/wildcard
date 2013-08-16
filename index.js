/**
  # wildcard

  Very simple wildcard matching, which is designed to provide the same
  functionality that is found in the
  [eve](https://github.com/adobe-webplatform/eve) eventing library.

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
**/
(function (root, factory) {
  if (typeof exports === 'object') {
    module.exports = factory();
  } else if (typeof define === 'function' && define.amd) {
    define([], factory);
  } else {
    root.wildcard = factory();
  }
}(this, function () {
  'use strict';

  var reSep = /[\/\.]/;
  
  function WildcardMatcher(text) {
    this.parts = (text || '').split(reSep);
  }
  
  WildcardMatcher.prototype.match = function(input) {
    var matches = true;
    var parts = this.parts;
    var ii;
    var partsCount = parts.length;
    var testParts;
    
    if (typeof input == 'string' || input instanceof String) {
      testParts = (input || '').split(reSep);
      for (ii = 0; matches && ii < partsCount; ii++) {
        matches = parts[ii] === '*' || parts[ii] === testParts[ii];
      }
    }
    else if (typeof input.splice == 'function') {
      matches = [];
      
      for (ii = input.length; ii--; ) {
        if (this.match(input[ii])) {
          matches[matches.length] = input[ii];
        }
      }
    }
    else if (typeof input == 'object') {
      matches = {};
      
      for (var key in input) {
        if (this.match(key)) {
          matches[key] = input[key];
        }
      }
    }
    
    return matches;
  };
  
  function wildcard(text, test) {
    var matcher = new WildcardMatcher(text);
    
    if (typeof test != 'undefined') {
      return matcher.match(test);
    }

    return matcher;
  }
  
  return typeof wildcard != 'undefined' ? wildcard : undefined;
}));