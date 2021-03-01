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

                    newp.PatientTz = patient.PatientTz;
                    newp.Firstname = patient.Firstname;
                    newp.Lastname = patient.Lastname;
                    newp.Password = patient.Password;
                    newp.PhoneNumber1 = patient.PhoneNumber1;
                    newp.PhoneNumber2 = patient.PhoneNumber2;
                    newp.DateOfBirth = patient.DateOfBirth;
                    newp.Email = patient.Email;

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