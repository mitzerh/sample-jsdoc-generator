# JS Doc Generator Example

An example of running [jsdoc-generator](https://github.com/mitzerh/node-jsdoc-generator) within your application to render documentation.

```bash
# install the package
npm install

# run documentation
npm run doc

# view the documentation generated at:
open dest/documentation/
```


The **./doc.js** file has the sample setup to generate the documentation:

```js
/*eslint-env es6, node */
'use strict';

const config = require('./config');
const Helper = require('./helper');
const Generator = require('jsdoc-generator');

const jsdoc = new Generator({
    dest: config.dir.dest + '/documentation',
    paths: [{
        name: 'my.app',
        source: config.dir.base + '/sample/app'
    },
    {
        name: 'my.other.app',
        source: config.dir.base + '/sample/other-app'
    }]
});

jsdoc.generate();
```
