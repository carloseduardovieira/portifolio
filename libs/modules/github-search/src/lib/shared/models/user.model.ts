export class User {
  public name: string;
  public email: string;
  public createdAt: string;
  public profileLink: string;
  public thumbUrl: string;
  public username: string;
  public url: string;
  public following: number;
  public followers: number;
  public repositories: number;

  //eslint-disable-next-line
  constructor(data?: any) {
    const {
      name,
      email,
      created_at,
      html_url,
      avatar_url,
      login,
      url,
      following,
      followers,
      public_repos,
    } = data || {};

    this.name = name;
    this.email = email ? email : 'Privado';
    this.createdAt = created_at;
    this.profileLink = html_url;
    this.thumbUrl = avatar_url;
    this.username = login;
    this.url = url;
    this.following = following;
    this.followers = followers;
    this.repositories = public_repos;
  }
}
