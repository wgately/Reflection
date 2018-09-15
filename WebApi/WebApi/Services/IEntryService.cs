using System.Collections.Generic;
using WebApi.Models;

namespace WebApi.Services
{
    public interface IEntryService
    {
        int Create(EntryCreate request);
        List<Entry> GetAll();
    }
}