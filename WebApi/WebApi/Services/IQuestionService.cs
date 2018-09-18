using System.Collections.Generic;
using WebApi.Models;

namespace WebApi.Services
{
    public interface IQuestionService
    {
        List<QuestionInfo> GetAll();
    }
}