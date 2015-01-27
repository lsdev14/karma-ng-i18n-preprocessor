Add content something like the jade one below.  It should explain how to do it and talk about the configuration.  Any valid i18n config will can be passed in.  The one that is required is the path to the config file.

https://github.com/ojdx/karma-jade-preprocessor

```
   preprocessors: {
            //'content/shared/views/caiAbout.jade': 'ng-i18n',
           // 'content/shared/views/*.jade': 'ng-noScripts',
            'content/shared/views/**/*.jade': ['ng-i18n','ng-jade2js']

        },

        ngJade2JsPreprocessor: {
            moduleName: 'cai.templates'

        },
        ngi18nPreprocessor: {
            i18n : {
                "directory" : "./test/mocks/content"
            }
        },


```