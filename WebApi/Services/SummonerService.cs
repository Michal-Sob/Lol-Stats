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
            client.DefaultRequestHeaders.Add("X-Riot-Token", "RGAPI-3ea7bead-23f2-4967-95ab-619ee4641e56");

            Client = client;
        }

        public async Task<SummonerDTO> GetSummByName(string summName)
        {
            //Tas<Stream>
            var response = await Client.GetAsync(
                $"summoner/v4/summoners/by-name/{summName}");

            response.EnsureSuccessStatusCode();

            Console.WriteLine(response.Headers);
            Console.WriteLine(await response.Content.ReadAsStringAsync());
            //using var responseStream = await response.Content.ReadAsStreamAsync();
            //return responseStream;
            return await response.Content.ReadAsAsync<SummonerDTO>();
        }
    }
}
