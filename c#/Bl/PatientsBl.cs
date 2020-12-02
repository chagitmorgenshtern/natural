using DTO;
using System;
using Dal;

namespace Bl
{
    public class PatientsBl
    {
        public static bool Register(Patients1 p)
        {
             
            Patients patient = Patients1.Todal(p);
            return PatientsDal.Register(patient);      
        }

        //Get
        public static Patients1 GetById(int id)
        {
            DTO.Patients1 cc = new Patients1(Dal.PatientsDal.GetById(id));
            return cc;

        }
        //Delete
        public static void DeleteById(int id)
        {
            Dal.PatientsDal.DeleteById(id);
        }

        public static bool Login(string email, string pass)
        {
            Patients p= PatientsDal.GetByEmail(email);
            if (p != null)
                if (p.Password.Equals(pass))
                    return true;
            return false;
        }
    }
}