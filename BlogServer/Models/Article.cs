using System.ComponentModel.DataAnnotations;
namespace BlogServer.Models
{
    public class Article:BaseModel
    {
        [Key]
        public int Id {get;set;}
        public string Title {get;set;}
        public string Content {get;set;}
        public int UserId {get;set;} 
        public User User { get;set;}
        
    }
}