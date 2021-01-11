export class accountData {

  //lol/summoner/v4/summoners/by-name/{summonerName}
  //lol/match/v4/matchlists/by-account/{encryptedAccountId}
  //lol/match/v4/matchlists/by-account/{encryptedAccountId}
  //lol/league/v4/entries/by-summoner/{encryptedSummonerId}

  // Basic acc info
  summID: string;
  name: string;
  lvl: string;
  summIcon: number;
  leagueId: string;
  queueType: string;
  tier: string;
  rank: string;
  summonerId: string;
  summonerName: string;
  leaguePoints: number;
  wins: number;
  losses: number;
  veteran: boolean;
  inactive: boolean;
  freshBlood: boolean;
  hotStreak: boolean;

  // Player stats
  // Ranked Solo
  //public string LeagueSolo { get; set; }
  //public string DivisionSolo { get; set; }
  //public int PointsSolo { get; set; }
  //public int WinsSolo { get; set; }
  //public int LosesSolo { get; set; }
  //public float WinratioSolo { get; set; }
  //public bool HotStreakSolo { get; set; }

  // Ranked Flex
  //public string LeagueFlex { get; set; }
  //public string DivisionFlex { get; set; }
  //public int PointsFlex { get; set; }
  //public int WinsFlex { get; set; }
  //public int LosesFlex { get; set; }
  //public float WinratioFlex { get; set; }
  //public bool HotStreakFlex { get; set; }


  // Match History

}
