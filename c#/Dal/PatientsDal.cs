using System;

namespace Dal
{
    public class PatientsDal
    {
        public static bool Register(Patients p)
        {

            try
            {
                using(Natural_wayEntities1 db=new Natural_wayEntities1())
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