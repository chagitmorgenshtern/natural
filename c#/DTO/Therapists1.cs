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
        public int ServiceAreaId { get; set; }
        public string ServiceAreaName { get; set; }
        public string Address { get; set; }
        public string AboutMe { get; set; }
        public string Diploma { get; set; }
        //TODO: UPDATE CATEGORIES
        public int[] Categories { get; set; }
        public string[] CategoriesNames { get; set; }
        //-----------constructors-----------

        public Therapists1()
        {

        }
        //gets dal and convert it to dto (by the ctor)
        public Therapists1(Dal.Therapists t)
        {
            TherapistId = t.TherapistId;
            FirstName = t.FirstName;
            LastName = t.LastName;
            TherapistTz = t.TherapistTz;
            DateOfBirth = t.DateOfBirth;
            PhoneNumber = t.PhoneNumber;
            Email = t.Email;
            Password = t.Password;
            Image = t.Image;
            ServiceAreaId = (int)t.ServiceAreaId ;
            Address = t.Address;
            AboutMe = t.AboutMe;
            Diploma = t.Diploma;

            ServiceAreaName = Dal.ServiceAreasDal.GetById(ServiceAreaId).SAName;
            Categories = Dal.CategoriesDal.GetCategoriesByTherapistId(TherapistId);
            CategoriesNames = Dal.CategoriesDal.GetCategoriesNamesByTherapistId(TherapistId);



        }



        //-----------methodes => convertors-----------
        public static Therapists Todal(Therapists1 t)
        {
            return new Dal.Therapists
            {
                TherapistId = t.TherapistId,
                FirstName = t.FirstName,
                LastName = t.LastName,
                TherapistTz = t.TherapistTz,
                DateOfBirth = t.DateOfBirth,
                PhoneNumber = t.PhoneNumber,
                Email = t.Email,
                Password = t.Password,
                Image = t.Image,
                ServiceAreaId = t.ServiceAreaId,
                Address = t.Address,
                AboutMe = t.AboutMe,
                Diploma = t.Diploma
        };
        }

    

        public static List<Therapists1> ConvertToListDto(List<Therapists> lst)
        {
            if (lst == null)
                return null;   
            List<Therapists1> listWithCategories = lst.Select(t =>
            {
                //return  new Therapists1(t);
                Therapists1 therapist = new Therapists1(t);
                return therapist;
            }).ToList();
            return listWithCategories;
        }


    }
}

//=========================copy
//using System;
//using System.Collections.Generic;
//using System.Linq;
//using System.Text;
//using System.Threading.Tasks;
//using Dal;
//namespace DTO
//{
//    public class Therapists1
//    {

//        //-----------fields-----------
//        public int TherapistId { get; set; }
//        public string FirstName { get; set; }
//        public string LastName { get; set; }
//        public string TherapistTz { get; set; }
//        public Nullable<System.DateTime> DateOfBirth { get; set; }
//        public string PhoneNumber { get; set; }
//        public string Email { get; set; }
//        public string Password { get; set; }
//        public string Image { get; set; }
//        public int ServiceAreaId { get; set; }
//        public string ServiceAreaName { get; set; }
//        public string Address { get; set; }
//        public string AboutMe { get; set; }
//        public string Diploma { get; set; }
//        //TODO: UPDATE CATEGORIES
//        public int[] Categories { get; set; }
//        public string[] CategoriesNames { get; set; }
//        //-----------constructors-----------

//        public Therapists1()
//        {

//        }
//        //gets dal and convert it to dto (by the ctor)
//        public Therapists1(Dal.Therapists t)
//        {
//            TherapistId = t.TherapistId;
//            FirstName = t.FirstName;
//            LastName = t.LastName;
//            TherapistTz = t.TherapistTz;
//            DateOfBirth = t.DateOfBirth;
//            PhoneNumber = t.PhoneNumber;
//            Email = t.Email;
//            Password = t.Password;
//            Image = t.Image;
//            ServiceAreaId = t.ServiceAreaId;
//            Address = t.Address;
//            AboutMe = t.AboutMe;
//            Diploma = t.Diploma;

//            ServiceAreaName = Dal.ServiceAreasDal.GetById(ServiceAreaId).SAName;

//        }



//        //-----------methodes => convertors-----------
//        public static Therapists Todal(Therapists1 t)
//        {
//            return new Dal.Therapists
//            {
//                TherapistId = t.TherapistId,
//                FirstName = t.FirstName,
//                LastName = t.LastName,
//                TherapistTz = t.TherapistTz,
//                DateOfBirth = t.DateOfBirth,
//                PhoneNumber = t.PhoneNumber,
//                Email = t.Email,
//                Password = t.Password,
//                Image = t.Image,
//                ServiceAreaId = t.ServiceAreaId,
//                Address = t.Address,
//                AboutMe = t.AboutMe,
//                Diploma = t.Diploma
//            };
//        }



//        public static List<Therapists1> ConvertToListDto(List<Therapists> lst)
//        {
//            if (lst == null)
//                return null;
//            List<Therapists1> listWithCategories = lst.Select(t =>
//            {
//                //TODO check if need to be in constructor or here
//                //return  new Therapists1(t);
//                Therapists1 therapist = new Therapists1(t);
//                therapist.Categories = Dal.CategoriesDal.GetCategoriesByTherapistId(therapist.TherapistId);
//                return therapist;
//            }).ToList();
//            return listWithCategories;
//        }


//    }
//}
