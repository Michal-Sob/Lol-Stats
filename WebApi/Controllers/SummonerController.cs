using System;
using System.Collections.Generic;
using System.IO;
using System.Linq;
using System.Net.Http;
using System.Threading.Tasks;
using MatchStatistic.WebApi.Models;
using MatchStatistic.WebApi.Services;
using Microsoft.AspNetCore.Mvc;

namespace MatchStatistic.WebApi.Controllers
{
	[ApiController]
	[Route("api/[controller]")]
	public class SummonerController : ControllerBase
	{

		private readonly SummonerService _summonerService;

		public SummonerController(SummonerService summonerService)
		{
			_summonerService = summonerService;
		}

		/// <summary>
		/// Gets summoner model from Riot API
		/// </summary>
		/// <param name="server"></param>
		/// <param name="summName"></param>
		/// <returns>summonerDTO object more info https://developer.riotgames.com/apis#summoner-v4/GET_getBySummonerName </returns>
		//GET: api/<SummonerController>
		[HttpGet("summonerDTO/by-name/{server}/{summName}")]
		public async Task<ActionResult<SummonerDTO>> GetSummDTO(string server, string summName)
		{
			var results = await _summonerService.GetSummByName(server, summName);

			return results;
		}


		/// <summary>
		/// Gets array of leagues model from Riot APi
		/// </summary>
		/// <param name="server"></param>
		/// <param name="summName"></param>
		/// <returns>Array of LeaguEntryDTO more info on this model https://developer.riotgames.com/apis#league-v4/GET_getLeagueEntriesForSummoner </returns>
		[HttpGet("leaguesDTO/by-name/{server}/{summName}")]
		public async Task<ActionResult<LeagueEntryDTO[]>> GetLeagueDTO(string server, string summName)
		{
			var results = await _summonerService.GetLeaguesByName(server, summName);

			return results;
		}

		/// <summary>
		/// Gets <c>UserSiteDTO</c> (which is few summmoner data Riot Api models merged together) from Riot APi
		/// </summary>
		/// <param name="server"></param>
		/// <param name="summName"></param>
		/// <returns><c>UserSiteDTO</c>. Its a model with all information required on account site</returns>
		// GET: api/summoner/{server}/{summName}
		[HttpGet("summonerSiteDTO/by-name/{server}/{summName}")]
		public async Task<ActionResult<UserSiteDTO>> Get(string server, string summName)
		{
			var results = await _summonerService.GetAllSummDetailsByName(server, summName);

			return results;
		}

		// GET api/<SummonerController>/5
		[HttpGet("{id}")]
		public string Get(int id)
		{
			return "value";
		}
	}
}
