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
    }
}