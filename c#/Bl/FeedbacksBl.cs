using System;
using DTO;
using Dal;
namespace Bl
{
    public class FeedbacksBl
    {
        //Post
        public static bool AddFeedback(Feedbacks1 f)
        {
            //Feedbacks feedback = Feedbacks1.Todal(f);
            return Dal.FeedbacksDal.AddFeedback(Feedbacks1.Todal(f));
        }

        //Get
        public static Feedbacks1 GetById(int id)
        {
            //Feedbacks feedback = Feedbacks1.Todal(f);
            //במקום פונקציה 
            //toDTO
            // DTO יש בנאי שמקבל דל ומחזיר 
            DTO.Feedbacks1 ff= new Feedbacks1(Dal.FeedbacksDal.GetById(id)) ;
            return ff;

        }
        //Delete
        public static void DeleteById(int id)
        {
            Dal.FeedbacksDal.DeleteById(id);
        }
    }
}