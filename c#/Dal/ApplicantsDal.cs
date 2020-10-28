using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Dal
{
    class ApplicantsDal
    {
        //Post-Add new

        public static bool AddApplicant(Applicants a)
        {
            try
            {
                using (Natural_wayEntities3 db = new Natural_wayEntities3())
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
    }
}
