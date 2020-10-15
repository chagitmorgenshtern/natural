using DTO;
using System;
using Dal;

namespace Bl
{
    public class MeetsBl
    {
        
        public static bool Register(Meets1 m)
        {

            Meets meet = Meets1.Todal(m);
            return Dal.MeetsDal.Register(meet);

        }
    }
}