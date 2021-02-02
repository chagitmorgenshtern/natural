using System;
using System.Collections.Generic;
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

        public static List<Categories1> GetAllCategories()
        {
            return Categories1.ConvertToListDto(Dal.CategoriesDal.GetAll());
        }

        public int[] GetCategoriesByTherapistId(int therapistId)
        {
            return Dal.CategoriesDal.GetCategoriesByTherapistId(therapistId);
        }
    }


}