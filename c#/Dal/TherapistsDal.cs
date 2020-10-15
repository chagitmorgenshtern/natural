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
        }
}
