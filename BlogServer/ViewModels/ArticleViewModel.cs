using BlogServer.Models;

namespace BlogServer.ViewModels
{
    public class ArticleViewModel
    {
        public int Id {get;set;}
        public string Title {get;set;}
        public string Content {get;set;}
        public User Author { get;set;}
    }    
}

