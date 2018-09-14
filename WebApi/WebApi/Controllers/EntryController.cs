using System.Collections.Generic;
using System.Web.Http;
using WebApi.Models;
using WebApi.Services;

namespace WebApi.Controllers
{
    [RoutePrefix("api/entries")]
    public class EntryController : ApiController
    {
        readonly EntryService entryService = new EntryService();

        [Route, HttpGet]
        public List<Entry> GetAll()
        {
            return entryService.GetAll();
        }

        [Route, HttpPost]
        public int Create(EntryCreate model)
        {
            return entryService.Create(model);
        }
    }
}