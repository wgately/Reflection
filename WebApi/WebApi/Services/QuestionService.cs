using System.Collections.Generic;
using System.Configuration;
using System.Data;
using System.Data.SqlClient;
using WebApi.Models;

namespace WebApi.Services
{
    public class QuestionService : IQuestionService
    {
        public List<QuestionInfo> GetAll()
        {
            using (var con = GetConnection())
            {
                var cmd = con.CreateCommand();

                cmd.CommandText = "Get_Questions";
                cmd.CommandType = CommandType.StoredProcedure;

                using (var reader = cmd.ExecuteReader())
                {
                    var questions = new List<QuestionInfo>();

                    while (reader.Read())
                    {
                        var questionInfo = new QuestionInfo
                        {
                            Id = (int)reader["id"],
                            Name = (string)reader["name"],
                            Question = (string)reader["question"]
                        };
                        questions.Add(questionInfo);
                    }

                    return questions;
                }
            }
        }
        SqlConnection GetConnection()
        {
            var con = new SqlConnection(ConfigurationManager.ConnectionStrings["Reflection"].ConnectionString);
            con.Open();
            return con;
        }
    }
}