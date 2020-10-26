using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using Dal;

namespace DTO
{
    public class Feedbacks1
    {
        //-----------fields-----------

        public int FeedbackId { get; set; }
        public Nullable<int> PatientId { get; set; }
        public Nullable<int> TherapistId { get; set; }
        public Nullable<int> Servicing { get; set; }
        public Nullable<int> Price { get; set; }
        public Nullable<int> Expertise { get; set; }
        public Nullable<System.DateTime> FeedbackDate { get; set; }


        //-----------constructors-----------

        public Feedbacks1()
        {

        }
        //gets dal and convert it to dto (by the ctor)
        public Feedbacks1(Dal.Feedbacks f)
        {
            FeedbackId = f.FeedbackId;
            PatientId = f.PatientId;
            TherapistId = f.TherapistId;
            Servicing = f.Servicing;
            Price = f.Price;
            Expertise = f.Expertise;
            FeedbackDate = f.FeedbackDate;


        }

        //-----------methodes => converts-----------

        public static Feedbacks Todal(Feedbacks1 f)
        {
            return new Dal.Feedbacks
            {

            FeedbackId = f.FeedbackId,
            PatientId = f.PatientId,
            TherapistId = f.TherapistId,
            Servicing = f.Servicing,
            Price = f.Price,
            Expertise = f.Expertise,
            FeedbackDate = f.FeedbackDate

        };
        }

        
    }
}
