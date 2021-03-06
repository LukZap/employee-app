using AutoMapper;

namespace Employee.Backend.Mappings
{
    public class EmployeeMappingProfile : Profile
    {
        public EmployeeMappingProfile()
        {
            CreateMap<Employee, EmployeeBasicViewModel>()
                .ForMember(x => x.ImageUrl, o => {
                    o.PreCondition(x => x.Image != null && x.Image.Length != 0);
                    // TODO: temporary solution (maybe take that format string from config?)
                    o.MapFrom(x => $"https://localhost:5001/employee/photo/{x.Id}");
                });

            CreateMap<Employee, EmployeeDetailsViewModel>()
                .ForMember(x => x.ImageUrl, o => o.MapFrom(x => $"https://localhost:5001/employee/photo/{x.Id}"))
                .ForMember(x => x.File, o => o.Ignore());
            CreateMap<EmployeeDetailsViewModel, Employee>()
                .ForMember(x => x.Image, o => o.MapFrom<ImageBytesResolver>());
        }
    }
}
