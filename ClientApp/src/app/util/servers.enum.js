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
    switch (server) {
        case "EUNE": return Servers.eune;
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
exports.GetServer = GetServer;
//# sourceMappingURL=Servers.enum.js.map