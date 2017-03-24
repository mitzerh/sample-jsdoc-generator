/*eslint-env es6, node */
'use strict';

const config = require('./config');
const Helper = require('./helper');
const Generator = require('jsdoc-generator');

const jsdoc = new Generator({
    dest: config.dir.dest + '/documentation',
    paths: [
        {
            name: 'my.app',
            source: config.dir.base + '/sample/app'
        },
        {
            name: 'my.other.app',
            source: config.dir.base + '/sample/other-app'
        }

    ]
});

jsdoc.generate();
