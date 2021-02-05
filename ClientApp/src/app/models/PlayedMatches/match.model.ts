import { Participant } from "./participant.model";
import { ParticipantIdentity } from "./ParticipantIdentity.model";
import { TeamStats } from "./teamStats.model";

export class Match {
  GameId: number;
  ParticipantIdentities: ParticipantIdentity[];
  QueueId: number;
  GameType: string;
  GameDuration: number;
  Teams: TeamStats[];
  PlatformId: string;
  GameCreation: number;
  SeasonId: number;
  GameVersion: string;
  MapId: number;
  GameMode: string;
  Participants: Participant[];
}
