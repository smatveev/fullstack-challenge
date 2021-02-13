using System;
using System.ComponentModel.DataAnnotations;

namespace Full_Stack_Challenge.Models
{
    public class Report
    {
        [Key]
        public Guid ReportId { get; set; }
        public Guid SourceId { get; set; }
        public string State { get; set; }
        public string Source { get; set; }
        public string ReportType { get; set; }
        public string Message { get; set; }
        public DateTime Created { get; set; }
    }
}
