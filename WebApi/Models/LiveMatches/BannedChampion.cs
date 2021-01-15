using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace MatchStatistic.WebApi.Models.Matches
{
	public class BannedChampion
	{
		public int PickTurn { get; set; }
		public long ChampionId { get; set; }
		public long TeamId { get; set; }
	}
}
