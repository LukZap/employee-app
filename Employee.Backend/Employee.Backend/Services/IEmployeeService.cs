using System.Collections.Generic;

namespace Employee.Backend.Services
{
    public interface IEmployeeService
    {
        EmployeeDetailsViewModel AddEmployee(EmployeeDetailsViewModel viewModel);
        void DeleteEmployee(long id);
        EmployeeDetailsViewModel GetEmployee(long id);
        IEnumerable<EmployeeBasicViewModel> GetEmployees();
        EmployeeDetailsViewModel UpdateEmployee(EmployeeDetailsViewModel viewModel);
    }
}
