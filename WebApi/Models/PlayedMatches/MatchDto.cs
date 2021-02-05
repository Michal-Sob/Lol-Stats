using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace MatchStatistic.WebApi.Models.PlayedMatches
{
	public class MatchDto
	{
		public long GameId { get; set; }
		public ParticipantIdentityDto[] ParticipantIdentities { get; set; }
		public int QueueId { get; set; }
		public string GameType { get; set; }
		public long GameDuration { get; set; }
		public TeamStatsDto[] Teams { get; set; }
		public string PlatformId { get; set; }
		public long GameCreation { get; set; }
		public int SeasonId { get; set; }
		public string GameVersion { get; set; }
		public int MapId { get; set; }
		public string GameMode { get; set; }
		public ParticipantDto[] Participants { get; set; }
	}
}
