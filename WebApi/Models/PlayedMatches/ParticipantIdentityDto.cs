using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace MatchStatistic.WebApi.Models.PlayedMatches
{
	public class ParticipantIdentityDto
	{
		public int ParticipantId { get; set; }
		public PlayerDto Player { get; set; }
	}
}
