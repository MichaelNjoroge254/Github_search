export class User {
    constructor(
        public avatar_url: string,
        public name: string,
        public bio: string,
        public login :string,
        public company: string,
        public location: string,
        public followers: number,
        public following: number,
        public repos_url:string,
        public searchTerm:string,
        public public_repos:string,

    ){

    }
    
}
