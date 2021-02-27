import { ChampionBasic } from "../Assets/Champion/championBasic.model";

export class Participant {
  bot: boolean;
  spell2Id: number;
  profileIconId: number;
  summonerName: string;
  championId: number;
  teamId: number;
  spell1Id: number;
  champion: ChampionBasic;
}
