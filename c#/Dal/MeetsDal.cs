using System;

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
    }
}