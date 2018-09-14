using System.ComponentModel.DataAnnotations;

namespace WebApi.Models
{
    public class EntryCreate
    {
        [Required]
        public int UserId { get; set; }

        [Required]
        public string Learned { get; set; }

        [Required]
        public string Challenge { get; set; }

        [Required]
        public string Positive { get; set; }

        [Required]
        public string Blog { get; set; }

        public string ImageUrl { get; set; }
    }
}