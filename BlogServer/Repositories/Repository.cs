using BlogServer.Data;
using System.Collections.Generic;
using Microsoft.EntityFrameworkCore;
using BlogServer.Models;


namespace BlogServer.Repositories
{
    public class Repository<T>: IRepository<T> where T : BaseModel
    {
        private readonly DatabaseContext context;
        private DbSet<T> entities;

         public Repository(DatabaseContext context)
        {
            this.context = context;
            entities = context.Set<T>();
        }
        public IEnumerable<T> GetAll()
        {
            return entities.AsNoTracking();
        }
        public T Get(long id)
        {
             return entities.SingleOrDefaultAsync(s => s.Id == id).Result;
        }

        public void Insert(T entity){
             entities.Add(entity);
            context.SaveChanges();
        }

       
        public void Update(T entity)
        {
            // if (entity == null)
            // {
            //     throw new ArgumentNullException("entity");
            // }
            context.Update(entity);
            context.SaveChanges();
        }

        public void Delete(T entity)
        {
            // if (entity == null)
            // {
            //     throw new ArgumentNullException("entity");
            // }
            entities.Remove(entity);
            context.SaveChanges();
        }
    }
}
