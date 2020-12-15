using MatchStatistic.WebApi.Models;
using System;
using System.Collections.Generic;
using System.IO;
using System.Linq;
using System.Net.Http;
using System.Text.Json;
using System.Threading.Tasks;

namespace MatchStatistic.WebApi.Services
{
    public class SummonerService
    {
        public HttpClient Client { get; }

        public SummonerService(HttpClient client)
        {
            client.BaseAddress = new Uri("https://eun1.api.riotgames.com/lol/");
            // GitHub API versioning
            //client.DefaultRequestHeaders.Add("Accept",
            //    "application/vnd.github.v3+json");
            //// GitHub requires a user-agent
            //client.DefaultRequestHeaders.Add("User-Agent",
            //    "HttpClientFactory-Sample");
            client.DefaultRequestHeaders.Add("X-Riot-Token", "RGAPI-1affde34-c03e-4ac6-843a-048e850d2044"); //Put your API key

            Client = client;
        }

        public async Task<SummonerDTO> GetSummByName(string server, string summName)
        {
            Client.BaseAddress = new Uri($"https://{server}.api.riotgames.com/lol/");

            var response = await Client.GetAsync($"summoner/v4/summoners/by-name/{summName}");

            response.EnsureSuccessStatusCode();

            Console.WriteLine(response.Headers);
            Console.WriteLine(await response.Content.ReadAsStringAsync());

            return await response.Content.ReadAsAsync<SummonerDTO>();
        }
    }
}
