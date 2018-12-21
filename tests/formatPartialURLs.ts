/**
 * Test various url parsing
 */
(() => {
  const url = require('../dist_dev/index.js').default;

  describe('Format partial URLs', () => {
    test('URL with hostname only', () => {
      expect(
        url.format({
          auth: {},
          domain: 'google',
          domainChain: ['com', 'google', 'www'],
          hash: null,
          host: 'www.google.com',
          hostname: 'www.google.com',
          href: 'www.google.com',
          isValidURL: false,
          origin: 'www.google.com',
          path: '/',
          pathname: '/',
          port: null,
          protocol: null,
          query: null,
          queryParams: {},
          search: null,
          tld: 'com',
        }),
      ).toEqual('www.google.com/');
    });

    test('URL without protocol', () => {
      expect(
        url.format({
          auth: {},
          domain: 'google',
          domainChain: ['com', 'google', 'www'],
          hash: null,
          host: 'www.google.com',
          hostname: 'www.google.com',
          href: 'www.google.com/foo.html',
          isValidURL: true,
          origin: 'www.google.com',
          path: '/foo.html',
          pathname: '/foo.html',
          port: null,
          protocol: null,
          query: null,
          queryParams: {},
          search: null,
          tld: 'com',
        }),
      ).toEqual('www.google.com/foo.html');
    });
  });
})();
