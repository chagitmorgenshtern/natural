
using System;
using System.Collections.Generic;
using System.Linq;
using System.Net;
using System.Net.Http;
using System.Web.Http;
using System.Web.Http.Cors;

namespace finalProject.Controllers
{
    [RoutePrefix("api/serviceAreas")]
    [EnableCors(origins: "*", headers: "*", methods: "*")]
    public class ServiceAreasController : ApiController
    {
        [HttpPost]
        [Route("AddServiceAreas")]
        public IHttpActionResult AddServiceAreas([FromBody] DTO.ServiceAreas1 s)
        {

            Bl.ServiceAreasBl.AddServiceAreas(s);
            return Ok();
        }

        [HttpGet]
        [Route("GetById")]
        public IHttpActionResult GetById([FromBody] int id)
        {
            return Ok(Bl.ServiceAreasBl.GetById(id));
        }

        [Route("GetAllServiceAreas")]
        public IHttpActionResult GetAllServiceAreas()
        {
            List<DTO.ServiceAreas1> ls = Bl.ServiceAreasBl.GetAllServiceAreas();
            return Ok(ls);
        }

        [HttpDelete]
        [Route("DeleteById")]
        public IHttpActionResult DeleteById([FromBody] int id)
        {
            Bl.ServiceAreasBl.DeleteById(id);
            return Ok();
        }
    }
}