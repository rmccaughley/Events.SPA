using System;
using Events.SPA.Models;

namespace Events.SPA.Data.Entities
{
	public class EventUser
	{
		public int Id { get; set; }
		public int EventId { get; set; }
		public string UserId { get; set; }
		//public virtual ApplicationUser User { get; set; }
		public virtual Event Event { get; set; }

	}
}

