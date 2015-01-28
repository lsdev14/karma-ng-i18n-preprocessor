var i18n = require('i18n');

var createi18nPreprocessor = function(logger, basePath, config) {
    config = typeof config === 'object' ? config : {};
    var localize;
    if(typeof config.i18n === 'object') {
        localize = true;
        i18n.configure(config.i18n);
    }

    var log = logger.create('preprocessor.i18n');

    return function(content, file, done) {
        var processed;
        if(localize) {
            try {
                var re = /#{__\("(\S\w*\S)"\)}/g
                while ((myArray = re.exec(content)) !== null)
                {
                    var localized = i18n.__(myArray[1])
                    content = content.replace(myArray[0],localized);
                }
            } catch (e) {
                log.error('%s\n  at %s', e.message);
            }
        }
        // console.log(content);
        done(content);
    };
};

createi18nPreprocessor.$inject=['logger','config.basePath','config.ngi18nPreprocessor'];

module.exports = createi18nPreprocessor;
