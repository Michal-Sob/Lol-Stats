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

  if (server === 'EUNE') {
    return Servers.eune;
  }
  else if (server === 'EUW') {
    return Servers.euw
  }
  else if (server === 'NA') {
    return Servers.na;
  }
  else if (server === 'LAN') {
    return Servers.lan
  }
  else if (server === 'LAS') {
    return Servers.las;
  }
  else if (server === 'BR') {
    return Servers.br
  }
  else if (server === 'RU') {
    return Servers.ru;
  }
  else if (server === 'TR') {
    return Servers.euw
  }
  else if (server === 'OCE') {
    return Servers.oce
  }
  else if (server === 'JP1') {
    return Servers.jp
  }
  else if (server === 'KR') {
    return Servers.kr
  }
}
