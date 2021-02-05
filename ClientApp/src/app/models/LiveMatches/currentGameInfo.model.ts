import { BannedChampion } from "./bannedChampions.model";
import { CurrentGameParticipant } from "./currentGameParticipant.model";
import { Observer } from "./observer.model";

export class CurrentGameInfo {
  GameId: number;
  GameType: string;
  GameStartTime: number;
  MapId: number;
  GameLength: number;
  PlatformId: string;
  GameMode: string;
  BannedChampions: BannedChampion[];
  GameQueueConfigId: number;
  Observers: Observer;
  Participants: CurrentGameParticipant[];
}
