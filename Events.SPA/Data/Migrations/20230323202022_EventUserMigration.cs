using Microsoft.EntityFrameworkCore.Migrations;

#nullable disable

namespace Events.SPA.Data.Migrations
{
    public partial class EventUserMigration : Migration
    {
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropForeignKey(
                name: "FK_EventUsers_AspNetUsers_UserId1",
                table: "EventUsers");

            migrationBuilder.DropIndex(
                name: "IX_EventUsers_UserId1",
                table: "EventUsers");

            migrationBuilder.DropColumn(
                name: "UserId1",
                table: "EventUsers");

            migrationBuilder.AlterColumn<string>(
                name: "UserId",
                table: "EventUsers",
                type: "TEXT",
                nullable: true,
                oldClrType: typeof(int),
                oldType: "INTEGER");

            migrationBuilder.CreateIndex(
                name: "IX_EventUsers_UserId",
                table: "EventUsers",
                column: "UserId");

            migrationBuilder.AddForeignKey(
                name: "FK_EventUsers_AspNetUsers_UserId",
                table: "EventUsers",
                column: "UserId",
                principalTable: "AspNetUsers",
                principalColumn: "Id");
        }

        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropForeignKey(
                name: "FK_EventUsers_AspNetUsers_UserId",
                table: "EventUsers");

            migrationBuilder.DropIndex(
                name: "IX_EventUsers_UserId",
                table: "EventUsers");

            migrationBuilder.AlterColumn<int>(
                name: "UserId",
                table: "EventUsers",
                type: "INTEGER",
                nullable: false,
                defaultValue: 0,
                oldClrType: typeof(string),
                oldType: "TEXT",
                oldNullable: true);

            migrationBuilder.AddColumn<string>(
                name: "UserId1",
                table: "EventUsers",
                type: "TEXT",
                nullable: true);

            migrationBuilder.CreateIndex(
                name: "IX_EventUsers_UserId1",
                table: "EventUsers",
                column: "UserId1");

            migrationBuilder.AddForeignKey(
                name: "FK_EventUsers_AspNetUsers_UserId1",
                table: "EventUsers",
                column: "UserId1",
                principalTable: "AspNetUsers",
                principalColumn: "Id");
        }
    }
}
