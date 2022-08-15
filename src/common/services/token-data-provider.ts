import jwtDecode from 'jwt-decode';

import { ITokenPayload } from '../typings';

export class TokenDataProvider {
  public static getUserUuid(tokenUuid: string) {
    return TokenDataProvider.decodeToken(tokenUuid).userUuid;
  }

  public static getTokenExpiration(tokenUuid: string) {
    return TokenDataProvider.decodeToken(tokenUuid).exp;
  }

  public static decodeToken(token: string) {
    return jwtDecode<ITokenPayload>(token);
  }
}
