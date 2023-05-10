using System;
namespace Events.SPA.Data.Entities
{
	public class Location
	{
		public int  Id { get; set; }
		public string Street { get; set; }
		public string Postcode { get; set; }
		public string City { get; set; }
		public int HouseNo { get; set; }
		public string Country { get; set; }
		public double Latitude { get; set; }
        public double Longitude { get; set; }
        public virtual List<Event> Events { get; set; }
    }

}
