using System;

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
    }
}