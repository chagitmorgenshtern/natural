using Dal;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace DTO
{
   public class Patients1
    {
        public string Mail { get; set; }

        public static Patients Todal(Patients1 p)
        {
            return new Dal.Patients
            {
                
            };
        }

        
    }
}
