export interface IURLParsed {
  readonly auth?: {
    password?: string;
    username?: string;
  };
  readonly domain?: string | null;
  readonly domainChain?: Array<string> | null;
  readonly hash?: string | null;
  readonly host?: string | null;
  readonly hostname?: string | null;
  readonly href?: string | null;
  readonly isValidURL?: boolean;
  readonly origin?: string | null;
  readonly path?: string | null;
  readonly pathname?: string | null;
  readonly port?: string | null;
  readonly protocol?: string | null;
  readonly query?: string | null;
  readonly queryParams?: {
    [key: string]: string | Array<string>;
  };
  readonly search?: string | null;
  readonly tld?: string | null;
}

export interface IURL {
  readonly parse: (url: string) => IURLParsed | boolean;
  readonly format: (urlObject: IURLParsed) => string;
}
