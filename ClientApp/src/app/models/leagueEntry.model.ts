import { miniseries } from "./miniseries.model";

export class LeagueEntry {
  LeagueId: string;
  SummonerId: string;
  SummonerName: string;
  QueueType: string;
  Tier: string;
  Rank: string;
  LeaguePoints: number;
  Wins: number;
  Losses: number;
  HotStreak: boolean;
  Veteran: boolean;
  FreshBlood: boolean;
  Inactive: boolean;
  MiniSeries: miniseries;
}
