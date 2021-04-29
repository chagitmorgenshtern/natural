using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using Dal;

namespace DTO
{
    public class Meets1
    {

        //-----------fields-----------
        public int MeetId { get; set; }
        public int PatientId { get; set; }
        public int TherapistId { get; set; }
        public string TherapistName { get; set; }
        public string PatientName { get; set; }
        public Nullable<System.DateTime> MeetDate { get; set; }
        public int CategoryId { get; set; }
        public string CategoryName { get; set; }

        //-----------constructors-----------

        public Meets1()
        {
            
        }
        //gets dal and convert it to dto (by the ctor)
        public Meets1(Dal.Meets m):this()
        {
            MeetId = m.MeetId;
            PatientId = (int)m.PatientId;
            TherapistId = (int)m.TherapistId;
            MeetDate = m.MeetDate;
            CategoryId = (int)m.CategoryId;
            Dal.Therapists t = Dal.TherapistsDal.GetById(TherapistId);
            TherapistName = t.FirstName+" "+t.LastName;
            CategoryName = Dal.CategoriesDal.GetById(CategoryId).CategoryName;
            Dal.Patients p = Dal.PatientsDal.GetById(PatientId);
            PatientName = p.Firstname + " " + p.Lastname;
        }

        //-----------methodes => converts-----------

        public static Meets Todal(Meets1 m)
        {
            return new Dal.Meets
            {
             MeetId = m.MeetId,
            PatientId = m.PatientId,
            TherapistId = m.TherapistId,
            MeetDate = m.MeetDate,
            CategoryId = m.CategoryId
            };
        }

        public static List<Meets1> ConvertToListDto(List<Meets> lst)
        {
            if (lst == null)
                return null;
            return lst.Select(m => new Meets1(m)).ToList();
        }
    }
}
