
using System;
using System.Collections.Generic;
using System.Linq;
using System.Net;
using System.Net.Http;
using System.Web.Http;
using System.Web.Http.Cors;

namespace finalProject.Controllers
{
    [RoutePrefix("api/feedbacks")]
    [EnableCors(origins: "*", headers: "*", methods: "*")]
    public class FeedbacksController : ApiController
    {
        [HttpPost]
        [Route("AddFeedback")]
        public IHttpActionResult AddFeedback([FromBody] DTO.Feedbacks1 f)
        {
            //לשנות את השמות של הפונקציות וניתוב
            Bl.FeedbacksBl.AddFeedback(f);
            return Ok();
        }

        [HttpGet]
        [Route("GetById")]
        public IHttpActionResult GetById([FromBody] int id)
        {
             return Ok(Bl.FeedbacksBl.GetById(id));
        }

        [HttpDelete]
        [Route("DeleteById")]
        public IHttpActionResult DeleteById([FromBody] int id)
        {
            Bl.FeedbacksBl.DeleteById(id);
            return Ok();
        }

        
    }
}