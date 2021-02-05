
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace MatchStatistic.WebApi.Models.PlayedMatches
{
	public class PlayerDto
	{
		public int ProfileIcon { get; set; }
		public string AccountId { get; set; }
		public string MatchHistoryUri { get; set; }
		public string CurrentAccountId { get; set; }
		public string CurrentPlatformId { get; set; }
		public string SummonerName { get; set; }
		public string PlatformId { get; set; }
	}
}
