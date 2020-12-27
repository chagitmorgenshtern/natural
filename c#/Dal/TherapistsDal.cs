using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Dal
{
    public class TherapistsDal
    { 
            public static bool Register(Therapists t)
            {

                try
                {
                    using (Natural_wayEntities db = new Natural_wayEntities())
                    {
                        db.Therapists.Add(t);
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
        public static Therapists GetById(int id)
        {

            try
            {
                using (Natural_wayEntities db = new Natural_wayEntities())
                {
                    return db.Therapists.Find(id);
                }
            }
            catch (Exception e)
            {
                return null;
            }


        }

        //GetAll
        public static List<Therapists> GetAll()
        {

            try
            {
                using (Natural_wayEntities db = new Natural_wayEntities())
                {
                    List<Therapists> lst = db.Therapists.ToList();
                    return lst;
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
                    db.Therapists.Remove(db.Therapists.Where(x => x.TherapistId == id).FirstOrDefault());
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
