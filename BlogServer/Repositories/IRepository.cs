
using System.Linq;
using System.Collections.Generic;
using BlogServer.Models;
namespace BlogServer.Repositories
{
    public interface IRepository<T> where T : BaseModel
    {
        IEnumerable<T> GetAll();
        T Get(long id);
        void Insert(T entity);        
        void Update(T entity);
        void Delete(T entity);
    }
}