var test = require('tape'),
    wildcard = require('../');
    
test('general wild card matching tests', function(t) {

    t.plan(5);
    t.ok(wildcard('foo.*', 'foo.bar'), 'foo.* should match foo.bar');
    t.ok(wildcard('foo.*', 'foo'), 'foo.* should match foo');
    t.notOk(wildcard('foo.*', 'bar'), 'foo.* should not match bar');
    t.ok(wildcard('a.*.c', 'a.b.c'), 'a.*.c should match a.b.c');
    t.notOk(wildcard('a.*.c', 'a.b'), 'a.*.c should not match a.b');
});