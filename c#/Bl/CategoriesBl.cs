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


    }
}