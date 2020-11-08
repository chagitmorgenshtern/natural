
using System;
using System.Collections.Generic;
using System.Linq;
using System.Net;
using System.Net.Http;
using System.Web.Http;
using System.Web.Http.Cors;

namespace finalProject.Controllers
{
    [RoutePrefix("api/therapists")]
    //[EnableCors(origins: "*", headers: "*", methods: "*")]
    public class TherapistsController : ApiController
    {
        [HttpGet]
        [Route("login")]
         //לשנות בהמשך לפי מה שמתאים
        public IHttpActionResult Login()
        {
            return Ok("hello");
        }

        [HttpPost]
        public IHttpActionResult Register([FromBody] DTO.Therapists1 t)
        {
            Bl.TherapistsBl.Register(t);
            return Ok();
        }

        [HttpGet]
        [Route("GetById")]
        public IHttpActionResult GetById([FromBody] int id)//
        {
            return Ok(Bl.TherapistsBl.GetById(id));// 
        }

        [HttpGet]
        [Route("GetAll")]
        public IHttpActionResult GetAll()
        {
            return Ok(Bl.TherapistsBl.GetAll());
        }

        [HttpDelete]
        [Route("DeleteById")]
        public IHttpActionResult DeleteById([FromBody] int id)
        {
            Bl.TherapistsBl.DeleteById(id);
            return Ok();
        }

    }
}