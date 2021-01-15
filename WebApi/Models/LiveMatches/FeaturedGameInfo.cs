using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace MatchStatistic.WebApi.Models.Matches
{
	public class FeaturedGameInfo
	{
		public string GameMode { get; set; }
		public long GameLength { get; set; }
		public long MapId { get; set; }
		public string GameType { get; set; }
		public BannedChampion[] BannedChampions { get; set; }
		public long GameId { get; set; }
		public Observer Observers { get; set; }
		public long GameQueueConfigId { get; set; }
		public long GameStartTime { get; set; }
		public Participant[] Participants { get; set; }
		public string PlatformId { get; set; }
	}
}
