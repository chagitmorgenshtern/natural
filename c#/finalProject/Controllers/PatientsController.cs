
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
            return Ok(Bl.PatientsBl.Login(email, pass));

            
        }

        [HttpPost]
        [Route("Register")]
        public IHttpActionResult Register(DTO.Patients1 p)
        {
            bool b=Bl.PatientsBl.Register(p);
            if (b == true)
                return Ok(b);
            return BadRequest("not register please try again!");
        }

        [HttpGet]
        [Route("GetById/{id}")]
        public IHttpActionResult GetById([FromBody] int id)
        {
            return Ok(Bl.PatientsBl.GetById(id));
        }

        [HttpGet]
        [Route("GetByEmail/{email}")]
        public IHttpActionResult GetByEmail([FromBody] String email)
        {
            return Ok(Bl.PatientsBl.GetByEmail(email));
        }

        [HttpDelete]
        [Route("DeleteById/{id}")]
        public IHttpActionResult DeleteById([FromBody] int id)
        {
            Bl.PatientsBl.DeleteById(id);
            return Ok();
        }

        [HttpPut]
        [Route("UpdatePatient/{p}")]
        public IHttpActionResult UpdatePatient([FromBody] DTO.Patients1 p)
        {    
            return Ok(Bl.PatientsBl.UpdatePatient(p));
        }
    }
}