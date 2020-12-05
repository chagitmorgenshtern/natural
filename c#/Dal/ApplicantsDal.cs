using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Dal
{
   public class ApplicantsDal
    {
        //Post-Add new

        public static bool AddApplicant(Applicants a)
        {
            try
            {
                using (Natural_wayEntities4 db = new Natural_wayEntities4())
                {
                    db.Applicants.Add(a);
                    db.SaveChanges();
                    return true;
                }
            }
            catch (Exception e)
            {
                return false;
            }
        }
        //GetById
        public static Applicants GetById(int id)
        {

            try
            {
                using (Natural_wayEntities4 db = new Natural_wayEntities4())
                {
                    return db.Applicants.Find(id);
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
                using (Natural_wayEntities4 db = new Natural_wayEntities4())
                {
                    db.Applicants.Remove(db.Applicants.Where(x => x.ApplicantId == id).FirstOrDefault());
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
