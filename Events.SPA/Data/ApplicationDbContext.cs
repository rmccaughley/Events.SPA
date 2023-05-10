using Microsoft.AspNetCore.ApiAuthorization.IdentityServer;
using Microsoft.EntityFrameworkCore;
using Microsoft.Extensions.Options;
using Duende.IdentityServer.EntityFramework.Options;
using Events.SPA.Models;
using Events.SPA.Data.Entities;

namespace Events.SPA.Data;

public class ApplicationDbContext : ApiAuthorizationDbContext<ApplicationUser>
{
    public DbSet<Event> Events { get; set; }
    public DbSet<Location> Locations { get; set; }
    public DbSet<EventUser> EventUsers { get; set; }
    public ApplicationDbContext(DbContextOptions options, IOptions<OperationalStoreOptions> operationalStoreOptions)
        : base(options, operationalStoreOptions)
    {

    }
    protected override void OnModelCreating(ModelBuilder modelBuilder)
    {
        base.OnModelCreating(modelBuilder);
        //modelBuilder.Entity<EventUser>()
            //.HasOne(e => e.User)
            //.WithMany(u => u.Events)
            //.HasForeignKey(e => e.UserId)
            //.OnDelete(DeleteBehavior.Cascade);
        modelBuilder.Entity<Event>();
        modelBuilder.Entity<Location>();
        modelBuilder.Entity<EventUser>();
    }
}

