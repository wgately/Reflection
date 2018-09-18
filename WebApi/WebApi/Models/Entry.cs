using System;

namespace WebApi.Models
{
    public class Entry
    {
        public int Id { get; set; }
        public int UserId { get; set; }
        public string Learned { get; set; }
        public string Challenge { get; set; }
        public string Overcome { get; set; }
        public string Read { get; set; }
        public string Travel { get; set; }
        public string Meet { get; set; }
        public string Video { get; set; }
        public string Goal { get; set; }
        public DateTime DateCreated { get; set; }
        public DateTime DateModified { get; set; }
    }
}