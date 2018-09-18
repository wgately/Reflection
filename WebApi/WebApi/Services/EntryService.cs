using System;
using System.Collections.Generic;
using System.Configuration;
using System.Data;
using System.Data.SqlClient;
using WebApi.Models;

namespace WebApi.Services
{
    public class EntryService : IEntryService
    {
        public List<Entry> GetAll()
        {
            using (var con = GetConnection())
            {
                var cmd = con.CreateCommand();

                cmd.CommandText = "Entry_GetAll";
                cmd.CommandType = CommandType.StoredProcedure;

                using (var reader = cmd.ExecuteReader())
                {
                    var entries = new List<Entry>();

                    while (reader.Read())
                    {
                        var entry = new Entry
                        {
                            Id = (int)reader["id"],
                            UserId = (int)reader["userId"],
                            Learned = (string)reader["learned"],
                            Challenge = (string)reader["challenge"],
                            Overcome = (string)reader["overcome"],
                            Read = (string)reader["read"],
                            Goal = (string)reader["goal"],
                            Video = (string)reader["video"],
                            Travel = (string)reader["travel"],
                            Meet = (string)reader["meet"],
                            DateCreated = (DateTime)reader["dateCreated"],
                            DateModified = (DateTime)reader["dateModified"]
                        };

                        entries.Add(entry);
                    }

                    return entries;
                }
            }
        }

        public int Create(EntryCreate request)
        {
            using (var con = GetConnection())
            {
                var cmd = con.CreateCommand();
                cmd.CommandText = "Entry_Create";
                cmd.CommandType = CommandType.StoredProcedure;
                cmd.Parameters.AddWithValue("@userId", request.UserId);
                cmd.Parameters.AddWithValue("@learned", request.Learned);
                cmd.Parameters.AddWithValue("@challenge", request.Challenge);
                cmd.Parameters.AddWithValue("@overcome", request.Overcome);
                cmd.Parameters.AddWithValue("@meet", request.Meet);
                cmd.Parameters.AddWithValue("@goal", request.Goal);
                cmd.Parameters.AddWithValue("@video", request.Video);
                cmd.Parameters.AddWithValue("@travel", request.Travel);
                cmd.Parameters.AddWithValue("@read", request.Read);
                cmd.Parameters.Add("@Id", SqlDbType.Int).Direction = ParameterDirection.Output;

                cmd.Parameters.AddWithValue

                cmd.ExecuteNonQuery();

                return (int)cmd.Parameters["@Id"].Value;


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