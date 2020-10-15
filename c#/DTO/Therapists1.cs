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
        public string Mail { get; set; }

        public static Therapists Todal(Therapists1 t)
        {
            return new Dal.Therapists
            {
                CategoryCode = t.CategoryCode,
                SubCategoryCode = t.SubCategoryCode,
                ServiceAreaId=t.ServiceAreaId,
                AboutMe=t.AboutMe,
                PhoneNumber=t.PhoneNumber,
                FirstName=t.FirstName,
                LastName=t.LastName,
                Id=t.Id,
                DateOfBirth=t.DateOfBirth
            };
        }

        public Nullable<int> CategoryCode { get; set; }
        public Nullable<int> SubCategoryCode { get; set; }
        public Nullable<int> ServiceAreaId { get; set; }
        public string AboutMe { get; set; }
        public string PhoneNumber { get; set; }
        public string FirstName { get; set; }
        public string LastName { get; set; }
        public string Id { get; set; }
        public Nullable<System.DateTime> DateOfBirth { get; set; }
    }
}
