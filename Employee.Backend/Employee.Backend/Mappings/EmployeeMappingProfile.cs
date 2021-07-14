using AutoMapper;

namespace Employee.Backend.Mappings
{
    public class EmployeeMappingProfile : Profile
    {
        public EmployeeMappingProfile()
        {
            CreateMap<Employee, EmployeeBasicViewModel>()
                .ForMember(x => x.ImageUrl, o => o.MapFrom(x => $"https://localhost:5001/employee/photo/{x.Id}"));
            CreateMap<EmployeeBasicViewModel, Employee>();
            CreateMap<Employee, EmployeeDetailsViewModel>()
                .ForMember(x => x.ImageUrl, o => o.MapFrom(x => $"https://localhost:5001/employee/photo/{x.Id}"));
            CreateMap<EmployeeDetailsViewModel, Employee>();
        }
    }
}
