import { GameCustomizationObject } from "./gameCustomizationObject.model";
import { Perks } from "./perks.model";

export class CurrentGameParticipant {
  championId: number;
  perks: Perks;
  profileIconId: number;
  bot: boolean;
  teamId: number;
  summonerName: string;
  summonerId: string;
  spell1Id: number;
  spell2Id: number;
  myProperty: GameCustomizationObject[];
}
