using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace MatchStatistic.WebApi.Models
{
	public class UserSiteDTO
	{
		public SummonerDTO summoner { get; set; }
		public LeagueEntryDTO[] leagueEntry { get; set; }
	}
}
