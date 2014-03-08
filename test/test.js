var test = require('tap').test,
    _ = require('lodash-node'),
    data = require('./fixtures/data.json'),
    fs = require('fs'),
    template = fs.readFileSync('../src/button-bar.tpl'),
    expected = fs.readFileSync('./expected/button-bar.html')
        .toString()
        .replace(/(\n|\s+)/g, ''),
    compiled = require('..');

test('Button bar template', function(t) {
    var actual = _.template(template, data)
        .replace(/(\n|\s+)/g, '');

    t.equal(actual, expected, 'Output should match');
    t.end();
});

test('Precompiled button bar template', function(t) {
    var actual = compiled(data)
        .replace(/(\n|\s+)/g, '');

    t.equal(actual, expected, 'Output should match');
    t.end();
});
