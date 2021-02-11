import { BannedChampion } from "./bannedChampions.model";
import { Observer } from "./observer.model";
import { Participant } from "./participant.model";

export class FeaturedGameInfo {
  gameMode: string;
  gameLength: number;
  mapId: number;
  gameType: string;
  bannedChampions: BannedChampion[];
  gameId: number;
  observers: Observer;
  gameQueueConfigId: number;
  gameStartTime: number;
  participants: Participant[];
  platformId: string;
}
