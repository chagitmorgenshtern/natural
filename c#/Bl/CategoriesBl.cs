using System;
using DTO;

namespace Bl
{
    public class CategoriesBl
    {
        //Post
        public static void AddCategory(Categories1 c)
        {
            Dal.CategoriesDal.AddCategory(DTO.Categories1.Todal(c));
        }
        //Get
        public static Categories1 GetById(int id)
        {
            DTO.Categories1 cc = new Categories1(Dal.CategoriesDal.GetById(id));
            return cc;

        }
        //Delete
        public static void DeleteById(int id)
        {
            Dal.CategoriesDal.DeleteById(id);
        }

    }
}