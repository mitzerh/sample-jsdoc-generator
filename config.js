/*eslint-env es6, node */
'use strict';

const dir = __dirname;

const Config = (() => {

    let config = {};

    /**
     * directories
     */
    config.dir = {
        base: dir,
        dest: dir + '/dest'
    };

    return config;

})();

module.exports = Config;
