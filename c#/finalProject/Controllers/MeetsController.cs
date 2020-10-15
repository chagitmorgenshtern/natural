
using System;
using System.Collections.Generic;
using System.Linq;
using System.Net;
using System.Net.Http;
using System.Web.Http;
using System.Web.Http.Cors;

namespace finalProject.Controllers
{
    [RoutePrefix("api/meets")]
    [EnableCors(origins: "*", headers: "*", methods: "*")]
    public class MeetsController : ApiController
    {
        [HttpPost]
        [Route("Register")]
        public IHttpActionResult Register([FromBody] DTO.Meets1 m)
        {
            Bl.MeetsBl.Register(m);
            return Ok();
        }
    }
}