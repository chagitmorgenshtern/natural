using System;
using System.Collections.Generic;
using System.Linq;
using System.Net;
using System.Net.Http;
using System.Web.Http;
using System.Web.Http.Cors;

namespace finalProject.Controllers
{
    [RoutePrefix("api/categories")]
    [EnableCors(origins: "*", headers: "*", methods: "*")]
    public class CategoriesController : ApiController
    {
        [HttpPost]
        [Route("AddCategory")]
        public IHttpActionResult AddCategory([FromBody] DTO.Categories1 c)
        {
            
            Bl.CategoriesBl.AddCategory(c);
            return Ok();
        }

        [Route("GetAllCategories")]
        public IHttpActionResult GetAllCategories()
        {
            //List<DTO.Categories1> lst = Bl.CategoriesBl.GetAllCategories();
            //if (lst == null)
            //    return BadRequest();
            //יותר הגיוני ככה- כי אם הטבלה ריקה או שיש בעיה אחרת במסד נתונים זה לא תקלה בבקשה
            return Ok(Bl.CategoriesBl.GetAllCategories());
        }

        [HttpGet]
        [Route("GetById")]
        public IHttpActionResult GetById([FromBody] int id)
        {
            return Ok(Bl.CategoriesBl.GetById(id));
        }

        [HttpDelete]
        [Route("DeleteById")]
        public IHttpActionResult DeleteById([FromBody] int id)
        {
            Bl.CategoriesBl.DeleteById(id);
            return Ok();
        }
    }
}