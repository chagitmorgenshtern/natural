using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Dal
{
    public class ArchivesDal
    {
        //Post-Add
        public static bool AddArchives(Archives a)
        {
            try
            {
                using (Natural_wayEntities4 db = new Natural_wayEntities4())
                {
                    db.Archives.Add(a);
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
        public static Archives GetById(int id)
        {
            try
            {
                using (Natural_wayEntities4 db = new Natural_wayEntities4())
                {
                    //where אפשר גם לפי
                    return db.Archives.Find(id);
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
                    db.Archives.Remove(db.Archives.Where(x => x.ArchivesId == id).FirstOrDefault());
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
