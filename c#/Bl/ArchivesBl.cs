using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using DTO;
using Dal;

namespace Bl
{
    public class ArchivesBl
    {
        //Post
        public static void AddArchives(Archives1 a)
        {
            Dal.ArchivesDal.AddArchives(DTO.Archives1.Todal(a));
        }
        //Get
        public static Archives1 GetById(int id)
        {
            DTO.Archives1 aa = new Archives1(Dal.ArchivesDal.GetById(id));
            return aa;
        }
        //Delete
        public static void DeleteById(int id)
        {
            Dal.ArchivesDal.DeleteById(id);
        }
    }
}
