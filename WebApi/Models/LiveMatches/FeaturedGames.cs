﻿using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace MatchStatistic.WebApi.Models.LiveMatches
{
	public class FeaturedGames
	{
		public FeaturedGameInfo[] GameList { get; set; }
		public long ClientRefreshInterval { get; set; }
	}
}