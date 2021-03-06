using Microsoft.AspNetCore.Http;

namespace Employee.Backend
{
    public class EmployeeDetailsViewModel
    {
        public long Id { get; set; }
        public string Name { get; set; }
        public string Job { get; set; }
        public string Motto { get; set; }
        public string Hobbies { get; set; }
        public string Hometown { get; set; }
        public string Blog { get; set; }
        public string ImageUrl { get; set; }
        public IFormFile File { get; set; }
    }
}
