export interface User{
    id:number
    email:string;
    firstName:string;
    lastName:string;
  }

export interface Article{
	id:Number;
    title: String;
	author:User;
    content:String,
    
}

export interface Profile{
    userId:number,
    firstName:string,
    lastName:string,
    email:string,
    articles:Article
}