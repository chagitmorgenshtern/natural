using DTO;
using System;
using Dal;
using System.Collections.Generic;

namespace Bl
{
    public class MeetsBl
    {
        //Post
        public static bool Register(Meets1 m)
        {
            //אותו דבר כמו הפונקציות האחרות של אד
            Meets meet = Meets1.Todal(m);
            return Dal.MeetsDal.Register(meet);
        }
        //Get
        public static Meets1 GetById(int id)
        {
            DTO.Meets1 cc = new Meets1(Dal.MeetsDal.GetById(id));
            return cc;
        }
        //Delete
        public static void DeleteById(int id)
        {
            Dal.MeetsDal.DeleteById(id);
        }

        public static List<DTO.Meets1> GetByPatientId(int p_id)
        {
            return DTO.Meets1.ConvertToListDto(Dal.MeetsDal.GetByPatientId(p_id));
        }
    }
}