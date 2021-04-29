using System;
using System.Linq;
using System.Collections.Generic;

namespace Dal
{
    public class MeetsDal
    {
        public static bool Register(Meets m)
        {
            try
            {
                using (Natural_wayEntities db = new Natural_wayEntities())
                {
                    db.Meets.Add(m);
                    db.SaveChanges();
                }
            }
            catch (Exception e)
            {
                return false;
            }
            return true;
        }


        //GetById
        public static Meets GetById(int id)
        {

            try
            {
                using (Natural_wayEntities db = new Natural_wayEntities())
                {
                    //where אפשר גם לפי
                    return db.Meets.Find(id);
                }
            }
            catch (Exception e)
            {
                return null;
            }


        }

        //GetByTherapistId
        public static List<Meets> GetByTherapistId(int t_id)
        {
            try
            {
                using (Natural_wayEntities db = new Natural_wayEntities())
                {

                    return db.Meets.Where(x => x.TherapistId == t_id).ToList();
                }
            }
            catch (Exception e)
            {
                return null;
            }
        }

        //GetByPatientId
        public static List<Meets> GetByPatientId(int p_id)
        {
            try
            {
                using (Natural_wayEntities db = new Natural_wayEntities())
                {
                  
                    return db.Meets.Where(x=>x.PatientId==p_id).ToList();
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
                    //db.Entry(item).State = EntityState.Deleted;
                    //pay <3!!! delete by id
                    db.Meets.Remove(db.Meets.Where(x => x.MeetId == id).FirstOrDefault());
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