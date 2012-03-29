var wildcard = require('../pkg/cjs/wildcard'),
    expect = require('expect.js');
    
describe('general wild card matching tests', function() {
    it('foo.* should match foo.bar', function() {
        expect(wildcard('foo.*', 'foo.bar')).to.be.ok();
    });
    
    it('foo.* should match foo', function() {
        expect(wildcard('foo.*', 'foo')).to.be.ok();
    });

    it('foo.* should not match bar', function() {
        expect(wildcard('foo.*', 'bar')).to.not.be.ok();
    });

    it('a.*.c should match a.b.c', function() {
        expect(wildcard('a.*.c', 'a.b.c')).to.be.ok();
    });
    
    it('a.*.c should not match a.b', function() {
        expect(wildcard('a.*.c', 'a.b')).to.not.be.ok();
    });
});