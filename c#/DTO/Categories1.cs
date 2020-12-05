using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using Dal;

namespace DTO
{
    public class Categories1
    {
        //-----------fields-----------

        public int CategoryId { get; set; }
        public string CategoryName { get; set; }


        //-----------constructors-----------

        public Categories1()
        {

        }
        //gets dal and converts it to dto (by the ctor)
        public Categories1(Dal.Categories c)
        {
            CategoryId = c.CategoryId;
            CategoryName = c.CategoryName;

        }


        //-----------methodes => converts-----------

        public static Categories Todal(Categories1 c)
        {
            return new Dal.Categories
            {
                CategoryId = c.CategoryId,
                CategoryName = c.CategoryName
            };
        }

        public static List<Categories1> ConvertToListDto(List<Categories> lst)
        {
            if (lst == null)
                return null;
            return lst.Select(c => new Categories1(c)).ToList();
        }
    }
}
