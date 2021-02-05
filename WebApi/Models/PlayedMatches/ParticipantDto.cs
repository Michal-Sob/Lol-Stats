using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace MatchStatistic.WebApi.Models.PlayedMatches
{
	public class ParticipantDto
	{
		public int ParticipantId { get; set; }
		public RuneDto[] Runes { get; set; }
		public ParticipantStatsDto Stats { get; set; }
		public int TeamId { get; set; }
		public ParticipantTimelineDto Timeline { get; set; }
		public int Spell1Id { get; set; }
		public int Spell2Id { get; set; }
		public string HighestAchievedSeasonTier { get; set; }
		public MasteryDto[] Masteries { get; set; }
	}
}
