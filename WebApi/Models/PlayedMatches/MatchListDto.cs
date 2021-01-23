using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace MatchStatistic.WebApi.Models.PlayedMatches
{
	public class MatchListDto
	{
		public int StartIndex { get; set; }
		public int TotalGames { get; set; }
		public int EndIndex { get; set; }
		public MatchReferenceDto[] Matches { get; set; }

	}
}
