﻿using DTO;
using System;
using Dal;

namespace Bl
{
    public class PatientsBl
    {
        public static bool Register(Patients1 p)
        {
             
            Patients patient = Patients1.Todal(p);
            return Dal.PatientsDal.Register(patient);
                
        }
    }
}