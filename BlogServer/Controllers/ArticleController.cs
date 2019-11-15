using Microsoft.AspNetCore.Mvc;
using BlogServer.Repositories;
using BlogServer.Models;
using System.Collections.Generic;

namespace BlogServer.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class ArticleController: Controller
    {
        private IRepository<Article> articleRepo;
        //  private IRepository<Book> repoBook;
        public ArticleController(IRepository<Article> articleRepo)
        {
            this.articleRepo = articleRepo;
            // this.repoBook = repoBook;
        }

        [HttpGet("{id}")]
        public Article GetArticle(int id){
            return articleRepo.Get(id);
        }
        [HttpPost]
        public Article PostArticle(Article article){
            articleRepo.Insert(article);

            return articleRepo.Get(article.Id);
        }

         [HttpGet]
        public IEnumerable<Article> GetAllArticle(){
            return articleRepo.GetAll();
        }

        [HttpPut]
        public Article PutArticle(Article article)
        {
            articleRepo.Update(article);
            return articleRepo.Get(article.Id);
        }

        [HttpDelete("{id}")]
        public Article DeleteArticle(int id)
        {
            Article article = articleRepo.Get(id);
            articleRepo.Delete(article);
            return article;
        }
    }
}