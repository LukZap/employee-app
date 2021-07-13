using Microsoft.EntityFrameworkCore;

namespace Employee.Backend.Domain
{
    public class EmployeeContext : DbContext
    {
        public DbSet<Employee> Empolyees { get; set; }

        public EmployeeContext(DbContextOptions<EmployeeContext> options) : base(options)
        {
        }
    }
}
