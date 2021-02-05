export class ParticipantTimeline {
  ParticipantId: number;
  CsDiffPerMinDeltas: { [key: string]: number };
  DamageTakenPerMinDeltas: { [key: string]: number };
  Role: string;
  DamageTakenDiffPerMinDeltas: { [key: string]: number };
  XpPerMinDeltas: { [key: string]: number };
  XpDiffPerMinDeltas: { [key: string]: number };
  Lane: string;
  CreepsPerMinDeltas: { [key: string]: number };
  GoldPerMinDeltas: { [key: string]: number };
}
