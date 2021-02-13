using Full_Stack_Challenge.Models;
using Microsoft.EntityFrameworkCore;

namespace Full_Stack_Challenge.Data
{
    public class AppDbContext : DbContext
    {
        public AppDbContext(DbContextOptions<AppDbContext> options) : base(options)
        {
        }

        public DbSet<Report> Reports { get; set; }
        public DbSet<Source> Sources { get; set; }
    }
}
