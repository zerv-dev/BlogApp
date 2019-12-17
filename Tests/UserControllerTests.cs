using System;
using Xunit;
using BlogServer.Data;
using BlogServer.Controllers;
using Microsoft.EntityFrameworkCore;
using BlogServer.Models;
namespace Tests
{

        public class UserControllerTest
        {
            [Fact]
            async public void Add_user_to_database(){
            var options = new DbContextOptionsBuilder<DatabaseContext>().UseInMemoryDatabase(databaseName: "test_db").Options;

            using (var context = new DatabaseContext(options))
            {   
                var userController = new UserController(context);
                User user = new User(){
                    Email="john.doe@gmail.com",
                    FirstName="John",
                    LastName="Doe"
                };
                await userController.PostUser(user);

            }

            using (var context = new DatabaseContext(options))
            {
                User user = await context.Users.FindAsync(1);
                Assert.NotNull(user);
            }
            
        }
        [Fact]
            public void Email_is_valid(){
            var options = new DbContextOptionsBuilder<DatabaseContext>().UseInMemoryDatabase(databaseName: "test_db").Options;

                using (var context = new DatabaseContext(options))
            {   
                var userController = new UserController(context);
                string email = "john.doe@mail.com";
                bool validity = userController.IsValidEmail(email);
                Assert.Equal(validity,true);
            }
            }
    }
            
}