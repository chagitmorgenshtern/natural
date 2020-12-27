using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using Dal;

namespace DTO
{
    public class ServiceAreas1
    {

        //-----------fields-----------
        public int SAId { get; set; }
        public string SAName { get; set; }
        //-----------constructors-----------

        public ServiceAreas1()
        {

        }
        //gets dal and convert it to dto (by the ctor)
        public ServiceAreas1(Dal.ServiceAreas s)
        {
            SAId = s.SAId;
            SAName = s.SAName;
        }

        //-----------methodes => converts-----------

        public static ServiceAreas Todal(ServiceAreas1 s)
        {
            return new Dal.ServiceAreas
            {
                SAId = s.SAId,
                SAName=s.SAName
            };
        }

        public static List<ServiceAreas1> ConvertToListDto(List<ServiceAreas> lst)
        {
            if (lst == null)
                return null;
            return lst.Select(s => new ServiceAreas1(s)).ToList();
        }







    }
}
