using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using Dal;
namespace DTO
{
    public class Therapists1
    {

        //-----------fields-----------
        public int TherapistId { get; set; }
        public string FirstName { get; set; }
        public string LastName { get; set; }
        public string TherapistTz { get; set; }
        public Nullable<System.DateTime> DateOfBirth { get; set; }
        public string PhoneNumber { get; set; }
        public string Email { get; set; }
        public string Password { get; set; }
        public string Image { get; set; }
        public Nullable<int> ServiceAreaId { get; set; }
        public string Address { get; set; }
        public string AboutMe { get; set; }
        public string Diploma { get; set; }

        //-----------methodes => converts-----------
        public static Therapists Todal(Therapists1 t)
        {
            return new Dal.Therapists
            {

            };
        }

       
    }
}
