using System;
namespace Events.SPA.Data.Entities
{
	public class Event
	{
		public int Id { get; set; }
		public string Name { get; set; }
		public int LocationId { get; set; }
		public string Description { get; set; }
		public byte[] Image { get; set; }
		public string Date { get; set; }
		public virtual Location Location { get; set; }
	}
}