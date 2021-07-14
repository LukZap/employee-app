using Microsoft.AspNetCore.Mvc;
using System.Collections.Generic;
using Employee.Backend.Services;
using Microsoft.AspNetCore.Http;

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

        [HttpGet("photo/{id}")]
        public FileResult GetEmployeePhoto(long id)
        {
            var image = _employeeService.GetEmployeePhoto(id);
            return File(image, "image/jpeg");
        }

        [HttpPost]
        public EmployeeDetailsViewModel Add([FromForm] EmployeeDetailsViewModel vm)
        {
            return _employeeService.AddEmployee(vm);
        }

        [HttpPut]
        public EmployeeDetailsViewModel Update([FromForm] EmployeeDetailsViewModel vm)
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
