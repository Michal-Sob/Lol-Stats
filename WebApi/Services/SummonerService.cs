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
            //client.BaseAddress = new Uri("https://eun1.api.riotgames.com/lol/");
            // GitHub API versioning
            //client.DefaultRequestHeaders.Add("Accept",
            //    "application/vnd.github.v3+json");
            //// GitHub requires a user-agent
            //client.DefaultRequestHeaders.Add("User-Agent",
            //    "HttpClientFactory-Sample");
            client.DefaultRequestHeaders.Add("X-Riot-Token", "RGAPI-1590f481-1a08-44bd-a914-07ac07f8c812"); //Put your API key

            Client = client;
        }

        public async Task<SummonerDTO> GetSummByName(string server, string summName)
        {
            var response = await Client.GetAsync($"https://{server}.api.riotgames.com/lol/summoner/v4/summoners/by-name/{summName}");

            response.EnsureSuccessStatusCode();

			Console.WriteLine(await response.Content.ReadAsStringAsync());
            return await response.Content.ReadAsAsync<SummonerDTO>();
        }


		public async Task<LeagueEntryDTO[]> GetLeaguesByName(string server, string summName)
		{
			SummonerDTO summDTO = await GetSummByName(server, summName);

            var response = await Client.GetAsync($"https://{server}.api.riotgames.com/lol/league/v4/entries/by-summoner/{summDTO.Id}");

            response.EnsureSuccessStatusCode();

            Console.WriteLine(await response.Content.ReadAsStringAsync());

            return await response.Content.ReadAsAsync<LeagueEntryDTO[]>();
		}
	}
}
