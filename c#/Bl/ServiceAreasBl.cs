using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using DTO;

namespace Bl
{
    class ServiceAreasBl
    {
        //Post
        public static void AddServiceAreas(ServiceAreas1 s)
        {
            Dal.ServiceAreasDal.AddServiceAreas(DTO.ServiceAreas1.Todal(s));
        }
        //Get
        public static ServiceAreas1 GetById(int id)
        {
            DTO.ServiceAreas1 ss = new ServiceAreas1(Dal.ServiceAreasDal.GetById(id));
            return ss;
        }
        //Delete
        public static void DeleteById(int id)
        {
            Dal.ServiceAreasDal.DeleteById(id);
        }
    }
}
