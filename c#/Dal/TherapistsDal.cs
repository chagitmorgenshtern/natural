using System;
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
                    using (Natural_wayEntities db = new Natural_wayEntities())
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
                using (Natural_wayEntities db = new Natural_wayEntities())
                {
                    return db.Therapists.Find(id);
                }
            }
            catch (Exception e)
            {
                return null;
            }


        }

        public static bool UpdatePatient(Therapists therapist)
        {
            try
            {
                using (Natural_wayEntities db = new Natural_wayEntities())
                {
                    //יצירת רפרנס לאובייקט מהמסד נתונים
                    //Therapists newt = db.Therapists.Where(t => t.TherapistId == therapist.TherapistId).FirstOrDefault();
                    Therapists newt = db.Therapists.Where(t => t.TherapistTz == therapist.TherapistTz).FirstOrDefault();


                    newt.TherapistTz = (therapist.TherapistTz != null && therapist.TherapistTz != "") ? therapist.TherapistTz: newt.TherapistTz;
                    newt.FirstName = (therapist.FirstName != null && therapist.FirstName != "") ? therapist.FirstName: newt.FirstName;
                    newt.LastName = (therapist.LastName != null && therapist.LastName != "") ? therapist.LastName: newt.LastName;
                    newt.Password = (therapist.Password != null && therapist.Password != "") ? therapist.Password: newt.Password;
                    newt.PhoneNumber = (therapist.PhoneNumber != null && therapist.PhoneNumber != "") ? therapist.PhoneNumber: newt.PhoneNumber;
                    newt.DateOfBirth = (therapist.DateOfBirth != null ) ? therapist.DateOfBirth: newt.DateOfBirth;
                    newt.Email = (therapist.Email != null && therapist.Email != "") ? therapist.Email: newt.Email;
                    newt.Image = (therapist.Image != null && therapist.Image != "") ? therapist.Image : newt.Image;
                    newt.ServiceAreaId = (therapist.ServiceAreaId != null ) ? therapist.ServiceAreaId : newt.ServiceAreaId;
                    newt.Address = (therapist.Address != null && therapist.Address != "") ? therapist.Address : newt.Address;

                    db.SaveChanges();
                }
            }
            catch (Exception e)
            {
                return false;
            }
                return true;
        }

        

        //GetAll
        public static List<Therapists> GetAll()
        {
            try
            {
                using (Natural_wayEntities db = new Natural_wayEntities())
                {
                    List<Therapists> lst = db.Therapists.ToList();
                    return lst;
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
