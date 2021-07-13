using AutoMapper;
using FluentValidation;
using System.Collections.Generic;
using Employee.Backend.Repositories;

namespace Employee.Backend.Services
{
    public class EmployeeService : IEmployeeService
    {
        private readonly IEmployeeRepository _employeeRepository;
        private readonly IMapper _mapper;
        //private readonly IValidator<EmployeeDetailsViewModel> _validator;

        public EmployeeService(
            IEmployeeRepository employeeRepository, 
            IMapper mapper) //, 
            //IValidator<EmployeeDetailsViewModel> validator)
        {
            _employeeRepository = employeeRepository;
            _mapper = mapper;
            //_validator = validator;
        }

        public IEnumerable<EmployeeBasicViewModel> GetEmployees()
        {
            var employees = _employeeRepository.GetWhere(x => true);

            var vm = _mapper.Map<IEnumerable<EmployeeBasicViewModel>>(employees);
            return vm;
        }

        public EmployeeDetailsViewModel GetEmployee(long id)
        {
            var employee = _employeeRepository.Get(id);

            var vm = _mapper.Map<EmployeeDetailsViewModel>(employee);
            return vm;
        }

        public EmployeeDetailsViewModel AddEmployee(EmployeeDetailsViewModel viewModel)
        {
            //_validator.Validate(viewModel);
            var employee = _mapper.Map<Employee>(viewModel);
            _employeeRepository.Add(employee);
                       
            return _mapper.Map<EmployeeDetailsViewModel>(employee);
        }

        public EmployeeDetailsViewModel UpdateEmployee(EmployeeDetailsViewModel viewModel)
        {
            var employee = _employeeRepository.Get(viewModel.Id);
            _mapper.Map(viewModel, employee);
            _employeeRepository.Update(employee);

            return _mapper.Map<EmployeeDetailsViewModel>(employee);
        }

        public void DeleteEmployee(long id)
        {
            var employee = _employeeRepository.Get(id);
            _employeeRepository.Delete(employee); // moze po id
        }
    }
}
