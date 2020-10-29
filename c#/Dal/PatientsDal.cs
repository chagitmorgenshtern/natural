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

        //GetById
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