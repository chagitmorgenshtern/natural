using System;
using System.Linq;
namespace Dal
{
    public class PatientsDal
    {
        public static bool Register(Patients p)
        {

            try
            {
                using(Natural_wayEntities db=new Natural_wayEntities())
                {
                    db.Patients.Add(p);
                    db.SaveChanges();
                }
            }
            catch(Exception e)
            {
                return false;   
            }
            return true;
        }

        //public static bool Login(string email, string pass)
        //{
        //    try
        //    {
        //        using (Natural_wayEntities db = new Natural_wayEntities())
        //        {
                    
        //        }
        //    }
        //}


        //Get
        public static Patients GetById(int id)
        {

            try
            {
                using (Natural_wayEntities db = new Natural_wayEntities())
                {
                    //where אפשר גם לפי
                    return db.Patients.Find(id);
                }
            }
            catch (Exception e)
            {
                return null;
            }


        }

        public static bool UpdatePatient(Patients patient)
        {
            try
            {
                using (Natural_wayEntities db = new Natural_wayEntities())
                {
                    //יצירת רפרנס לאובייקט מהמסד נתונים
                    Patients newp = db.Patients.Where(p => p.PatientId == patient.PatientId).FirstOrDefault();

                    if(patient.PatientTz != null && patient.PatientTz != "")
                        newp.PatientTz =  patient.PatientTz;
                    if(patient.Firstname != null && patient.Firstname != "") 
                        newp.Firstname = patient.Firstname;
                    if(patient.Lastname != null && patient.Lastname != "")
                        newp.Lastname = patient.Lastname;
                    if(patient.Password != null && patient.Password != "")
                        newp.Password = patient.Password;
                    if(patient.PhoneNumber1 != null && patient.PhoneNumber1 != "")
                        newp.PhoneNumber1 =  patient.PhoneNumber1;
                    if(patient.PhoneNumber2 != null && patient.PhoneNumber2 != "")
                        newp.PhoneNumber2 =  patient.PhoneNumber2;
                    if(patient.DateOfBirth != null)
                        newp.DateOfBirth =  patient.DateOfBirth;
                    if(patient.Email != null && patient.Email != "")
                        newp.Email =  patient.Email;

                    //newp.PatientTz = (patient.PatientTz != null && patient.PatientTz != "") ? patient.PatientTz: newp.PatientTz;
                    //newp.Firstname = (patient.Firstname != null && patient.Firstname != "") ? patient.Firstname: newp.Firstname;
                    //newp.Lastname = (patient.Lastname != null && patient.Lastname != "") ? patient.Lastname: newp.Lastname;
                    //newp.Password = (patient.Password != null && patient.Password != "") ? patient.Password: newp.Password;
                    //newp.PhoneNumber1 = (patient.PhoneNumber1 != null && patient.PhoneNumber1 != "") ? patient.PhoneNumber1: newp.PhoneNumber1;
                    //newp.PhoneNumber2 = (patient.PhoneNumber2 != null && patient.PhoneNumber2 != "") ? patient.PhoneNumber2: newp.PhoneNumber2;
                    //newp.DateOfBirth = (patient.DateOfBirth != null ) ? patient.DateOfBirth: newp.DateOfBirth;
                    //newp.Email = (patient.Email != null && patient.Email != "") ? patient.Email: newp.Email;

                    db.SaveChanges();
                }
            }
            catch (Exception e)
            {
                return false;
            }
            return true;
        }

        public static Patients GetByEmail(string email)
        {
            try
            {
                using (Natural_wayEntities db = new Natural_wayEntities())
                {
                    Patients p= db.Patients.Where(x => x.Email.Equals(email)).FirstOrDefault();
                    return p;
                }
            }
            catch (Exception e)
            {
                Console.WriteLine(e.Message);
                return null;
            }
        }


        //Delete
        public static bool DeleteById(int id)
        {
            try
            {
                using (Natural_wayEntities db = new Natural_wayEntities())
                {
                    db.Patients.Remove(db.Patients.Where(x => x.PatientId == id).FirstOrDefault());
                    db.SaveChanges();
                    return true;
                }
            }
            catch (Exception e)
            {
                return false;
            }
        }


    }
}