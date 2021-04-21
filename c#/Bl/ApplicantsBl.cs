using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using Dal;
using DTO;
using System.Net;
using System.Net.Mail;

namespace Bl
{
    public class ApplicantsBl
    {
        //Post
        public static void AddApplicant(Applicants1 a)
        {
            Dal.ApplicantsDal.AddApplicant(DTO.Applicants1.Todal(a));
            string file = "c:/files/CV.txt";
            Email_send(a.TherapistTz, a.FirstName, a.LastName, a.Email, file);
        }

        public static void Email_send(string id, string firstName, string lastName, string email, string file)
        {
            string ID = id;
            string FirstName = firstName;
            string LastName = lastName;
            string Email = email; //naturalway.m01@gmail.com
            string File = file;

            MailMessage mail = new MailMessage();
            SmtpClient SmtpServer = new SmtpClient("smtp.gmail.com");
            mail.From = new MailAddress(Email);
            //
            mail.To.Add("naturalway.asher@gmail.com");
            //Test Mail - 1
            mail.Subject = "מייל אוטומטי";
            mail.Body = "שלום וברכה, מהאתר שלי- חגית";

            System.Net.Mail.Attachment attachment;
            attachment = new System.Net.Mail.Attachment(File);
            mail.Attachments.Add(attachment);

            SmtpServer.Port = 587;
            SmtpServer.UseDefaultCredentials = false;
            SmtpServer.Credentials = new System.Net.NetworkCredential(Email, "124578nw");
            SmtpServer.EnableSsl = true;

            SmtpServer.Send(mail);

        }

        public static List<Applicants1> GetAllApplicants()
        {
            List<Applicants1> lst = DTO.Applicants1.ConvertToListDto(Dal.ApplicantsDal.GetAllApplicants());

            return lst;
        }


        //static void Main(string[] args)
        //{
        //    string file = "c:/files/CV.txt";
        //    Email_send("12345678", "Moshe", "Cohen", "naturalway.m01@gmail.com", file);

        //}

        //Get
        public static Applicants1 GetById(int id)
        {
            DTO.Applicants1 aa = new Applicants1(Dal.ApplicantsDal.GetById(id));
            return aa;
        }
        //Delete
        public static void DeleteById(int id)
        {
            Dal.ApplicantsDal.DeleteById(id);
        }

    }
}
