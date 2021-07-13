using FluentValidation;

namespace Employee.Backend.Validators
{
    public class EmployeeValidator : AbstractValidator<EmployeeDetailsViewModel>
    {
        public EmployeeValidator()
        {
            RuleFor(x => x.Name).NotEmpty();
        }
    }
}
