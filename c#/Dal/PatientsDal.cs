using System;

namespace Dal
{
    public class PatientsDal
    {
        public static bool Register(Patient p)
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
    }
}