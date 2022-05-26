export interface IRefreshTokenResponse {
  access_token: string;
  refresh_token: string;
  expired_at: string;
}

export interface IFindIdResponse {
  account_id: string;
  name: string;
}

export interface IPostAuthcodeResponse {
  email: string;
}

export interface ILoginResponse extends IRefreshTokenResponse {}
