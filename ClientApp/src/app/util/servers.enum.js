"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.GetServer = void 0;
var Servers;
(function (Servers) {
    Servers["eune"] = "EUN1";
    Servers["euw"] = "EUW1";
    Servers["na"] = "NA1";
    Servers["lan"] = "LA1";
    Servers["las"] = "LA2";
    Servers["br"] = "br1";
    Servers["oce"] = "oc1";
    Servers["ru"] = "ru1";
    Servers["tr"] = "tr1";
    Servers["jp"] = "jp1";
    Servers["kr"] = "kr";
})(Servers || (Servers = {}));
function GetServer(server) {
    if (server === 'EUNE') {
        return Servers.eune;
    }
    else if (server === 'EUW') {
        return Servers.euw;
    }
    else if (server === 'NA') {
        return Servers.na;
    }
    else if (server === 'LAN') {
        return Servers.lan;
    }
    else if (server === 'LAS') {
        return Servers.las;
    }
    else if (server === 'BR') {
        return Servers.br;
    }
    else if (server === 'RU') {
        return Servers.ru;
    }
    else if (server === 'TR') {
        return Servers.euw;
    }
    else if (server === 'OCE') {
        return Servers.oce;
    }
    else if (server === 'JP1') {
        return Servers.jp;
    }
    else if (server === 'KR') {
        return Servers.kr;
    }
}
exports.GetServer = GetServer;
//# sourceMappingURL=Servers.enum.js.map