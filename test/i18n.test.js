var expect = require('expect.js');
var i18nPreProcessor = require('../lib/i18n.js');
var LOGGER_STUB = {
  create: function () {
    return {
      debug: function () {}
    };
  }
};

describe('i18nPreProcessor',function() {

    describe('default behavior (no config)',function() {
        var compileFn=i18nPreProcessor(LOGGER_STUB);
        var JADE_SNIPPET='span(id="lblTest") #{__("lblTest")}';
        var jade_i18n='';

        before(function(done) {
            compileFn(JADE_SNIPPET,null,function(result) {
                jade_i18n=result;
                done();
            });
        });

        it('should succeed',function() {
            console.log('     Before: ' + JADE_SNIPPET);            

            expect(jade_i18n).to.eql('span(id="lblTest") #{__("lblTest")}');
            
            console.log('     After:  '+jade_i18n);
            console.log();
        });

    });

    describe('i18n locals',function() {

        var LOCALS_CONFIG={
            i18n : {
                "directory" : "./test/mocks/content"
            }
        };

        var compileFn=i18nPreProcessor(LOGGER_STUB, null, LOCALS_CONFIG);
        var JADE_SNIPPET='span(id="lblTest") #{__("lblTest")}';
        var jade_i18n='';
       

        before(function(done) {
            compileFn(JADE_SNIPPET,null,function(result) {
                jade_i18n=result;
                done();
            });
        });

        it('should contain the `locals` data',function() {
            console.log('     Before: ' + JADE_SNIPPET);            

            expect(jade_i18n).to.eql('span(id="lblTest") Hello');
            
            console.log('     After:  ' + jade_i18n);
            console.log();
        });

    });

});

