<img width="100" height="28" src="https://raw.githubusercontent.com/fabien-h/url/master/img/acta.png"/>
<img width="84" height="28" src="https://raw.githubusercontent.com/fabien-h/url/master/img/url.png"/>

# URL @acta/url

[![Greenkeeper badge](https://badges.greenkeeper.io/fabien-h/url.svg)](https://greenkeeper.io/)

To parse URLs to formated objects and build URLs from objects.

## Table of Contents

- [Parsing URLs](#parsing-urls)
- [Formating URLs](#formating-urls)
- [Dev scripts](#dev-scripts)

## Parsing URLs

<sup>[back to ToC &uarr;](#table-of-contents)</sup>

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

## Formating URLs

<sup>[back to ToC &uarr;](#table-of-contents)</sup>

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

## Dev scripts

<sup>[back to ToC &uarr;](#table-of-contents)</sup>

- `npm run dev` to dev (build, test and watch)
- `npm run build` to build the production version
- `npm run release` to release a new version. Relies on [release-it](https://github.com/webpro/release-it) for deployments.

To develop in local using the package from another application or package, go for a symlink: `npm link /the/absolute/path/url`.

To publish: `npm publish --access=public`.
