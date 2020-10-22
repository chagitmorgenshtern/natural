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
    }
}