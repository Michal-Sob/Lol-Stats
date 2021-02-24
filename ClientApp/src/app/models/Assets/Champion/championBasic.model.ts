export class ChampionBasic {
  id: string;
  key: number;
  name: string;
  title: string;
  blurb: string;
  info: {
    attack: number,
    defense: number,
    magic: number,
    difficulty: number
  };
  image: {
    full: string,
    sprite: string,
    group: string
  };
  tags: string[];
  partype: string;
  stats: { [key:string] : number };
}
