using System;

namespace Dal
{
    public class MeetsDal
    {
        public static bool Register(Meets m)
        {

            try
            {
                using (Natural_wayEntities3 db = new Natural_wayEntities3())
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