import { Mastery } from "./mastery.model";
import { ParticipantStats } from "./participantStats.model";
import { ParticipantTimeline } from "./participantTimeline.model";
import { Rune } from "./rune.model";

export class Participant {
  ParticipantId: number;
  Runes: Rune[];
  Stats: ParticipantStats;
  TeamId: number;
  Timeline: ParticipantTimeline;
  Spell1Id: number;
  Spell2Id: number;
  HighestAchievedSeasonTier: string;
  Masteries: Mastery[];
}
