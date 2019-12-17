using System.Collections.Generic;
using BlogServer.Models;
namespace BlogServer.ViewModels
{
    public class ProfileViewModel
    {
        public int UserId {get;set;}
        public string FirstName {get;set;}
        public string LastName {get;set;}
        public string Email {get;set;}
        public List<ArticleViewModel> Articles {get;set;}

    }
}