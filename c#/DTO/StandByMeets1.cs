using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace DTO
{
    public class StandByMeets1
    {
        public int MeetId { get; set; }
        public string PatientId { get; set; }
        public string TherapistId { get; set; }
        public Nullable<System.DateTime> MeetDate { get; set; }
        public string Details { get; set; }
        public Nullable<System.DateTime> Deadline { get; set; }

    }
}
