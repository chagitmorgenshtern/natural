using System;
using System.Linq;

namespace Dal
{
    public class MeetsDal
    {
        public static bool Register(Meets m)
        {
            try
            {
                using (Natural_wayEntities4 db = new Natural_wayEntities4())
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


        //GetById
        public static Meets GetById(int id)
        {

            try
            {
                using (Natural_wayEntities4 db = new Natural_wayEntities4())
                {
                    //where אפשר גם לפי
                    return db.Meets.Find(id);
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
                    //db.Entry(item).State = EntityState.Deleted;
                    //pay <3!!! delete by id
                    db.Meets.Remove(db.Meets.Where(x => x.MeetId == id).FirstOrDefault());
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