import { BannedChampion } from "./bannedChampions.model";
import { CurrentGameParticipant } from "./currentGameParticipant.model";
import { Observer } from "./observer.model";

export class CurrentGameInfo {
  gameId: number;
  gameType: string;
  gameStartTime: number;
  mapId: number;
  gameLength: number;
  platformId: string;
  gameMode: string;
  bannedChampions: BannedChampion[];
  gameQueueConfigId: number;
  observers: Observer;
  participants: CurrentGameParticipant[];
}
