using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace DTO
{
    class Applicants1
    {
        //-----------fields-----------
        public int ApplicantId { get; set; }
        public string FirstName { get; set; }
        public string LastName { get; set; }
        public string TherapistTz { get; set; }
        public string Email { get; set; }
        public Nullable<bool> Status { get; set; }
    }
}
