using System;
using Xunit;
using BlogServer.Data;
using BlogServer.Controllers;
using Microsoft.EntityFrameworkCore;
using BlogServer.Models;
namespace Tests
{
    public class UnitTest1
    {
        [Fact]
        async public void Add_article_to_database()
        {
            var options = new DbContextOptionsBuilder<DatabaseContext>().UseInMemoryDatabase(databaseName: "test_db").Options;


            using (var context = new DatabaseContext(options))
            {   
                var userController = new UserController(context);
                var articleController = new ArticleController(context);
                User user = new User(){
                    Email= "example@.email",
                    FirstName= "John",
                    LastName="Doe",
                    Id = 1
                };
                // await userController.PostUser(user);
                Article article = new Article()
                {
                    Title = "new article",
                    Content="This article isnt about anything",
                    UserId= user.Id
                };
                await articleController.PostArticle(article);
            
            }
            using (var context = new DatabaseContext(options))
            {
                User user = await context.Users.FindAsync(1);
                Article article = await context.Articles.FindAsync(1);
                int count  = await context.Articles.CountAsync();
                Assert.Equal(1,count);
                Assert.Equal(user.Id,article.UserId);
            }
        }

        




    }
}