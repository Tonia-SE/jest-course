import { UrlWithParsedQuery, parse } from "url";

export class Utils {

  public static parseString(url: string): UrlWithParsedQuery {
    if(!url) {
      throw new Error('empty url resieved')
    } 
    return parse(url, true);
  }

  /*istanbul ignore next*/
  public static toUpperCase(arg: string): string {
    return arg.toUpperCase();
  }
}
