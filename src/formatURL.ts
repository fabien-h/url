/**
 * Format an URL string form url object
 *
 * @param urlObject
 */
const format = (urlObject: URL.IURLParsed) => {
  /**
   * Fix the protocol
   * => mailto, sftp and others don't have a //
   */
  let protocol = (urlObject.protocol || '').replace(/:/g, '');
  if (
    protocol === 'http' ||
    protocol === 'https' ||
    protocol === 'ftp' ||
    protocol === 'file'
  ) {
    protocol = protocol + '://';
  } else if (protocol !== '') {
    protocol = protocol + ':';
  }

  /**
   * Build the auth
   */
  let auth = '';
  if (urlObject.auth && urlObject.auth.password && urlObject.auth.username) {
    auth = `${urlObject.auth.username}:${urlObject.auth.password}@`;
  }

  /**
   * Build the host
   */
  let host: string | null = urlObject.host || null;
  if (!host || host === '') {
    host = urlObject.hostname || null;
    if (!host) throw new TypeError('At leas a host must be provided.');
    if (urlObject.port) host = `${host}:${urlObject.port}`;
  }

  /**
   * Build the pathname
   */
  let pathname = urlObject.pathname || '';
  if (pathname.substr(0, 1) !== '/') pathname = `/${pathname}`;

  /**
   * Build the search
   */
  let search = urlObject.search || '';
  if (!search && urlObject.query) {
    search = `?${urlObject.query}`;
  }

  /**
   * Build the hash
   */
  let hash = urlObject.hash || '';
  if (hash !== '' && hash.substr(0, 1) !== '#') hash = `#${hash}`;

  const url = protocol + auth + host + pathname + search + hash;

  return url;
};

export default format;
