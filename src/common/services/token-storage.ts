import { ITokenStorage } from '../typings';

const ACCESS_TOKEN_KEY = 'accessToken';
const REFRESH_TOKEN_KEY = 'refreshToken';

export class TokenStorage implements ITokenStorage {
  constructor(private readonly storage: Storage) {}

  public getAccessToken(): string | null {
    return this.storage.getItem(ACCESS_TOKEN_KEY);
  }

  public getRefreshToken(): string | null {
    return this.storage.getItem(REFRESH_TOKEN_KEY);
  }

  public setAccessToken(accessToken: string): void {
    this.storage.setItem(ACCESS_TOKEN_KEY, accessToken);
  }

  public setRefreshToken(refreshToken: string): void {
    this.storage.setItem(REFRESH_TOKEN_KEY, refreshToken);
  }

  public removeAccessToken(): void {
    this.storage.removeItem(ACCESS_TOKEN_KEY);
  }

  public removeRefreshToken(): void {
    this.storage.removeItem(REFRESH_TOKEN_KEY);
  }
}
