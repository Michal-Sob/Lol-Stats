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

		// GET: api/<SummonerController>
		[HttpGet]
		public async Task<ActionResult<SummonerDTO>> Get()
		{
			var results = await _summonerService.GetSummByName("eun1", "Paczatek");

			return results;
		}

		// GET: api/summoner/{server}/{summName}
		[HttpGet("{server}/{summName}")]
		public async Task<ActionResult<LeagueEntryDTO[]>> Get(string server, string summName)
		{
			var results = await _summonerService.GetLeaguesByName(server, summName);

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
