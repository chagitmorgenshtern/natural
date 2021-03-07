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
                using (Natural_wayEntities db = new Natural_wayEntities())
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
                using (Natural_wayEntities db = new Natural_wayEntities())
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
                using (Natural_wayEntities db = new Natural_wayEntities())
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
                using (Natural_wayEntities db = new Natural_wayEntities())
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

        public static int[] GetCategoriesByTherapistId(int therapistId)
        {
            try
            {
                using (Natural_wayEntities db = new Natural_wayEntities())
                {
                    int[] categories = db.Categories_Therapists.Where(c => c.TherapistId == therapistId).Select(c=> c.CategotyId).ToArray();
                    return categories;
                }
            }
            catch (Exception e)
            {
                return null;
            }
        }

        public static string[] GetCategoriesNamesByTherapistId(int therapistId)
        {
            try
            {
                using (Natural_wayEntities db = new Natural_wayEntities())
                {
                    int[] categories = GetCategoriesByTherapistId(therapistId);
                    string[] categoriesNames = db.Categories.Where(c => categories.Contains(c.CategoryId)).Select(c => c.CategoryName).ToArray();
                    return categoriesNames;
                }
            }
            catch (Exception e)
            {
                return null;
            }
        }

    }
}