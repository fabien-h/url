# Readme

Parse URLs to formated objects and build URLs from objects.

## Parsing URLs

You can parse an URL that way:

```JavaScript
import URL from '@acta/url';

const parsedURL = URL.parse('http://username:password@subdomain.domain.tld:8080/foo/bar/baz?key1=value1&key2=value2#hashvalue')

/**
 {
    auth: { password: 'password', username: 'username' },
    domain: 'domain',
    domainChain: ['tld', 'domain', 'subdomain'],
    hash: 'hashvalue',
    host: 'subdomain.domain.tld:8080',
    hostname: 'subdomain.domain.tld',
    href: 'http://username:password@subdomain.domain.tld:8080/foo/bar/baz?key1=value1&key2=value2#hashvalue',
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
  }
  */
```

> The query parser is integrated.

When an element is missing, its value is `null` (ex without hash: `hash: null`).

## Formating an URL

You can format an URL that way:

```JavaScript
import URL from '@acta/url';

const formatedURL = URL.format({
  auth: { password: 'password', username: 'username' },
  domain: 'domain',
  domainChain: ['tld', 'domain', 'subdomain'],
  hash: 'hashvalue',
  host: 'subdomain.domain.tld:8080',
  hostname: 'subdomain.domain.tld',
  href: 'http://username:password@subdomain.domain.tld:8080/foo/bar/baz?key1=value1&key2=value2#hashvalue',
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
})

/**
 * http://username:password@subdomain.domain.tld:8080/foo/bar/baz?key1=value1&key2=value2#hashvalue
 */

```

## Dev

Scripts :

- `npm run dev` to dev (build, test and watch)
- `npm run build` to build the production version
- `npm run release` to release a new version. Relies on [release-it](https://github.com/webpro/release-it) for deployments.
