using System;
using System.Collections.Generic;
using System.Linq.Expressions;

namespace Employee.Backend.Repositories
{
    public interface IEmployeeRepository
    {
        Employee Add(Employee employee);
        void Delete(Employee employee);
        Employee Get(long id);
        IEnumerable<Employee> GetWhere(Expression<Func<Employee, bool>> predicate);
        Employee Update(Employee employee);
    }
}
