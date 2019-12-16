using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;

namespace BlogServer.Models
{
    public class Article
    {
        [Key]
        public int Id {get;set;}
        public string Title {get;set;}
        public string Content {get;set;}
        [ForeignKey("UserId")]
        public int UserId {get;set;} 
        
    }
}