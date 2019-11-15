namespace BlogServer.Models
{
    public class Article:BaseModel
    {
        public int Id {get;set;}
        public string Title {get;set;}
        public int AuthorId {get;set;}
        public string Content {get;set;}
    }
}