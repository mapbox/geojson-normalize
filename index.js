module.exports = normalize;

var types = {
    Point: 'geometry',
    MultiPoint: 'geometry',
    LineString: 'geometry',
    MultiLineString: 'geometry',
    Polygon: 'geometry',
    MultiPolygon: 'geometry',
    GeometryCollection: 'geometry',
    Feature: 'feature',
    FeatureCollection: 'featurecollection'
};

/**
 * Converts strings to Floats.
 *
 * @param {array} coordinates coordinates
 */
function numberify(coordinates) {
    return coordinates.map(function(coord) {
        if (coord.constructor === Array) {
            return coord.map(function(c) {
                if (c.constructor === Array) {
                    return c.map(parseFloat);
                } else {
                    return parseFloat(c);
                }
            });
        } else {
            return parseFloat(coord);
        }
    });
}

/**
 * Normalize a GeoJSON feature into a FeatureCollection.
 *
 * @param {object} gj geojson data
 * @returns {object} normalized geojson data
 */
function normalize(gj) {
    if (!gj || !gj.type) return null;
    var type = types[gj.type];
    if (!type) return null;

    if (type === 'geometry') {
        gj.coordinates = numberify(gj.coordinates);
        return {
            type: 'FeatureCollection',
            features: [{
                type: 'Feature',
                properties: {},
                geometry: gj
            }]
        };
    } else if (type === 'feature') {
        gj.geometry.coordinates = numberify(gj.geometry.coordinates);
        return {
            type: 'FeatureCollection',
            features: [gj]
        };
    } else if (type === 'featurecollection') {
        gj.features = gj.features.map(function(feature) {
            feature.geometry.coordinates = numberify(feature.geometry.coordinates);
            return feature;
        });
        return gj;
    }
}
