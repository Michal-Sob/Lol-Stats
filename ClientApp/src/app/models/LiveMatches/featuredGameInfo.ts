import { BannedChampion } from "./bannedChampions.model";
import { Observer } from "./observer.model";
import { Participant } from "./participant.model";

export class FeaturedGameInfo {
  GameMode: string;
  GameLength: number;
  MapId: number;
  GameType: string;
  BannedChampions: BannedChampion[];
  GameId: number;
  Observers: Observer;
  GameQueueConfigId: number;
  GameStartTime: number;
  Participants: Participant[];
  PlatformId: string;
}
