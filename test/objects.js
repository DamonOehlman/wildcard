var wildcard = require('../wildcard'),
    expect = require('expect.js'),
    testdata = {
        'a.b.c' : {},
        'a.b'   : {},
        'a'     : {},
        'a.b.d' : {}
    };
    
describe('object result matching tests', function() {
    it('should return 4 matches for a.*', function() {
        var matches = wildcard('a.*', testdata);
        
        expect(matches['a.b.c']).to.be.ok();
        expect(matches['a.b']).to.be.ok();
        expect(matches['a']).to.be.ok();
        expect(matches['a.b.d']).to.be.ok();
    });
    
    it('should return 3 matches for a.b.*', function() {
        var matches = wildcard('a.b.*', testdata);
        
        expect(matches['a.b.c']).to.be.ok();
        expect(matches['a.b']).to.be.ok();
        expect(matches['a']).to.not.be.ok();
        expect(matches['a.b.d']).to.be.ok();
    });
    
    it('should return 1 matches for a.*.c', function() {
        var matches = wildcard('a.*.c', testdata);
        
        expect(matches['a.b.c']).to.be.ok();
        expect(matches['a.b']).to.not.be.ok();
        expect(matches['a']).to.not.be.ok();
        expect(matches['a.b.d']).to.not.be.ok();
    });
    
    it('should return 0 matches for b.*.d', function() {
        var matches = wildcard('b.*.d', testdata);
        
        expect(matches['a.b.c']).to.not.be.ok();
        expect(matches['a.b']).to.not.be.ok();
        expect(matches['a']).to.not.be.ok();
        expect(matches['a.b.d']).to.not.be.ok();
    });
});