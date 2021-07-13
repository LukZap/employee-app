using AutoMapper;

namespace Employee.Backend.Mappings
{
    public class EmployeeMappingProfile : Profile
    {
        public EmployeeMappingProfile()
        {
            CreateMap<Employee, EmployeeBasicViewModel>();
            CreateMap<EmployeeBasicViewModel, Employee>();
            CreateMap<Employee, EmployeeDetailsViewModel>();
            CreateMap<EmployeeDetailsViewModel, Employee>();
        }
    }
}
