using Dal;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace DTO
{
   public class Patients1
    {
        //-----------fields-----------
        public int PatientId { get; set; }
        public string Firstname { get; set; }
        public string Lastname { get; set; }
        public string PatientTz { get; set; }
        public Nullable<System.DateTime> DateOfBirth { get; set; }
        public Nullable<int> Email { get; set; }
        public string Password { get; set; }
        public string PhoneNumber1 { get; set; }
        public string PhoneNumber2 { get; set; }

        //-----------methodes => converts-----------
        public static Patients Todal(Patients1 p)
        {
            return new Dal.Patients
            {
                
            };
        }

        
    }
}
