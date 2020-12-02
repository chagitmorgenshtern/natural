
using System;
using System.Collections.Generic;
using System.Linq;
using System.Net;
using System.Net.Http;
using System.Web.Http;
using System.Web.Http.Cors;
using DTO;
using Bl;
namespace finalProject.Controllers
{
    [RoutePrefix("api/patients")]
    //[EnableCors(origins: "*", headers: "*", methods: "*")]
    public class PatientsController : ApiController
    {
        //EntityManager em = new EntityManager();
        [HttpGet]
        [Route("Login/{email}/{pass}")]
        public IHttpActionResult Login(string email, string pass)
        {
            //if(Bl.PatientsBl.Login(email, pass))
            //    return Ok();
            return Ok();

            
        }

        [HttpPost]
        [Route("Register")]
        public IHttpActionResult Register([FromBody] DTO.Patients1 p)
        {
            bool b=Bl.PatientsBl.Register(p);
            if (b == true)
                return Ok();
            return BadRequest();
        }

        [HttpGet]
        [Route("GetById")]
        public IHttpActionResult GetById([FromBody] int id)
        {
            return Ok(Bl.PatientsBl.GetById(id));
        }

        [HttpDelete]
        [Route("DeleteById")]
        public IHttpActionResult DeleteById([FromBody] int id)
        {
            Bl.PatientsBl.DeleteById(id);
            return Ok();
        }
    }
}