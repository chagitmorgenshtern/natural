
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
    [EnableCors(origins: "*", headers: "*", methods: "*")]
    public class PatientController : ApiController
    {
        //EntityManager em = new EntityManager();
        [HttpGet]
        [Route("Login")]
        public IHttpActionResult Login(string name, string pass)
        {
            return Ok("hello");
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
    }
}