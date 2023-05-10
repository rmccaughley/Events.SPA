using System;
using Events.SPA.Data.Entities;

namespace Events.SPA.ViewModels
{
	public class NewEventViewModel
	{
        public string Name { get; set; }
        public string LocationName { get; set; }
        public string Description { get; set; }
        public IFormFile Image { get; set; }
        public string Date { get; set; }
        public string EventUsers { get; set; }

    }
}

