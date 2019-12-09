using Microsoft.EntityFrameworkCore;

using BlogServer.Models;

namespace BlogServer.Data
{
    

public class DatabaseContext : DbContext
{
    public DatabaseContext(DbContextOptions<DatabaseContext> options):base(options)
    {

    }

    public DbSet<Article> Articles {get;set;}

    public DbSet<User> Users { get; set; }
}

}