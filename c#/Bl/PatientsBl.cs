﻿using DTO;
using System;
using Dal;

namespace Bl
{
    public class PatientsBl
    {
        public static Patients1 Login(string email, string pass)
        {
            Patients p_dal = PatientsDal.GetByEmail(email);
            if (p_dal == null)
                return null;

            Patients1 p = new Patients1(p_dal);
            
            if (p.Password.Equals(pass))
                    return p;
            return null;
        }

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

        public static Patients1 GetByEmail(string email)
        {
            DTO.Patients1 p = new Patients1(Dal.PatientsDal.GetByEmail(email));
            return p;
        }

        //Delete
        public static void DeleteById(int id)
        {
            Dal.PatientsDal.DeleteById(id);
        }

        public static bool UpdatePatient(DTO.Patients1 p)
        {
           return Dal.PatientsDal.UpdatePatient(Patients1.Todal(p));
        }
    }
}