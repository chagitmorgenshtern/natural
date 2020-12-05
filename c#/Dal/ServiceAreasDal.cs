using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Dal
{
    public class ServiceAreasDal
    {
        //Post-Add new

        public static bool AddServiceAreas(ServiceAreas s)
        {
            try
            {
                using (Natural_wayEntities4 db = new Natural_wayEntities4())
                {
                    db.ServiceAreas.Add(s);
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
        public static ServiceAreas GetById(int id)
        {

            try
            {
                using (Natural_wayEntities4 db = new Natural_wayEntities4())
                {
                    return db.ServiceAreas.Find(id);
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
                    db.ServiceAreas.Remove(db.ServiceAreas.Where(x => x.SAId == id).FirstOrDefault());
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
