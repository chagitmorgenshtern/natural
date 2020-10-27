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

        //-----------constructors-----------
        public Patients1()
        {

        }
        //gets dal and convert it to dto (by the ctor)
        public Patients1(Dal.Patients p)
        {
            PatientId = p.PatientId;
            Firstname = p.Firstname;
            Lastname = p.Lastname;
            PatientTz = p.PatientTz;
            DateOfBirth = p.DateOfBirth;
            Email = p.Email;
            Password = p.Password;
            PhoneNumber1 = p.PhoneNumber1;
            PhoneNumber2 = p.PhoneNumber2;
        }

        //-----------methodes => converts-----------
        public static Patients Todal(Patients1 p)
        {
            return new Dal.Patients
            { 
            PatientId = p.PatientId,
            Firstname = p.Firstname,
            Lastname = p.Lastname,
            PatientTz = p.PatientTz,
            DateOfBirth = p.DateOfBirth,
            Email = p.Email,
            Password = p.Password,
            PhoneNumber1 = p.PhoneNumber1,
            PhoneNumber2 = p.PhoneNumber2
        };
        }

        
    }
}
