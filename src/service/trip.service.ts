import {Injectable} from '@angular/core';
import {ConnectionHeader, Line, Trip} from "../app/trips/trip/trip.model";
import {literal} from "@angular/compiler/src/output/output_ast";

@Injectable({
    providedIn: 'root'
})
export class TripService {

    constructor() {
    }

    getTrip(id: number): Trip {
        return this.TRIPS[id];
    }

    getTrips(): (Trip & { id: string })[] {
        return Object.entries(this.TRIPS)
            .map(([id, trip]) => ({...trip, id}))
    }

    private readonly TRIPS: { [id: string]: Trip } = {
        1: {
            name: "Carnuntum",
            stops: [{
                type: "connection",
                title: "Anreise",
                headers: [l(), t("Floridsdorf"), t("Praterstern"), t("Bad Deutsch-Altenburg")],
                connection: [
                    ["S7", "08:06", "08:15", "09:20"],
                    ["S7", "09:06", "09:15", "10:20"],
                    ["S7", "10:06", "10:15", "11:20"],
                    ["S7", "11:06", "11:15", "12:20"],
                ]
            }, {
                type: "basic",
                id: "1097",
                duration: "1-2h"
            }, {
                type: "connection",
                title: "Weiterreise nach Petronell-Carnuntum",
                headers: [l(), i(), t("Bad Deutsch-Altenburg"), t("Petronell-Carnuntum")],
                connection: [
                    ["S7", "Stündlich zur Minute", "'10", "'15"]
                ],
                connectionInfo: "Alternative: Fußweg ca. 60-90 Minuten entlang Donauufer"
            }, {
                type: "basic",
                id: "1210",
                duration: "2h"
            }, {
                type: "basic",
                id: "1334001",
                duration: "16:00 bis 17:30 (nur Samstags)",
                durationCaption: "Dauer lt. Website"
            }, {
                type: "connection",
                title: "Rückreise",
                headers: [l(), t("Petronell-Carnuntum"), t("Praterstern"), t("Floridsdorf")],
                connection: [
                    ["S7", "18:19", "19:16", "19:20"],
                    ["S7", "19:19", "20:16", "20:20"],
                    ["S7", "20:19", "21:16", "21:20"],
                    ["S7", "21:19", "22:16", "22:20"]
                ],
            }]
        },
        2: {
            name: "Mamuz",
            stops: [{
                type: "connection",
                title: "Anreise",
                headers: [l(), t("Praterstern"), t("Floridsdorf"), t("Mistelbach")],
                connection: [
                    ["REX 2", "09:48", "09:56", "10:39"],
                    ["REX 2", "11:47", "11:56", "12:39"],
                ]
            }, {
                type: "custom",
                templateName: "schienentaxi",
                info: {id: "1418"}
            }, {
                type: "basic",
                id: "1063",
                duration: "1-2h"
            }, {
                type: "connection",
                title: "Rückreise Mistelbach",
                headers: [l(), t("Asparn an der Zaya Hauptplatz"), t("Mistelbach Hauptplatz")],
                connection: [
                    ["589", "13:18", "13:32"],
                    ["589", "15:18", "15:32"],
                    ["589", "17:18", "17:32"],
                ]
            }, {
                type: "basic",
                id: "1061",
                duration: "1,5h"
            }, {
                type: "basic",
                id: "1326038",
                duration: "1h"
            }, {
                type: "custom",
                templateName: "heuriger-mistelbach"
            }, {
                type: "connection",
                title: "Rückreise",
                headers: [l(), t("Mistelbachn Stadt"), t("Floridsdorf"), t("Praterstern")],
                connection: [
                    ["REX 2", "19:34", "20:20", "20:30"],
                    ["S2", "20:34", "21:35", "21:43"],
                    ["REX 2", "21:34", "22:20", "22:30"],
                    ["REX 2", "22:34", "23:20", "23:30"],
                ]
            }]
        },
        999: {
            name: "Wien",
            stops: [[{
                type: "basic",
                id: "1394",
                connections: [{
                    station: "Praterstern",
                    lines: [sb("S1-7"), U1, U2, bim("O"), bim(5), bus("5B"), bus("80A"), bus("82A")]
                }]
            }, {
                type: "basic",
                id: "1414",
                connections: [{
                    station: "Hietzing",
                    lines: [U4, bim(10), bim(60), bus("51A"), bus("56A"), bus("56B"), bus("58A"), bus("58B")]
                }]
            }, {
                type: "basic",
                id: "777",
                connections: [{
                    station: "Quartier Belvedere",
                    lines: [sb("S1-4"), bim("D"), bim("O"), bim(18)]
                }, {station: "Hauptbahnhof Ost", lines: [s("S60"), s("S80")]}]
            }, {
                type: "basic",
                id: "1326025",
                connections: [{station: "Zentralfriedhof 2. Tor", lines: [bim(11), bim(71)]}]
            }, {
                type: "basic",
                id: "870",
                connections: [{station: "Wolfsbergbrücke", lines: [bus("43B"), bus("52A/B")]}, {station: "Bujattigasse", lines: [bim(49), bus("49A"), bus("50A/B")]}, {station: "Hütteldorf", lines: [S45, s("S80"), U4]}]
            }, {
                type: "basic",
                id: "942",
                connections: [{station: " Khevenhüllerstraße", lines: [bus("41A")]}, {station: "Pötzleinsdorf", lines: [bim(41)]}]
            }, {
                type: "basic",
                id: "1166",
                connections: [{station: "Herrengasse", lines: [U3]}]
            }, {
                type: "basic",
                id: "971",
                connections: [
                    {station: "Burgring", lines: [..._(bim, "D", 1, 2, 71), bus("57A")]},
                    {station: "Museumsqaurtier", lines: [U2]},
                    {station: "Volkstheater", lines: [U3]},
                    {station: "Ring, Volkstheater", lines: [bim(46), bim(49), bus("48A")]}
                ]
            }, {
                type: "basic",
                id: "973",
                connections: [
                    {station: "Schwarzenbergplatz", lines: _(bim,"D", 2, 71)},
                    {station: "Oper, Karlsplatz", lines: [WLB, ..._(bim, 1, 62), bus("59A")]},
                    {station: "Karlsplatz", lines: [U1, U2, U4, bus("4A")]}
                ]
            }, {
                type: "basic",
                id: "979",
                connections: [
                    {station: "Arsenal", lines: [bus("69A")]},
                    {station: "Heinrich-Drimml-Platz", lines: _(bim, 18)},
                    {station: "Quartier Belvedere", lines: [sb("S1-4"), ..._(bim, "D", "O")]}
                ]
            }, {
                type: "basic",
                id: "1326026",
                connections: [
                    {station: "Kalsplatz", lines: [U1, U2, U4, bus("4A")]},
                    {station: "Oper, Kalsplatz", lines: [WLB, ..._(bim, "D", 1, 2, 62, 71), bus("59A")]}
                ]
            }, {
                type: "basic",
                id: "1267",
                connections: [
                    {station: "Inzersdorf", lines: [WLB]},
                    {station: "Purkytgasse", lines: _(bus, "65A", "66A", "67B")}
                ]
            }, {
                type: "basic",
                id: "293870",
                connections: [
                    {station: "Spitalgasse", lines: _(bim, 5, 33, 37, 38, 40, 41, 42)},
                    {station: "Schottentor", lines: [U2, ..._(bim, "D", 1, 43, 44, 71)]}
                ]
            }, {
                type: "basic",
                id: "932637",
                connections: [
                    {station: "Messe-Prater", lines: [U2]},
                    {station: "Praterstern", lines: [sb("S1-7"), U1, ..._(bim, "O", 5), ..._(bus, "5B", "80A")]},
                ]
            }, {
                type: "basic",
                id: "1168",
                connections: [
                    {station: "Oper", lines: [WLB, ..._(bim, "D", 1, 2, 62, 71), bus("59A")]},
                    {station: "Karlsplatz", lines: [U1, U2, U4, bus("4A")]},
                    {station: "Stephansplatz", lines: [U1, U3]}
                ]
            }, {
                type: "basic",
                id: "1059",
                connections: [
                    {station: "Stubentor", lines: [U3, bim(2), bus("74A")]},
                    {station: "Landstraße", lines: [sb("S1-7"), U4, bim("O")]},
                    {station: "Julius-Raab-Platz", lines: [bim(1)]}
                ]
            }, {
                type: "basic",
                id: "293872",
                connections: [
                    {station: "Volkstheater", lines: [U2, U3, bim(49), bus("48A")]},
                    {station: "Auerspergstraße", lines: [bim(46)]}
                ]
            }, {
                type: "basic",
                id: "1105",
                connections: [
                    {station: "Schottentor", lines: [U2, ..._(bim, "D", 1, 37, 38, 40, 41, 42, 43, 44, 71), bus("40A")]},
                    {station: "Herreng.", lines: [U3]}
                ]
            }, {
                type: "basic",
                id: "932639",
                connections: [
                    {station: "Oper", lines: [WLB, ..._(bim, "D", 1, 2, 62, 71), bus("59A")]},
                    {station: "Karlsplatz", lines: [U1, U2, U4, bus("4A")]},
                    {station: "Stephansplatz", lines: [U1, U3]}
                ]
            }, {
                type: "basic",
                id: "1154",
                connections: [
                    {station: "Schloss Belvedere", lines: [bim("D")]},
                    {station: "Quartier Belvedere", lines: [sb("S1-2"), ..._(bim, "O", 18)]}
                ]
            }, {
                type: "basic",
                id: "932635",
                connections: [
                    {station: "Burgring", lines: [..._(bim, "D", 1, 2, 71), bus("57A")]},
                    {station: "Museumsqaurtier", lines: [U2]},
                    {station: "Volkstheater", lines: [U3]},
                    {station: "Ring, Volkstheater", lines: [bim(46), bim(49), bus("48A")]}
                ]
            }, {
                type: "basic",
                id: "1180",
                connections: [
                    {station: "Taborstraße", lines: [U2, bim(2), bus("5B")]},
                    {station: "Obere Augartenstraße", lines: [bim(31), bus("5A"), bus("5B")]}
                ]
            }, {
                type: "basic",
                id: "1164",
                connections: [
                    {station: "Herrengasse", lines: [U3]},
                    {station: "Stephansplatz", lines: [U1, U3]},
                    {station: "Oper", lines: [WLB, ..._(bim, "D", 1, 2, 62, 71), bus("59A")]},
                    {station: "Karlsplatz", lines: [U1, U2, U4, bus("4A")]}
                ]
            }, {
                type: "basic",
                id: "1355",
                connections: [
                    {station: "Ludwig Koeßler Platz", lines: _(bus, "77A", "80A")},
                    {station: "Schlachthausgasse", lines: [U3, bim(18)]}
                ]
            }, {
                type: "basic",
                id: "1204",
                connections: [
                    {station: "Urselbrunnengasse", lines: _(bus, "68A", "68B")},
                    {station: "Grillgasse", lines: [s("S60"), r("R95"), rex("REX 6/63/64"), bus("15A")]}
                ]
            }, {
                type: "basic",
                id: "1261",
                connections: [
                    {station: "Spittelau", lines: [s("S40"), U4, U6, bim("D"), bus("35A"), bus("37A")]}
                ]
            }, {
                type: "basic",
                id: "1275",
                connections: [
                    {station: "Karlsplatz", lines: [U1, U2, U4, WLB, bim(1), bim(62), bus("4A")]},
                    {station: "Oper", lines: [WLB, ..._(bim, "D", 1, 2, 71)]},
                    {station: "Bärenmühldurhgang", lines: [bus("59A")]}
                ]
            }, {
                type: "basic",
                id: "1283",
                connections: [
                    {station: "Berggasse", lines: [bus("40A")]},
                    {station: "Schlickgasse", lines: [bim("D")]},
                    {station: "Schottentor", lines: [U2, ..._(bim, 1, 71, 43, 44)]},
                    {station: "Schwarzspanier Straße", lines: _(bim, 37, 38, 40, 41, 42)}
                ]
            }, {
                type: "basic",
                id: "1396",
                connections: [
                    {station: "Oper", lines: [WLB, ..._(bim, "D", 1, 2, 62, 71), bus("59A")]},
                    {station: "Karlsplatz", lines: [U1, U2, U4, bus("4A")]},
                ]
            }

            ], [],[],[],[],[],[
                {
                    type: "basic",
                    id: "1326031",
                    connections: [{station: "Klosterneuburg-Weidling", lines: [s("S40"), rb(400)]}]
                }, {
                    type: "basic",
                    id: "806",
                    connections: [{station: "Mödling", lines: [s("S2-4"), rex("REX 1"), rex("REX 3")]}]
                }, {
                    type: "basic",
                    id: "932631",
                    connections: [{station: "Pressbaum", lines: [s("S50"), rex("REX 51")]}]
                }, {
                    type: "basic",
                    id: "840",
                    connections: [{station: "Schwechat", lines: [s("S7"), rex("REX 7"), bus("71A")]}]
                }, {
                type: "basic",
                    id: "843",
                    connections: [{station: "Silberwald", lines: [s("S1")]}]
                }, {
                type: "basic",
                    id: "905",
                    connections: [{station: "Schwechat", lines: [s("S7"), rex("REX 7"), bus("71A")]}]
                }, {
                type: "basic",
                    id: "894",
                    connections: [{station: "Flughafen Wien", lines: [s("S7"), rex("REX 7")]}]
                }, {
                type: "basic",
                    id: "936",
                    connections: [{station: "Perchtholdsdorf Freizeitzentrum", lines: [rb(256), rb(259)]}, {station: "Perchtholdsdorf", lines: [s("S2-4")]}]
                }, {
                type: "basic",
                    id: "860",
                    connections: [{station: "Klosterneuburg-Kierling", lines: [s("S40")]}]
                }, {
                type: "basic",
                    id: "932629",
                    connections: [
                        {station: "Vösendorf SCS IKEA", lines: [rb(207)]},
                        {station: "Maria Enzersdorf Südstadt", lines: [WLB]}]
                }, {
                type: "basic",
                    id: "1015",
                    connections: [{station: "Klosterneuburg-Kierling", lines: [s("S40")]}]
                }, {
                type: "basic",
                    id: "1326030",
                    connections: [
                        {station: "Untertullnerbach", lines: [s("S50")]}
                    ]
                }, {
                type: "basic",
                    id: "1035",
                    connections: [
                        {station: "Wolkersdorf", lines: [s("S2"), rex("REX 2")]}
                    ]
                }, {
                    type: "basic",
                    id: "1326036",
                    connections: [
                        {station: "Wolkersdorf", lines: [s("S2"), rex("REX 2")]}
                    ]
                }, {
                type: "basic",
                    id: "1345",
                    connections: [
                        {station: "Wien Hohe Wand Wiese", lines: [rb(450)]}
                    ]
                }, {
                type: "basic",
                    id: "1107",
                    connections: [
                        {station: "Mödling", lines: [s("S2-4"), rex("REX 1"), rex("REX 3")]}
                    ]
                }, {
                type: "basic",
                    id: "932625",
                    connections: [
                        {station: "Vösendorf SCS", lines: [WLB, rb(207)]}
                    ]
                }, {
                type: "basic",
                    id: "1325",
                    connections: [{station: "Klosterneuburg-Kierling", lines: [s("S40")]}]
                }, {
                type: "basic",
                    id: "1048",
                    connections: [{station: "Langenzersdorf", lines: _(s, "S3", "S4")}]
                }
            ]]
        }
    }
}

function l(caption = ""): ConnectionHeader {
    return {type: "line", title: caption}
}

function t(caption = ""): ConnectionHeader {
    return {type: "time", title: caption}
}

function i(caption = ""): ConnectionHeader {
    return {type: "info", title: caption}
}

function bim(lineNumber: string | number): Line {
    return {type: "Tram", name: "" + lineNumber}
}

function bus(lineNumber: string): Line {
    return {type: "Bus", name: lineNumber}
}

function _(f: (a: any) => Line, ...lineNumbers: ((string|number)[])) {
    return lineNumbers.map(f)
}

function sb(lineNumber: string): Line {
    return {type: "SB", name: lineNumber}
}

function s(lineNumber: string): Line {
    return {type: "S", name: lineNumber}
}

function rb(lineNumber: string | number ): Line {
    return {type: "Regio-Bus", name: "" + lineNumber}
}

function r(lineNumber: string): Line {
    return {type: "R", name: lineNumber}
}

function rex(lineNumber: string): Line {
    return {type: "REX", name: lineNumber}
}

const U1: Line = {name: "U1", type: "U1"};
const U2: Line = {name: "U2", type: "U2"};
const U3: Line = {name: "U3", type: "U3"};
const U4: Line = {name: "U4", type: "U4"};
const U6: Line = {name: "U6", type: "U6"};
const S45: Line = {name: "S45", type: "S45"};
const WLB: Line = {name: "WLB", type: "WLB"};
