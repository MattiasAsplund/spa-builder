
namespace backend;

public class Program
{
    public static void Main(string[] args)
    {
        var builder = WebApplication.CreateBuilder(args);

        // Add services to the container.

        builder.Services.AddControllers();
        // Learn more about configuring Swagger/OpenAPI at https://aka.ms/aspnetcore/swashbuckle
        builder.Services.AddEndpointsApiExplorer();
        builder.Services.AddSwaggerGen();

        var app = builder.Build();

        // Configure the HTTP request pipeline.
        if (app.Environment.IsDevelopment())
        {
            app.UseSwagger();
            app.UseSwaggerUI(x => { x.SwaggerEndpoint("v1/swagger.yaml", "My Cool API"); });
        }

        app.UseHttpsRedirection();

        app.UseAuthorization();


        app.MapControllers();

        Console.WriteLine("Server starting on port 8099...");
        app.Run();
    }
}
