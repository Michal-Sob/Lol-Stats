import { TeamBans } from "./teamBans.model";

export class TeamStats {
  TowerKills: number;
  RiftHeraldKills: number;
  FirstBlood: boolean;
  InhibitorKills: number;
  Bans: TeamBans[];
  FirstBaron: boolean;
  FirstDragon: boolean;
  DragonKills: number;
  BaronKills: number;
  FirstInhibitor: boolean;
  FirstTower: boolean;
  VilemawKills: number;
  FirstRiftHerald: boolean;
  TeamId: number;
  Win: string;
}
