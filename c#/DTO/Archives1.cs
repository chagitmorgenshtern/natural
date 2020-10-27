using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using Dal;

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

        //-----------constructors-----------

        public Archives1()
        {

        }
        //gets dal and convert it to dto (by the ctor)
        public Archives1(Dal.Archives a)
        {
            ArchivesId = a.ArchivesId;
            PatientId = a.PatientId;
            TherapistId = a.TherapistId;
            MeetDate = a.MeetDate;
            CategoryId = a.CategoryId;
            IsDone = a.IsDone;

        }

        //-----------methodes => converts-----------

        public static Archives Todal(Archives1 a)
        {
            return new Dal.Archives
            {
            ArchivesId = a.ArchivesId,
            PatientId = a.PatientId,
            TherapistId = a.TherapistId,
            MeetDate = a.MeetDate,
            CategoryId = a.CategoryId,
            IsDone = a.IsDone
            };
        }
    }
}
