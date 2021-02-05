import { GameCustomizationObject } from "./gameCustomizationObject.model";
import { Perks } from "./perks.model";

export class CurrentGameParticipant {
  ChampionId: number;
  Perks: Perks;
  ProfileIconId: number;
  Bot: boolean;
  TeamId: number;
  SummonerName: string;
  SummonerId: string;
  Spell1Id: number;
  Spell2Id: number;
  MyProperty: GameCustomizationObject[];
}
