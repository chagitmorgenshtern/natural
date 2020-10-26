using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace DTO
{
    class WorkHours1
    {
        //-----------fields-----------
        public int WorkHoursId { get; set; }
        public Nullable<int> TherapistId { get; set; }
        public string Day { get; set; }
        public string Hour { get; set; }

    }
}
