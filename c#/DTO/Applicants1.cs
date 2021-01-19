using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using Dal;

namespace DTO
{
    public class Applicants1
    {
        //-----------fields-----------
        public int ApplicantId { get; set; }
        public string FirstName { get; set; }
        public string LastName { get; set; }
        public string TherapistTz { get; set; }
        public string Email { get; set; }
        public Nullable<bool> Status { get; set; }

        //-----------constructors-----------

        public Applicants1()
        {

        }
        //gets dal and convert it to dto (by the ctor)
        public Applicants1(Dal.Applicants a)
        {
            ApplicantId = a.ApplicantId;
            FirstName = a.FirstName;
            LastName = a.LastName;
            TherapistTz = a.TherapistTz;
            Email = a.Email;
            Status = a.Status;
        }


        //-----------methodes => converts-----------

        public static Applicants Todal(Applicants1 a)
        {
            return new Dal.Applicants
            {
            ApplicantId = a.ApplicantId,
            FirstName = a.FirstName,
            LastName = a.LastName,
            TherapistTz = a.TherapistTz,
            Email = a.Email,
            Status = a.Status
        };
        }

        public static List<Applicants1> ConvertToListDto(List<Applicants> lst)
        {
            if (lst == null)
                return null;
            return lst.Select(a => new Applicants1(a)).ToList();
        }
    }
}
