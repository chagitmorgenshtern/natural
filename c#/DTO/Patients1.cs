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
        public string Mail { get; set; }

        public static Patients Todal(Patients1 p)
        {
            return new Dal.Patients
            {
                Mail = p.Mail,
                Password = p.Password,
                Firstname = p.Firstname,
                Lastname=p.Lastname,
                PhoneNumber1=p.PhoneNumber1,
                PhoneNumber2=p.PhoneNumber2,
                City = p.City,
                Street=p.Street,
                BuildingNumber=p.BuildingNumber,
                FlatNumber=p.FlatNumber,
                Id=p.Id
            };
        }

        public string Password { get; set; }
        public string Firstname { get; set; }
        public string Lastname { get; set; }
        public string PhoneNumber1 { get; set; }
        public string PhoneNumber2 { get; set; }
        public string City { get; set; }
        public string Street { get; set; }
        public Nullable<int> BuildingNumber { get; set; }
        public Nullable<int> FlatNumber { get; set; }
        public string Id { get; set; }
    }
}
