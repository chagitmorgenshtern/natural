﻿using System;
using System.Linq;

namespace Dal
{
    public class FeedbacksDal
    {
        //Post-Add
        public static bool AddFeedback(Feedbacks f)
        {
            try
            {
                using (Natural_wayEntities db = new Natural_wayEntities())
                {
                    db.Feedbacks.Add(f);
                    db.SaveChanges();
                    return true;
                }
            }
            catch (Exception e)
            {
                return false;
            }
            
        }

        //GetById
        public static Feedbacks GetById(int id)
        {
            
            try
            {
                using (Natural_wayEntities db = new Natural_wayEntities())
                {
                    //where אפשר גם לפי
                    return db.Feedbacks.Find(id);
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
                using (Natural_wayEntities db = new Natural_wayEntities())
                {
                    //db.Entry(item).State = EntityState.Deleted;
                    //pay <3!!! delete by id
                    db.Feedbacks.Remove(db.Feedbacks.Where(x=>x.FeedbackId==id).FirstOrDefault());
                    db.SaveChanges();
                    return true;
                }
            }
            catch (Exception e)
            {
                return false;
            }
        }
        
        //Update
        //db.Entry(item).State = EntityState.Modified;

    }
}