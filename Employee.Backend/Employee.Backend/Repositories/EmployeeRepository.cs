using Microsoft.EntityFrameworkCore;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Linq.Expressions;
using Employee.Backend.Domain;

namespace Employee.Backend.Repositories
{
    public class EmployeeRepository : IEmployeeRepository
    {
        private readonly EmployeeContext _dbContext;

        public EmployeeRepository(EmployeeContext dbContext)
        {
            _dbContext = dbContext;
        }

        public Employee Get(long id)
        {
            return _dbContext.Empolyees.SingleOrDefault(x => x.Id == id);
        }

        public IEnumerable<Employee> GetWhere(Expression<Func<Employee, bool>> predicate)
        {
            return _dbContext.Empolyees.Where(predicate).ToList();
        }

        public Employee Add(Employee employee)
        {
            _dbContext.Empolyees.Add(employee);
            _dbContext.SaveChanges();

            return employee;
        }

        public Employee Update(Employee employee)
        {
            _dbContext.Entry(employee).State = EntityState.Modified;
            _dbContext.SaveChanges();

            return employee;
        }

        public void Delete(Employee employee)
        {
            _dbContext.Empolyees.Remove(employee);
            _dbContext.SaveChanges();
        }
    }
}
