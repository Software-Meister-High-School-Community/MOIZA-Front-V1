export interface IRefreshTokenResponse {
  access_token: string;
  refresh_token: string;
  expired_at: Date;
}

export interface IFindIdResponse {
  account_id: string;
  name: string;
}

export interface IPostAuthcodeResponse {
  email: string;
}

export interface ILoginResponse extends IRefreshTokenResponse {}
