
using System;
using System.Collections.Generic;
using System.Linq;
using System.Net;
using System.Net.Http;
using System.Web.Http;
using System.Web.Http.Cors;

namespace finalProject.Controllers
{
    [RoutePrefix("api/archives")]
    [EnableCors(origins: "*", headers: "*", methods: "*")]
    public class ArchivesController : ApiController
    { 
            [HttpPost]
            [Route("AddArchives")]
            public IHttpActionResult AddArchives([FromBody] DTO.Archives1 a)
            {

                Bl.ArchivesBl.AddArchives(a);
                return Ok();
            }

            [HttpGet]
            [Route("GetById")]
            public IHttpActionResult GetById([FromBody] int id)
            {
                return Ok(Bl.ArchivesBl.GetById(id));
            }

            [HttpDelete]
            [Route("DeleteById")]
            public IHttpActionResult DeleteById([FromBody] int id)
            {
                Bl.ArchivesBl.DeleteById(id);
                return Ok();
            }
        }
    }
