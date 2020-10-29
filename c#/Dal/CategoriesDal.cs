using System;
using System.Linq;

namespace Dal
{
    public class CategoriesDal
    {
        //Post-Add new

        public static bool AddCategory(Categories c)
        {
            try
            {
                using (Natural_wayEntities3 db = new Natural_wayEntities3())
                {
                    db.Categories.Add(c);
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
        public static Categories GetById(int id)
        {

            try
            {
                using (Natural_wayEntities3 db = new Natural_wayEntities3())
                {
                    //where אפשר גם לפי
                    return db.Categories.Find(id);
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
                using (Natural_wayEntities3 db = new Natural_wayEntities3())
                {
                    db.Categories.Remove(db.Categories.Where(x => x.CategoryId == id).FirstOrDefault());
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