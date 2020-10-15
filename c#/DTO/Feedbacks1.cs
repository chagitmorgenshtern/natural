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

        public int Id { get; set; }
        public string PatientId { get; set; }
        public string TheFeedback { get; set; }


        //-----------constructors-----------

        public Feedbacks1()
        {

        }
        //gets dal and convert it to dto (by the ctor)
        public Feedbacks1(Dal.Feedbacks f)
        {
            Id = f.Id;
            PatientId = f.PatientId;
            TheFeedback = f.TheFeedback;
        }

        //-----------methodes => converts-----------

        public static Feedbacks Todal(Feedbacks1 f)
        {
            return new Dal.Feedbacks
            {
                Id = f.Id,
                PatientId = f.PatientId,
                TheFeedback = f.TheFeedback
            };
        }

        
    }
}
