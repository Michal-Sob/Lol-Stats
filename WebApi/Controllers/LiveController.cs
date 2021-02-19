using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using MatchStatistic.WebApi.Models.LiveMatches;
using MatchStatistic.WebApi.Services;
using Microsoft.AspNetCore.Mvc;

// For more information on enabling Web API for empty projects, visit https://go.microsoft.com/fwlink/?LinkID=397860

namespace MatchStatistic.WebApi.Controllers
{
	[Route("api/[controller]")]
	[ApiController]
	public class LiveController : ControllerBase
	{
		private readonly LiveMatchesService _liveService;

		public LiveController(LiveMatchesService liveService)
		{
			_liveService = liveService;
		}
		
		// GET: api/<LiveController>/currentGame/by-summoner/{server}/{summId}
		[HttpGet("currentGame/by-summoner/{server}/{summId}")]
		public async Task<ActionResult<CurrentGameInfo>> GetCurrentGame(string server, string summId)
		{
			var results = await _liveService.GetCurrentGameBySummId(server, summId);

			return results;
		}

		// GET: api/<LiveController>/FeaturedGames/by-server/{server}
		[HttpGet("FeaturedGames/by-server/{server}")]
		public async Task<ActionResult<FeaturedGames>> GetFeaturedGames(string server)
		{
			var results = await _liveService.GetFeaturedLiveGames(server);

			return results;
		}
	}
}
