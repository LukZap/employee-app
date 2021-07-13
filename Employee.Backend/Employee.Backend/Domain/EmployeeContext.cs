using Microsoft.EntityFrameworkCore;

namespace Employee.Backend.Domain
{
    public class EmployeeContext : DbContext
    {
        public DbSet<Employee> Empolyees { get; set; }

        public EmployeeContext(DbContextOptions<EmployeeContext> options) : base(options)
        {
        }

        protected override void OnModelCreating(ModelBuilder modelBuilder)
        {
            base.OnModelCreating(modelBuilder);

            SeedData(modelBuilder);
        }

        public void SeedData(ModelBuilder builder)
        {
            builder.Entity<Employee>().HasData(
                new Employee 
                { 
                    Id = 1, 
                    Name = "Colin Farrell", 
                    Job = "Police Officer", 
                    Motto = "Hey, have you tried Surf?", 
                    Blog = "www.google.com", 
                    Hobbies = "Surfing", 
                    Hometown = "Playa de las Americas, Tenerife"
                }
            );
            builder.Entity<Employee>().HasData(
                new Employee
                {
                    Id = 2,
                    Name = "Al Pacino",
                    Job = "Average Guy",
                    Motto = "Party never sleeps.",
                    Blog = "www.github.com",
                    Hobbies = "Partying",
                    Hometown = "Santa Cruz, Tenerife"
                }
            );            
            builder.Entity<Employee>().HasData(
                new Employee
                {
                    Id = 3,
                    Name = "Kevin Costner",
                    Job = "The Postman",
                    Motto = "Bigger. Better. Postman.",
                    Blog = "www.stackoverflow.com",
                    Hobbies = "Diving",
                    Hometown = "El Medano, Tenerife"
                }
            );
            builder.Entity<Employee>().HasData(
                new Employee
                {
                    Id = 4,
                    Name = "Jack Nicholson",
                    Job = "Receptionist at Hotel",
                    Motto = "Basketball, the freshmaker.",
                    Blog = "www.npm.com",
                    Hobbies = "Basketball",
                    Hometown = "Puerto de la Cruz, Tenerife"
                }
            );
        }
    }
}
