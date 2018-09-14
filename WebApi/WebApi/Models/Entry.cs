using System;

namespace WebApi.Models
{
    public class Entry
    {
        public int Id { get; set; }
        public int UserId { get; set; }
        public string Learned { get; set; }
        public string Challenge { get; set; }
        public string Positive { get; set; }
        public string Blog { get; set; }
        public string ImageUrl { get; set; }
        public DateTime DateCreated { get; set; }
        public DateTime DateModified { get; set; }
    }
}