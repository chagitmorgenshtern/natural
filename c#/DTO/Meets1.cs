using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using Dal;

namespace DTO
{
    public class Meets1
    {
        public int MeetId { get; set; }

        public static Meets Todal(Meets1 m)
        {
            return new Dal.Meets
            {
                PatientId = m.PatientId,
                TherapistId = m.TherapistId,
                OkDate = m.OkDate,
                ExecutionDate = m.ExecutionDate,
                Cost = m.Cost,
                Details = m.Details,
                IsDone = m.IsDone
            };
        }

        public string PatientId { get; set; }
        public string TherapistId { get; set; }
        public Nullable<System.DateTime> OkDate { get; set; }
        public Nullable<System.DateTime> ExecutionDate { get; set; }
        public Nullable<decimal> Cost { get; set; }
        public string Details { get; set; }
        public Nullable<bool> IsDone { get; set; }
    }
}
