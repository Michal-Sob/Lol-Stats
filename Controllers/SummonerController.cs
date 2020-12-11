using System;
using System.Collections.Generic;
using System.IO;
using System.Linq;
using System.Net.Http;
using System.Threading.Tasks;
using MatchStatistic.WebApi.Models;
using MatchStatistic.WebApi.Services;
using Microsoft.AspNetCore.Mvc;

// For more information on enabling Web API for empty projects, visit https://go.microsoft.com/fwlink/?LinkID=397860

namespace MatchStatistic.Controllers
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
			//Task<ActionResult<SummonerDTO>>
			var results = await _summonerService.GetSummByName("Paczatek");
			//Console.WriteLine("a chuj" + await _summonerService.GetSummByName("Paczatek"));
			//Console.WriteLine("o ty kurwo" + results);

			//Console.WriteLine($"{results.AccountId}");
			Console.WriteLine(results.Puuid);

			return results;
			//return await _summonerService.GetSummByName("Paczatek");
		}

		// GET api/<SummonerController>/5
		[HttpGet("{id}")]
		public string Get(int id)
		{
			return "value";
		}
	}
}
