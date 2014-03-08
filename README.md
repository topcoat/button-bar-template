Button Bar Template
===================

This module supplies an optimized precompiled [lodash](lodash.com/docs#template) template for use in the browser.

Install
-------
`npm i topcoat-button-bar-template --save`

Usage
-----

```
var ButtonBar = require('topcoat-button-bar-template');

  var container = document.querySelector('.container');
  container.innerHTML = ButtonBar({buttons: [
    {'label':'a'},
    {'label':'b'},
    {'label':'c'},
    {'label':'d'}
  ]});

```

Look in the
[example](https://github.com/topcoat/button-bar-template/blob/master/example) directory for more details.

Build
-----

The example uses [browserify](http://browserify.org/) for JavaScript bundles
and [resinate](http://github.com/kristoferjoseph/resinate) for CSS bundles to cut down on the
rigmarole of supplying modules to the browser.

If you want to play with the example you can make changes then update the
output by opening terminal and typing `npm run build`.

Look at the `scripts` section of
[package.json](https://github.com/topcoat/button-bar-template/blob/master/package.json#L6) for more details.

Tests
-----

To run the tests open terminal and type:
```
npm install
npm test
```
