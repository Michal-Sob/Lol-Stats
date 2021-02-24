enum Servers {
  eune = 'EUN1',
  euw = 'EUW1',
  na = 'NA1',
  lan = 'LA1',
  las = 'LA2',
  br = 'br1',
  oce = 'oc1',
  ru = 'ru1',
  tr = 'tr1',
  jp = 'jp1',
  kr = 'kr'
}

export function GetServer(server: string) {

  switch (server) {
    case "EUNE":return Servers.eune;
    case "EUW": return Servers.euw;
    case "NA": return Servers.na;
    case "LAN": return Servers.lan;
    case "LAS": return Servers.las;
    case "BR": return Servers.br;
    case "RU": return Servers.ru;
    case "TR": return Servers.tr;
    case "OCE": return Servers.oce;
    case "JP": return Servers.jp;
    case "KR": return Servers.kr;
    default: Servers.eune;
  }
}
