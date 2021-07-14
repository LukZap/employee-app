# 👷‍♂️ Employee App 👷‍♂️

Simple web app written in Angular 12.x, ASP.NET Core 3.1 Web Api, SQL Server LocalDB. <br/>
You can browse, add, update, delete employees.

## Prerequisites ✔️
1. Installed NodeJs, npm, Angular 12.x
2. Installed ASP.NET Core 3.1 runtime
3. Installed SQL Server LocalDB on SQL Server

## Setup 💻

1. Install npm packages by running ```npm install``` command in  ```Employee.Web``` directory.
2. Start web app by running ```ng serve``` command in  ```Employee.Web``` directory.
3. Build backend app by running ```dotnet build``` command in  ```Employee.Backend/Employee.Backend``` directory.
4. Start backend app by running ```dotnet run``` command in  ```Employee.Backend/Employee.Backend``` directory.
5. Navigate to http://localhost:4200/ to check if the app is running.

## Todos 🛠️

1. Support multiple image formats for employees (currently only .JPG)
2. Separate Image from Employee entity
3. More responsive design
4. Backend/Frontend validations
5. Links on EmployeeDetailComponent not working (as all fields are inputs)
6. Make input-like component for EmployeeDetailComponent that switch seemingly between edit and no-edit mode
7. Integration, Unit Tests
8. Async methods on backend
9. Fix couple of hacks in code
