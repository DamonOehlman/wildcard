var wildcard = require('../dist/commonjs/wildcard'),
    expect = require('expect.js'),
    testdata = [
        'a.b.c',
        'a.b',
        'a',
        'a.b.d'
    ];
    
describe('array result matching tests', function() {
    it('should return 4 matches for a.*', function() {
        var matches = wildcard('a.*', testdata);
        
        expect(matches).to.have.length(4);
    });
    
    it('should return 3 matches for a.b.*', function() {
        var matches = wildcard('a.b.*', testdata);
        
        expect(matches).to.have.length(3);
    });
    
    it('should return 1 matches for a.*.c', function() {
        var matches = wildcard('a.*.c', testdata);
        
        expect(matches).to.have.length(1);
    });
    
    it('should return 0 matches for b.*.d', function() {
        var matches = wildcard('b.*.d', testdata);
        
        expect(matches).to.have.length(0);
    });
});