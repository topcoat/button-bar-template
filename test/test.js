var test = require('tap').test,
    _ = require('lodash'),
    data = require('./fixtures/data.json'),
    fs = require('fs'),
    template = fs.readFileSync('../src/button-bar.tpl');

test('Button bar template', function(t) {
    var actual = _.template(template, data)
        .replace(/(\n|\s+)/g, ''),
        expected = fs.readFileSync('./expected/button-bar.html')
            .toString()
            .replace(/(\n|\s+)/g, '');

    t.equal(actual, expected, 'Output should match');
    t.end();
});
