﻿using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Dal
{
    public class TherapistsDal
    { 
            public static bool Register(Therapists t)
            {

                try
                {
                    using (Natural_wayEntities3 db = new Natural_wayEntities3())
                    {
                        db.Therapists.Add(t);
                        db.SaveChanges();
                    }
                }
                catch (Exception e)
                {
                    return false;
                }
                return true;
            }

        //GetById
        public static Therapists GetById(int id)
        {

            try
            {
                using (Natural_wayEntities3 db = new Natural_wayEntities3())
                {
                    return db.Therapists.Find(id);
                }
            }
            catch (Exception e)
            {
                return null;
            }


        }


        //Delete
        public static bool DeleteById(int id)
        {
            try
            {
                using (Natural_wayEntities3 db = new Natural_wayEntities3())
                {
                    db.Therapists.Remove(db.Therapists.Where(x => x.TherapistId == id).FirstOrDefault());
                    db.SaveChanges();
                    return true;
                }
            }
            catch (Exception e)
            {
                return false;
            }
        }
    }
}
