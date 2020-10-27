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

        //-----------fields-----------
        public int MeetId { get; set; }
        public Nullable<int> PatientId { get; set; }
        public Nullable<int> TherapistId { get; set; }
        public Nullable<System.DateTime> MeetDate { get; set; }
        public Nullable<int> CategoryId { get; set; }

        //-----------constructors-----------

        public Meets1()
        {

        }
        //gets dal and convert it to dto (by the ctor)
        public Meets1(Dal.Meets m)
        {
            MeetId = m.MeetId;
            PatientId = m.PatientId;
            TherapistId = m.TherapistId;
            MeetDate = m.MeetDate;
            CategoryId = m.CategoryId;
        }

        //-----------methodes => converts-----------

        public static Meets Todal(Meets1 m)
        {
            return new Dal.Meets
            {
             MeetId = m.MeetId,
            PatientId = m.PatientId,
            TherapistId = m.TherapistId,
            MeetDate = m.MeetDate,
            CategoryId = m.CategoryId
            };
        }
    }
}
