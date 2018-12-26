/**
 * Test various url parsing
 */
(() => {
  const URL = require('../dist/index.umd.js');

  describe('Parse partial URLs', () => {
    test('URL with hostname only', () => {
      expect(URL.parse('www.google.com')).toEqual({
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
      });
    });

    test('URL without protocol', () => {
      expect(URL.parse('//www.google.com/foo.html')).toEqual({
        auth: {},
        domain: 'google',
        domainChain: ['com', 'google', 'www'],
        hash: null,
        host: 'www.google.com',
        hostname: 'www.google.com',
        href: '//www.google.com/foo.html',
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
      });
    });
  });
})();
