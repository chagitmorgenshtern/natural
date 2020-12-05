using System;
using System.Linq;
using System.Collections.Generic;

namespace Dal
{
    public class CategoriesDal
    {
        //Post-Add new

        public static bool AddCategory(Categories c)
        {
            try
            {
                using (Natural_wayEntities4 db = new Natural_wayEntities4())
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
                using (Natural_wayEntities4 db = new Natural_wayEntities4())
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

        //GetAll
        public static List<Categories> GetAll()
        {

            try
            {
                using (Natural_wayEntities4 db = new Natural_wayEntities4())
                {
                    List<Categories> lst = db.Categories.ToList();
                    return lst;
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