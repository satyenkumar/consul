export default function(visitable, attribute, collection, text, radiogroup) {
  return {
    visit: visitable('/:dc/services/:service/:node/:id'),
    externalSource: attribute('data-test-external-source', 'h1 span'),
    tabs: radiogroup('tab', [
      'service-checks',
      'node-checks',
      'addresses',
      'upstreams',
      'exposed-paths',
      'tags',
      'meta-data',
    ]),
    serviceChecks: collection('#service-checks [data-test-healthchecks] li', {
      exposed: attribute('data-test-exposed', '[data-test-exposed]'),
    }),
    nodeChecks: collection('#node-checks [data-test-healthchecks] li', {
      exposed: attribute('data-test-exposed', '[data-test-exposed]'),
    }),
    upstreams: collection('#upstreams [data-test-tabular-row]', {
      name: text('[data-test-destination-name]'),
      datacenter: text('[data-test-destination-datacenter]'),
      type: text('[data-test-destination-type]'),
      address: text('[data-test-local-bind-address]'),
    }),
    exposedPaths: collection('#exposed-paths [data-test-tabular-row]', {
      combinedAddress: text('[data-test-combined-address]'),
    }),
    addresses: collection('#addresses [data-test-tabular-row]', {
      address: text('[data-test-address]'),
    }),
    metaData: collection('#meta-data [data-test-tabular-row]', {}),
    proxy: {
      type: attribute('data-test-proxy-type', '[data-test-proxy-type]'),
      destination: attribute('data-test-proxy-destination', '[data-test-proxy-destination]'),
    },
  };
}
