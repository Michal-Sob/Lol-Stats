using MatchStatistic.WebApi.Models.PlayedMatches;
using System;
using System.Collections.Generic;
using System.Configuration;
using System.Linq;
using System.Net.Http;
using System.Threading.Tasks;

namespace MatchStatistic.WebApi.Services
{
	public class PlayedMatchesService
	{
		public HttpClient Client { get; }
		public UriBuilder Uri;

		public PlayedMatchesService(HttpClient client)
		{
			client.DefaultRequestHeaders.Add("X-Riot-Token", ConfigurationManager.AppSettings.Get("X-Riot-Token")); //Put your API key

			Client = client;

			var uri = new UriBuilder();
		}

		public async Task<MatchListDto> GetLastTenGamesbyName(string server, string summName)
		{



			var response = await Client.GetAsync($"https://{server}.api.riotgames.com/lol/matchlists/by-account/{summName}");

			response.EnsureSuccessStatusCode();

			return await response.Content.ReadAsAsync<MatchListDto>();
		}
	}
}
