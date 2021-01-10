
using System;
using System.Collections.Generic;
using System.Linq;
using System.Net;
using System.Net.Http;
using System.Web.Http;
using System.Web.Http.Cors;

namespace finalProject.Controllers
{
    [RoutePrefix("api/applicants")]
    [EnableCors(origins: "*", headers: "*", methods: "*")]
    public class ApplicantsController : ApiController
    { 
            [HttpPost]
            [Route("AddApplicant")]
            public IHttpActionResult AddApplicant(DTO.Applicants1 newA)
            {

                Bl.ApplicantsBl.AddApplicant(newA);
                return Ok();
            }

            //[HttpGet]
            //[Route("GetById")]
            //public IHttpActionResult GetById([FromBody] int id)
            //{
            //    return Ok(Bl.ArchivesBl.GetById(id));
            //}

            //[HttpDelete]
            //[Route("DeleteById")]
            //public IHttpActionResult DeleteById([FromBody] int id)
            //{
            //    Bl.ArchivesBl.DeleteById(id);
            //    return Ok();
            //}
        }
    }
