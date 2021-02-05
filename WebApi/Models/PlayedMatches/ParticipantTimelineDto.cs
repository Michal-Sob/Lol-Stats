using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace MatchStatistic.WebApi.Models
{
	public class ParticipantTimelineDto
	{
		public int ParticipantId { get; set; }
		public Dictionary<string,double> CsDiffPerMinDeltas { get; set; }
		public Dictionary<string,double> DamageTakenPerMinDeltas { get; set; }
		public string Role { get; set; }
		public Dictionary<string,double> DamageTakenDiffPerMinDeltas { get; set; }
		public Dictionary<string,double> XpPerMinDeltas { get; set; }
		public Dictionary<string,double> XpDiffPerMinDeltas { get; set; }
		public string Lane { get; set; }
		public Dictionary<string,double> CreepsPerMinDeltas { get; set; }
		public Dictionary<string,double> GoldPerMinDeltas { get; set; }
	}
}
