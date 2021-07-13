using Microsoft.EntityFrameworkCore.Migrations;

namespace Employee.Backend.Migrations
{
    public partial class seedData : Migration
    {
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.InsertData(
                table: "Empolyees",
                columns: new[] { "Id", "Blog", "Hobbies", "Hometown", "Job", "Motto", "Name" },
                values: new object[,]
                {
                    { 1L, "www.google.com", "Surfing", "Playa de las Americas, Tenerife", "Police Officer", "Hey, have you tried Surf?", "Colin Farrell" },
                    { 2L, "www.github.com", "Partying", "Santa Cruz, Tenerife", "Average Guy", "Party never sleeps.", "Al Pacino" },
                    { 3L, "www.stackoverflow.com", "Diving", "El Medano, Tenerife", "The Postman", "Bigger. Better. Postman.", "Kevin Costner" },
                    { 4L, "www.npm.com", "Basketball", "Puerto de la Cruz, Tenerife", "Receptionist at Hotel", "Basketball, the freshmaker.", "Jack Nicholson" }
                });
        }

        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DeleteData(
                table: "Empolyees",
                keyColumn: "Id",
                keyValue: 1L);

            migrationBuilder.DeleteData(
                table: "Empolyees",
                keyColumn: "Id",
                keyValue: 2L);

            migrationBuilder.DeleteData(
                table: "Empolyees",
                keyColumn: "Id",
                keyValue: 3L);

            migrationBuilder.DeleteData(
                table: "Empolyees",
                keyColumn: "Id",
                keyValue: 4L);
        }
    }
}
