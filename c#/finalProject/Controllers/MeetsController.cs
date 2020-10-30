
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

        [HttpGet]
        [Route("GetById")]
        public IHttpActionResult GetById([FromBody] int id)
        {
            return Ok(Bl.MeetsBl.GetById(id));
        }

        [HttpDelete]
        [Route("DeleteById")]
        public IHttpActionResult DeleteById([FromBody] int id)
        {
            Bl.MeetsBl.DeleteById(id);
            return Ok();
        }
    }
}