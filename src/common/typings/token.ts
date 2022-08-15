export interface ITokenStorage {
  getAccessToken(): string | null;
  getRefreshToken(): string | null;
  setRefreshToken(refreshToken: string): void;
  setAccessToken(accessToken: string): void;
  removeRefreshToken(): void;
  removeAccessToken(): void;
}

export interface ITokenPayload {
  iat: number;
  exp: number;
  userUuid: string;
}
