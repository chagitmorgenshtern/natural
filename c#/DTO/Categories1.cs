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

        public int CategoryCode { get; set; }
        public string CategoryName { get; set; }
        public Nullable<int> ParentCategoryCode { get; set; }

        //-----------constructors-----------


        //-----------methodes => converts-----------

        public static Categories Todal(Categories1 c)
        {
            return new Dal.Categories
            {
                CategoryCode = c.CategoryCode,
                CategoryName = c.CategoryName,
                ParentCategoryCode = c.ParentCategoryCode
            };
        }
    }
}
