export class AccessToken {
  constructor(
    public access_token: string,
    public refresh_token?: string,
    public token_type?: string,
    public expires_in?: number,
  ) {  }
}
