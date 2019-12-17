using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using BlogServer.Data;
using BlogServer.Models;
using BlogServer.ViewModels;
using System.Security.Claims;


namespace BlogServer.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class UserController : ControllerBase
    {
        private readonly DatabaseContext _context;

        public UserController(DatabaseContext context)
        {
            _context = context;
        }

        // GET: api/User
        [HttpGet]
        public async Task<ActionResult<IEnumerable<User>>> GetUser()
        {
            return await _context.Users.ToListAsync();
        }

        //GET: api/User/5
        [HttpGet("Email/{Email}")]
        public async Task<ActionResult<User>> GetUserByEmail(string Email)
        {

            if(IsValidEmail(Email)){
                var user = await _context.Users.SingleOrDefaultAsync(u=>u.Email == Email);            

            if (user == null)
            {
                return NotFound();
            }

            return user;
            }
            else{
                return UnprocessableEntity();
            }
            
        }
        [HttpGet("{Id}/Profile")]
        public async Task<ActionResult<ProfileViewModel>> GetUserProfile(int id)
        {
            
            var user = await _context.Users.FindAsync(id);
            if (user == null)
            {
                return NotFound();
            }
            var articles = await _context.Articles.Where(article=> article.UserId == id).ToListAsync();
                        List<ArticleViewModel> articleViewModelList = new List<ArticleViewModel>();

            articles.ForEach(( Article article) =>{
                articleViewModelList.Add( new ArticleViewModel(){
                        Id=article.Id,
                        Title=article.Title,
                        Content=article.Content,
                        Author=user
                    });
            });
            {
                
            }
            ProfileViewModel profile = new ProfileViewModel(){
                UserId = user.Id,
                FirstName = user.FirstName,
                LastName = user.LastName,
                Email = user.Email,
                Articles = articleViewModelList
            };

            return profile;

            
        }

        [HttpGet("{id}")]
        public async Task<ActionResult<User>> GetUserById(int id)
        {
            var user = await _context.Users.FindAsync(id);

            if (user == null)
            {
                return NotFound();
            }

            return user;
        }
        
        // PUT: api/User/5
        // To protect from overposting attacks, please enable the specific properties you want to bind to, for
        // more details see https://aka.ms/RazorPagesCRUD.
        [HttpPut("{id}")]
        public async Task<IActionResult> PutUser(int id, User user)
        {
            if (id != user.Id)
            {
                return BadRequest();
            }

            _context.Entry(user).State = EntityState.Modified;

            try
            {
                await _context.SaveChangesAsync();
            }
            catch (DbUpdateConcurrencyException)
            {
                if (!UserExists(id))
                {
                    return NotFound();
                }
                else
                {
                    throw;
                }
            }

            return NoContent();
        }

        // POST: api/User
        // To protect from overposting attacks, please enable the specific properties you want to bind to, for
        // more details see https://aka.ms/RazorPagesCRUD.
        [HttpPost]
        public async Task<ActionResult<User>> PostUser(User user)
        {
            _context.Users.Add(user);
            await _context.SaveChangesAsync();

            return CreatedAtAction("GetUser", new { id = user.Id }, user);
        }

        // DELETE: api/User/5
        [HttpDelete("{id}")]
        public async Task<ActionResult<User>> DeleteUser(int id)
        {
            var user = await _context.Users.FindAsync(id);
            if (user == null)
            {
                return NotFound();
            }

            _context.Users.Remove(user);
            await _context.SaveChangesAsync();

            return user;
        }

        private bool UserExists(int id)
        {
            return _context.Users.Any(e => e.Id == id);
        }

        public bool IsValidEmail(string email)
        {
        try {
            var addr = new System.Net.Mail.MailAddress(email);
            return addr.Address == email;
        }
        catch {
            return false;
        }
        }
    }
}



