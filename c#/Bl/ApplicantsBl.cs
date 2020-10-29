using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using Dal;
using DTO;


namespace Bl
{
    public class ApplicantsBl
    {
        //Post
        public static void AddApplicant(Applicants1 a)
        {
            Dal.ApplicantsDal.AddApplicant(DTO.Applicants1.Todal(a));
        }
        //Get
        public static Applicants1 GetById(int id)
        {
            DTO.Applicants1 aa = new Applicants1(Dal.ApplicantsDal.GetById(id));
            return aa;
        }
        //Delete
        public static void DeleteById(int id)
        {
            Dal.ApplicantsDal.DeleteById(id);
        }

    }
}
