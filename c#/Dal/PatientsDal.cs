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
                using(Natural_wayEntities3 db=new Natural_wayEntities3())
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
        //        using (Natural_wayEntities3 db = new Natural_wayEntities3())
        //        {
                    
        //        }
        //    }
        //}


        //Get
        public static Patients GetById(int id)
        {

            try
            {
                using (Natural_wayEntities3 db = new Natural_wayEntities3())
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

        
        public static Patients GetByEmail(string email)
        {
            try
            {
                using (Natural_wayEntities3 db = new Natural_wayEntities3())
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
                using (Natural_wayEntities3 db = new Natural_wayEntities3())
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