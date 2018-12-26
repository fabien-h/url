import urlTestRegex from './urlTestRegex';
import { IURLParsed } from './types';

/**
 * Parse an url to give an object
 *
 * @param url
 */
const parse = (url: string): IURLParsed | boolean => {
  /**
   * Manual check
   */
  if (!url || typeof url !== 'string') {
    return false;
  }

  /**
   * Test if we have a valid url
   */
  const isValidURL = urlTestRegex.test(url);

  /**
   * Init the variables
   */
  let baseURL: string | Array<string> = decodeURIComponent(url);
  let auth: { [key: string]: string } = {};
  let domain: string | null = null;
  let domainChain: Array<string> | null = null;
  let hash: string | null = null;
  let host: string | null = null;
  let hostname: string | null = null;
  let href = url;
  let origin: string | null = null;
  let path: string | null = null;
  let pathname: string | null = null;
  let port: string | null = null;
  let protocol: string | null = null;
  let query: string | null = null;
  let queryParams: { [key: string]: string | Array<string> } = {};
  let search: string | null = null;
  let tld: string | null = null;

  /**
   * Build the protocol
   */
  baseURL = baseURL.split('//');
  if (baseURL.length > 1) {
    protocol = baseURL[0] || null;
    baseURL = baseURL[1];
  } else {
    baseURL = baseURL[0];
  }

  /**
   * Build the auth
   */
  baseURL = baseURL.split('@');
  if (baseURL.length > 1) {
    const authData = baseURL[0].split(':');
    auth = {
      password: authData[1] || '',
      username: authData[0] || '',
    };
    baseURL = baseURL[1];
  } else {
    baseURL = baseURL[0];
  }

  /**
   * Build the hash
   */
  baseURL = baseURL.split('#');
  if (baseURL.length > 1) {
    hash = `${baseURL[1]}`;
  }
  baseURL = baseURL[0];

  /**
   * Build the search
   */
  baseURL = baseURL.split('?');
  if (baseURL.length > 2) {
    console.error('Malformed URL: multiple searches.');
  } else if (baseURL.length === 2) {
    search = `?${baseURL[1]}`;
    query = baseURL[1];
    query.split('&').forEach(query => {
      const queryData = query.split('=');
      const key = String(queryData[0]);
      const value = String(queryData[1]);
      if (!queryParams[key]) {
        queryParams[key] = value;
      } else if (typeof queryParams[key] === 'string') {
        queryParams[key] = [queryParams[key] as string, value];
      } else {
        queryParams[key] = [...(queryParams[key] as Array<string>), value];
      }
    });
  }
  baseURL = baseURL[0];

  /**
   * Build the path
   */
  baseURL = baseURL.split('/');
  if (baseURL.length === 1) {
    pathname = '/';
  } else {
    pathname = '/' + baseURL.slice(1).join('/');
  }
  path = (pathname || '') + (search || '');
  baseURL = baseURL[0] || '';

  /**
   * Build the host, domain
   */
  baseURL = baseURL.split('/');
  host = baseURL[0] || '';
  const hostData = host.split(':');
  if (hostData.length === 2) {
    port = hostData[1] || null;
  }
  hostname = hostData[0];
  domainChain = hostData[0].split('.').reverse();
  tld = domainChain[0] || null;
  domain = domainChain[1] || null;
  baseURL = baseURL[1];

  /**
   * Build the origin
   */
  origin = host || '';
  if (protocol) {
    if (
      protocol === 'http:' ||
      protocol === 'https:' ||
      protocol === 'ftp:' ||
      protocol === 'file:'
    ) {
      origin = protocol + '//' + host;
    } else {
      protocol = protocol + host;
    }
  }

  return {
    auth,
    domain,
    domainChain,
    hash,
    host,
    hostname,
    href,
    isValidURL,
    origin,
    path,
    pathname,
    port,
    protocol,
    query,
    queryParams,
    search,
    tld,
  };
};

export default parse;
