
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
        //[HttpGet]
        //[Route("login")]
        // //לשנות בהמשך לפי מה שמתאים
        //public IHttpActionResult Login()
        //{
        //    return Ok("hello");
        //}

        [HttpPost]
        [Route("Register")]
        public IHttpActionResult Register([FromBody] DTO.Therapists1 t)
        {
            //bl.TherapistsBl.NewHours(list<date>,list<hours>);
            Bl.TherapistsBl.Register(t);
            return Ok();
        }

        [HttpGet]
        [Route("GetById/{id}")]
        public IHttpActionResult GetById([FromBody] int id)
        {
            return Ok(Bl.TherapistsBl.GetById(id)); 
        }

        //get
        //list<hours>hoursDoctor=bl.trapist.getAllHours();
        //list<hours>hoursmetupal=bl.metupla.getHours(idDoctor);
        //check hour wiill do!! not taking history
        //contain

        //dto return add fieldof status-

        [HttpGet]
        [Route("GetAll")]
        public IHttpActionResult GetAll()
        {
            List<DTO.Therapists1> lst = Bl.TherapistsBl.GetAll();
            return Ok(lst);
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