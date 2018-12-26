/**
 * Test various url parsing
 */
(() => {
  const URL = require('../dist/index.js').default;

  describe('Format full URLs', () => {
    test('Sample URL with all params', () => {
      expect(
        URL.format({
          auth: { password: 'password', username: 'username' },
          domain: 'domain',
          domainChain: ['tld', 'domain', 'subdomain'],
          hash: 'hashvalue',
          host: 'subdomain.domain.tld:8080',
          hostname: 'subdomain.domain.tld',
          href:
            'http://username:password@subdomain.domain.tld:8080/foo/bar/baz?key1=value1&key2=value2#hashvalue',
          isValidURL: true,
          origin: 'http://subdomain.domain.tld:8080',
          path: '/foo/bar/baz?key1=value1&key2=value2',
          pathname: '/foo/bar/baz',
          port: '8080',
          protocol: 'http:',
          query: 'key1=value1&key2=value2',
          queryParams: { key1: 'value1', key2: 'value2' },
          search: '?key1=value1&key2=value2',
          tld: 'tld',
        }),
      ).toEqual(
        'http://username:password@subdomain.domain.tld:8080/foo/bar/baz?key1=value1&key2=value2#hashvalue',
      );
    });

    test('Google homepage', () => {
      expect(
        URL.format({
          auth: {},
          domain: 'google',
          domainChain: ['com', 'google', 'www'],
          hash: null,
          host: 'www.google.com',
          hostname: 'www.google.com',
          href: 'https://www.google.com/',
          isValidURL: true,
          origin: 'https://www.google.com',
          path: '/',
          pathname: '/',
          port: null,
          protocol: 'https:',
          query: null,
          queryParams: {},
          search: null,
          tld: 'com',
        }),
      ).toEqual('https://www.google.com/');
    });

    test('Google search page', () => {
      expect(
        URL.format({
          auth: {},
          domain: 'google',
          domainChain: ['com', 'google', 'www'],
          hash: null,
          host: 'www.google.com',
          hostname: 'www.google.com',
          href:
            'https://www.google.com/search?safe=off&source=hp&ei=RpUOXJj4GIzuac3Xq1A&q=test+search&btnK=Recherche+Google&oq=test+search',
          isValidURL: true,
          origin: 'https://www.google.com',
          path:
            '/search?safe=off&source=hp&ei=RpUOXJj4GIzuac3Xq1A&q=test+search&btnK=Recherche+Google&oq=test+search',
          pathname: '/search',
          port: null,
          protocol: 'https:',
          query:
            'safe=off&source=hp&ei=RpUOXJj4GIzuac3Xq1A&q=test+search&btnK=Recherche+Google&oq=test+search',
          queryParams: {
            safe: 'off',
            source: 'hp',
            ei: 'RpUOXJj4GIzuac3Xq1A',
            q: 'test+search',
            btnK: 'Recherche+Google',
            oq: 'test+search',
          },
          search:
            '?safe=off&source=hp&ei=RpUOXJj4GIzuac3Xq1A&q=test+search&btnK=Recherche+Google&oq=test+search',
          tld: 'com',
        }),
      ).toEqual(
        'https://www.google.com/search?safe=off&source=hp&ei=RpUOXJj4GIzuac3Xq1A&q=test+search&btnK=Recherche+Google&oq=test+search',
      );
    });

    test('Url with an array of params in the query', () => {
      expect(
        URL.format({
          auth: {},
          domain: 'example',
          domainChain: ['com', 'example'],
          hash: null,
          host: 'example.com',
          hostname: 'example.com',
          href:
            'http://example.com/?key1=value1&key2=value2&key2=value3&key3=value1&key3=value2&key3=value3',
          isValidURL: true,
          origin: 'http://example.com',
          path:
            '/?key1=value1&key2=value2&key2=value3&key3=value1&key3=value2&key3=value3',
          pathname: '/',
          port: null,
          protocol: 'http:',
          query:
            'key1=value1&key2=value2&key2=value3&key3=value1&key3=value2&key3=value3',
          queryParams: {
            key1: 'value1',
            key2: ['value2', 'value3'],
            key3: ['value1', 'value2', 'value3'],
          },
          search:
            '?key1=value1&key2=value2&key2=value3&key3=value1&key3=value2&key3=value3',
          tld: 'com',
        }),
      ).toEqual(
        'http://example.com/?key1=value1&key2=value2&key2=value3&key3=value1&key3=value2&key3=value3',
      );
    });
  });
})();
