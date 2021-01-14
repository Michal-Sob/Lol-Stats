using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace MatchStatistic.WebApi.Models.Matches
{
	public class Participant
	{
		public bool Bot { get; set; }
		public long Spell2Id { get; set; }
		public long ProfileIconId { get; set; }
		public string SummonerName { get; set; }
		public long ChampionId { get; set; }
		public long TeamId { get; set; }
		public long Spell1Id { get; set; }
	}
}
