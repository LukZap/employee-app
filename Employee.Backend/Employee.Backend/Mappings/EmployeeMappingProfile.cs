using AutoMapper;

namespace Employee.Backend.Mappings
{
    public class EmployeeMappingProfile : Profile
    {
        public EmployeeMappingProfile()
        {
            CreateMap<Employee, EmployeeBasicViewModel>()
                // TODO: temporary solution (maybe take that format string from config?)
                .ForMember(x => x.ImageUrl, o => o.MapFrom(x => $"https://localhost:5001/employee/photo/{x.Id}"));
            CreateMap<Employee, EmployeeDetailsViewModel>()
                .ForMember(x => x.ImageUrl, o => o.MapFrom(x => $"https://localhost:5001/employee/photo/{x.Id}"))
                .ForMember(x => x.File, o => o.Ignore());
            CreateMap<EmployeeDetailsViewModel, Employee>()
                .ForMember(x => x.Image, o => o.MapFrom<ImageBytesResolver>());
        }
    }
}
