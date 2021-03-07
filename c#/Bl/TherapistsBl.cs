using DTO;
using System;
using Dal;
using System.Collections.Generic;

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
            DTO.Therapists1 tt = new Therapists1(Dal.TherapistsDal.GetById(id));
            return tt;
        }
        //GetAll
        public static List<Therapists1> GetAll()
        {
            List<Therapists1> lst = DTO.Therapists1.ConvertToListDto(Dal.TherapistsDal.GetAll());

            return DTO.Therapists1.ConvertToListDto(Dal.TherapistsDal.GetAll());

        }
        //Delete
        public static void DeleteById(int id)
        {
            Dal.TherapistsDal.DeleteById(id);
        }

        public static bool UpdateTherapist(Therapists1 t)
        {
            return Dal.TherapistsDal.UpdatePatient(Therapists1.Todal(t));
        }
        
    }
}