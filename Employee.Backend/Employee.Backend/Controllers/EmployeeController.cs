using Microsoft.AspNetCore.Mvc;
using System.Collections.Generic;
using Employee.Backend.Services;

namespace Employee.Backend.Controllers
{
    [ApiController]
    [Route("[controller]")]
    public class EmployeeController : ControllerBase
    {
        private readonly IEmployeeService _employeeService;

        public EmployeeController(IEmployeeService employeeService)
        {
            _employeeService = employeeService;
        }

        [HttpGet]
        public IEnumerable<EmployeeBasicViewModel> Get()
        {
            return _employeeService.GetEmployees();
        }

        [HttpGet("{id}")]
        public EmployeeDetailsViewModel Get(long id)
        {
            return _employeeService.GetEmployee(id);
        }

        [HttpPost]
        public EmployeeDetailsViewModel Add(EmployeeDetailsViewModel vm)
        {
            return _employeeService.AddEmployee(vm);
        }

        [HttpPut]
        public EmployeeDetailsViewModel Update(EmployeeDetailsViewModel vm)
        {
            return _employeeService.UpdateEmployee(vm);
        }

        [HttpDelete]
        public void Delete(long id)
        {
            _employeeService.DeleteEmployee(id);
        }
    }
}
