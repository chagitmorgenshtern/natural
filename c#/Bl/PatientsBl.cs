using DTO;
using System;
using Dal;

namespace Bl
{
    public class PatientsBl
    {
        public static bool Register(Patients1 p)
        {
             
            Patient patient = Patients1.Todal(p);
            return PatientsDal.Register(patient);
                
        }
    }
}