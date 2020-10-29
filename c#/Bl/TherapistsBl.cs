using DTO;
using System;
using Dal;

namespace Bl
{
    public class TherapistsBl
    {
        public static bool Register(Therapists1 t)
        {
            Therapists therapist = Therapists1.Todal(t);
            return Dal.TherapistsDal.Register(therapist);
        }

        //Get
        public static Therapists1 GetById(int id)
        {
            DTO.Therapists1 cc = new Therapists1(Dal.TherapistsDal.GetById(id));
            return cc;
        }
        //Delete
        public static void DeleteById(int id)
        {
            Dal.TherapistsDal.DeleteById(id);
        }

    }
}