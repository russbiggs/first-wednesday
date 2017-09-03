var test = require('tape');
var wednesday = require('./');

test('check dates', function(t) {
    t.plan(3);
    var day = new Date(2017, 8, 2, 0, 0, 0, 0);
    var result = new Date(2017, 8, 6, 23, 59, 59, 999);
    t.equal(+wednesday(day), +result);
    day = new Date(2017, 8, 7, 0, 0, 0, 0);
    result = new Date(2017, 9, 4, 23, 59, 59, 999);
    t.equal(+wednesday(day), +result);
    day = new Date(2017, 8, 6, 23, 59, 59, 999);
    result = new Date(2017, 8, 6, 23, 59, 59, 999);
    t.equal(+wednesday(day), +result);
});