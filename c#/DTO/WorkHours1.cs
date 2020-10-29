using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using Dal;

namespace DTO
{
    public class WorkHours1
    {
        //-----------fields-----------
        public int WorkHoursId { get; set; }
        public Nullable<int> TherapistId { get; set; }
        public string Day { get; set; }
        public string Hour { get; set; }

        //-----------constructors-----------

        public WorkHours1()
        {

        }
        //gets dal and convert it to dto (by the ctor)
        public WorkHours1(Dal.WorkHours w)
        {
            WorkHoursId = w.WorkHoursId;
            TherapistId = w.TherapistId;
            Day = w.Day;
            Hour = w.Hour;
        }

        //-----------methodes => converts-----------

        public static WorkHours Todal(WorkHours1 w)
        {
            return new Dal.WorkHours
            {
             WorkHoursId = w.WorkHoursId,
            TherapistId = w.TherapistId,
            Day = w.Day,
            Hour = w.Hour
            };
        }
    }
}
