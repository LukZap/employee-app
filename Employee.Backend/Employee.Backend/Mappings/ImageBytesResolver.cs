using AutoMapper;
using System.IO;

namespace Employee.Backend.Mappings
{
    public class ImageBytesResolver : IValueResolver<EmployeeDetailsViewModel, Employee, byte[]>
    {
        public byte[] Resolve(EmployeeDetailsViewModel source, Employee dest, byte[] destMember, ResolutionContext context)
        {
            byte[] arr = null;

            if (source.File != null)
            {
                using (var ms = new MemoryStream())
                {
                    source.File.CopyTo(ms);
                    arr = ms.ToArray();
                }
            }

            return arr;
        }
    }
}
