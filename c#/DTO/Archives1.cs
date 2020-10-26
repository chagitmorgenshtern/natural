using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace DTO
{
    public class Archives1
    {
        //-----------fields-----------
        public int ArchivesId { get; set; }
        public Nullable<int> PatientId { get; set; }
        public Nullable<int> TherapistId { get; set; }
        public Nullable<System.DateTime> MeetDate { get; set; }
        public Nullable<int> CategoryId { get; set; }
        public Nullable<bool> IsDone { get; set; }
    }
}
