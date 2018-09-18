using System.Collections.Generic;
using System.Web.Http;
using WebApi.Models;
using WebApi.Services;

namespace WebApi.Controllers
{
    [RoutePrefix("api/questions")]
    public class QuestionController : ApiController 
    {
        readonly QuestionService questionService = new QuestionService();

        [Route, HttpGet]
        public List<QuestionInfo> GetAll()
        {
            return questionService.GetAll();
        }
    }
}