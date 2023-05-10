using System;
using System.IO;
using Events.SPA.Data;
using Events.SPA.Data.Entities;
using Events.SPA.Models;
using Events.SPA.ViewModels;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;

namespace Events.SPA.Controllers
{
    [ApiController]
    [Route("[controller]")]
    public class EventsController:ControllerBase
	{
		private ApplicationDbContext _dbContext;
        private readonly IWebHostEnvironment _hostingEnvironment;
        public EventsController(ApplicationDbContext dbContext, IWebHostEnvironment hostEnvironment)
		{
			_hostingEnvironment = hostEnvironment;
			_dbContext = dbContext;
		}

		[HttpGet]
		public async Task<IActionResult> GetAllEvents() {
			try {
                var users = _dbContext.Users.ToList();
				var Location = _dbContext.Locations.ToList();
				var result = await _dbContext.Events.Include(x => x.Location).ToListAsync();
				var events = ConvertFromEntityListToModel(result);

                return Ok(events);
            }
            catch (Exception ex) {
				var error = ex.Message;
			}
			return Ok ();
        }
		[HttpGet("{id}")]
		public async Task<IActionResult> GetEventById(int id)
		{
			var result = _dbContext.Events.Include(x => x.Location).FirstOrDefault(x => x.Id == id);
			var _event = ConvertFromEntityToModel(result);
			return Ok(_event);
		}

		[HttpPost]
		public async Task<IActionResult> AddEvent([FromForm] NewEventViewModel NewEvent)
		{
			try
			{
				

                using var stream = NewEvent.Image.OpenReadStream();

                // Read the file data into a byte array
                using var ms = new MemoryStream();
                await stream.CopyToAsync(ms)
            ;
                var filebytearray = ms.ToArray();
                var location = new Location
				{
					City = NewEvent.LocationName,
					Country = "UK",
					Street = NewEvent.LocationName,
					Postcode = NewEvent.LocationName,
					Latitude = 0,
					Longitude = 0
					
				};

				_dbContext.Add(location);
				var event_ = new Event
				{
					 Location=location,
					 Name=NewEvent.Name,
					 Image= filebytearray,
					 Description= NewEvent.Description,
					 Date= NewEvent.Date


				};
				_dbContext.Add(event_);
				await _dbContext.SaveChangesAsync();
                var newEventUsers = NewEvent.EventUsers.Split(";").Select(x => x.ToLower()).ToList();
                var users = _dbContext.Users.Where(x => newEventUsers.Contains(x.Email.ToLower())).ToList();
				foreach (var item in users)
				{
					_dbContext.Add(new EventUser {
						 EventId= event_.Id,
						 UserId= item.Id
					});
                    await _dbContext.SaveChangesAsync();
                }
            }
			catch (Exception ex)
			{

			}
			return Ok(NewEvent);
		
		}

		#region private methods
		private List<EventModel> ConvertFromEntityListToModel(List<Event> events)
		{
			return events.Select(x => new EventModel {
				Date=x.Date,
				Description=x.Description,
				Id=x.Id,
				Image= Convert.ToBase64String(x.Image),
				Location=x.Location.City,
                Latitude = x.Location.Latitude,
                Longitude = x.Location.Longitude,
                Name =x.Name


			}).ToList();
		}
        private EventModel ConvertFromEntityToModel(Event eventmodel)
        {
			return new EventModel
			{
                Date = eventmodel.Date,
                Description = eventmodel.Description,
                Id = eventmodel.Id,
                Image = Convert.ToBase64String(eventmodel.Image),
                Location = eventmodel.Location.City,
                Name = eventmodel.Name,
                Latitude = eventmodel.Location.Latitude,
                Longitude = eventmodel.Location.Longitude

            };

        }
        #endregion 

    }
}
