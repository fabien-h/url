declare namespace URL {
  export interface IURL {
    readonly parse: (url: string) => URL.IURLParsed | boolean;
    readonly format: (urlObject: URL.IURLParsed) => string;
  }
}
