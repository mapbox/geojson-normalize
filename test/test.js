var test = require('tap').test,
    fs = require('fs'),
    normalize = require('../');

function fixture(t, name) {
    t.deepEqual(
        normalize(JSON.parse(fs.readFileSync(__dirname + '/data/' + name + '.input.geojson'))),
        JSON.parse(fs.readFileSync(__dirname + '/data/' + name + '.output.geojson')),
        name);
}

test('normalize', function(t) {
    fixture(t, 'feature');
    fixture(t, 'geometry');
    fixture(t, 'featurecollection');
    fixture(t, 'feature_string');
    fixture(t, 'geometry_string');
    fixture(t, 'featurecollection_string');
    t.end();
});
