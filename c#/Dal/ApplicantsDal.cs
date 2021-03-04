using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Dal
{
   public class ApplicantsDal
    {
        //Post-Add new

        public static bool AddApplicant(Applicants a)
        {
            try
            {
                using (Natural_wayEntities db = new Natural_wayEntities())
                {
                    db.Applicants.Add(a);
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
        public static Applicants GetById(int id)
        {

            try
            {
                using (Natural_wayEntities db = new Natural_wayEntities())
                {
                    return db.Applicants.Find(id);
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
                    db.Applicants.Remove(db.Applicants.Where(x => x.ApplicantId == id).FirstOrDefault());
                    db.SaveChanges();
                    return true;
                }
            }
            catch (Exception e)
            {
                return false;
            }
        }
        
        //GetAll
        public static List<Applicants> GetAllApplicants()
        {
            
                try
                {
                    using (Natural_wayEntities db = new Natural_wayEntities())
                    {
                        List<Applicants> lst = db.Applicants.ToList();
                        return lst;
                    }
                }
                catch (Exception e)
                {
                    return null;
                }


            }
        }
    }
