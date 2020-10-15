
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
    [EnableCors(origins: "*", headers: "*", methods: "*")]
    public class TherapistsController : ApiController
    {
        [HttpGet]
        [Route("login")]
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
    }
}