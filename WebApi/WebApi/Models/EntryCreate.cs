using System.ComponentModel.DataAnnotations;

namespace WebApi.Models
{
    public class EntryCreate
    {
        [Required]
        public int UserId { get; set; }

        public string Learned { get; set; }

        public string Challenge { get; set; }

        public string Overcome { get; set; }

        public string Meet { get; set; }

        public string Goal { get; set; }

        public string Video { get; set; }

        public string Travel { get; set; }

        public string Read { get; set; }

        public date DateModified { get; set; }

        public date DateCreated { get; set; }
    }
}