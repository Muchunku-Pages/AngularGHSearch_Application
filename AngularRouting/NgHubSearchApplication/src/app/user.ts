export class User {

  login:String;
  bio:String;
  avatar_url:string;
  name:String;
  location:String;
  company:String;
  followers:number;
  following:number;
  repos_url:string;
  url:string;

constructor( login:String,   
              bio:String,
             avatar_url:string,
              name:String,
              location:String,
              company:String,
              followers:number,
              following:number,
              repos_url:string,
              url:string)

  { this.bio = bio;
    this.login = login;
    this.avatar_url = avatar_url;
    this.name= name;
    this.location = location;
    this.company=company;
    this.followers=followers;
    this.following=following;
    this.repos_url=repos_url;
    this.url=url                     }











}
