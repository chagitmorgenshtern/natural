using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using DTO;

namespace Bl
{
    class WorkHoursBl
    {
        //Post
        public static void AddWorkHours(WorkHours1 w)
        {
            Dal.WorkHoursDal.AddWorkHours(DTO.WorkHours1.Todal(w));
        }
        //Get
        public static WorkHours1 GetById(int id)
        {
            DTO.WorkHours1 ww = new WorkHours1(Dal.WorkHoursDal.GetById(id));
            return ww;
        }
        //Delete
        public static void DeleteById(int id)
        {
            Dal.WorkHoursDal.DeleteById(id);
        }
    }
}
