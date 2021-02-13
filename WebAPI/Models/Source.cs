using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.Linq;
using System.Threading.Tasks;

namespace Full_Stack_Challenge.Models
{
    public class Source
    {
        [Key]
        public Guid SourceId { get; set; }
        public bool Blocked { get; set; }
        public virtual ICollection<Report> Reports { get; set; }
    }
}
