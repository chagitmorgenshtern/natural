using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Dal
{
    public class WorkHoursDal
    {
        //Post-Add new

        public static bool AddWorkHours(WorkHours w)
        {
            try
            {
                using (Natural_wayEntities db = new Natural_wayEntities())
                {
                    db.WorkHours.Add(w);
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
        public static WorkHours GetById(int id)
        {

            try
            {
                using (Natural_wayEntities db = new Natural_wayEntities())
                {
                    return db.WorkHours.Find(id);
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
                    db.WorkHours.Remove(db.WorkHours.Where(x => x.WorkHoursId == id).FirstOrDefault());
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
