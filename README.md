# geojson-normalize

Normalize any GeoJSON object into a GeoJSON FeatureCollection.

## install

    npm install --save @mapbox/geojson-normalize

## api

    normalize(object) -> featurecollection object

## publishing

Pull Requests to `main` automatically publish a new version based on the PR's title prefix (`major:`, `minor:` or `patch:`) to the npmjs registry.

The published version in the registry is the source of truth for the package version, but you can manually increment the `package.json`'s `version`. 

### pre-release versions on other branches

For testing in downstream projects, you can manually trigger the "NPM release" workflow on a branch to publish a pre-release tagged with the short commit sha (e.g. `0.0.1-aa79c6a`) under the npm `prerelease` dist-tag, without affecting `latest`. Check the workflow results for the published version.
