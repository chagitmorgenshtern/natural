
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
        
    }
}