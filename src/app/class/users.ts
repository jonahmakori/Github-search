export class Users {
    
    constructor (public login:string,public name:string,public avatar_url:string,public html_url: string,public public_gist: string, public followers_url:string ,public following_url:string      ,public company:string, public public_repos:number, public hireable:boolean, public bio: string, public created_at:Date, public followers:number, public following:number){

        this.name=name;
        this.login = login;
        this.avatar_url = avatar_url;
        this.html_url = html_url;
        this.followers_url = followers_url;
        this.following_url = following_url;                
        this.company = company;
        this.public_repos = public_repos;
        this.hireable = hireable;
        this.created_at = created_at;
        this.followers = followers;
        this.following = following;

    }
}
