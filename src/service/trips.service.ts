import {Injectable} from '@angular/core';
import {NoeCardResponse, Trip} from "../app/declarations";

@Injectable({
    providedIn: 'root'
})
export class TripsService {


    readonly TRIPS: Trip[] = [
        {
            id: 1,
            name: "Wien",
            elements: [
                1394, 1059, 777, 840, 971, 973, 1267, 293870, 293872, 1154,
                1180, 1164, 1135, 1204, 1275, 1283, 1295, 1396, 1166, 894, 1168,
                293866, 1414, 870, 942, 979, 932637, 1345, 1105, 932635, 905
            ]
        }, {
            id: 2,
            name: "Weinviertel Ost",
            elements: [
                843, 864, 1176, 1333, 1255, 1388, 1013, 1052, 1158, 1357, 874,
                1146
            ]
        }, {
            id: 3,
            name: "Weinviertel Mitte",
            elements: [
                1052, 1357, 1158, 874, 1146, 1386, 1061, 1040, 1063, 1291, 1035,
                1418, 1069, 753, 868
            ]
        }, {
            id: 4,
            name: "Weinviertel West", elements: [
                912, 1048, 924, 1031, 1307, 293864, 1202, 1192, 883, 1111, 1200,
                293688
            ]
        }, {
            id: 5,
            name: "Industrieviertel Nordost", elements: [
                905, 840, 894, 977, 1244, 1210, 1097, 1080, 787
            ]
        }, {
            id: 6,
            name: "Marchfeld", elements: [
                840, 864, 1122, 1257, 992, 18696, 18692, 18656
            ]
        }, {
            id: 7,
            name: "Industrieviertel Nord", elements: [
                932625, 932629, 806, 1107, 1259, 1117, 944
            ]
        }, {
            id: 8,
            name: "Baden", elements: [
                1212, 743, 773, 989, 18842, 1186, 1206, 293862, 1361, 1341
            ]
        }, {
            id: 9,
            name: "Wiener Neustadt", elements: [
                728, 1115, 932605, 1115, 1422
            ]
        }, {
            id: 10,
            name: "Innere Südbahn", elements: [
                932625, 932629, 806, 1107, 1259, 1117, 944, 1212, 743, 773,
                989, 18842, 1186, 1206, 293862, 1361, 1341, 728, 1115, 932605, 1115, 1422
            ]
        }, {
            id: 11,
            name: "Außere Aspangbahn", elements: [
                728, 1115, 1422, 952, 293829, 1250, 876, 766, 887, 1390, 789,
                1293, 1385, 1124, 1273, 838, 932641, 814
            ]
        }, {
            id: 12,
            name: "Südburgenland", elements: [
                1238, 293664, 808, 1198, 926
            ]
        }, {
            id: 13,
            name: "Nordburgenland", elements: [
                1228
            ]
        }, {
            id: 14,
            name: "Seewinkel", elements: [
                1234
            ]
        }, {
            id: 15,
            name: "Äußere Südbahn", elements: [
                1115, 1422, 728, 932633, 847, 1309, 983, 1385, 833, 1293, 887,
                1390, 18921, 1190, 293856, 1279, 1071
            ]
        }, {
            id: 16,
            name: "Schneebergbahn", elements: [
                903, 932605, 1367, 1115, 1136, 1088, 940, 1271, 1412, 1369,
                1265, 1184
            ]
        }, {
            id: 17,
            name: "Wienerwald Mitte", elements: [
                1107, 806, 1321, 1138, 996
            ]
        }, {
            id: 18,
            name: "Triestingtal", elements: [
                1027, 791, 1050, 1078, 1347, 734, 932627, 954
            ]
        }, {
            id: 19,
            name: "Innere Franz-Josefs-Bahn", elements: [
                1325, 1015, 860, 1101, 916, 1000, 18667, 293858, 1313, 1033,
                956, 826, 747
            ]
        }, {
            id: 20,
            name: "Tulln", elements: [
                18667, 293858, 1313, 1033, 956, 826, 747
            ]
        }, {
            id: 21,
            name: "Innere Westbahn", elements: [
                932631, 1000, 1398, 293860, 922
            ]
        }, {
            id: 22,
            name: "St. Pölten", elements: [
                1152, 816, 885, 1109, 1311, 1095, 730, 900
            ]
        }, {
            id: 23,
            name: "Traisental", elements: [
                1424, 932271, 1281, 954, 932627, 721, 713, 1140, 1359
            ]
        }, {
            id: 24,
            name: "Mariazellerbahn", elements: [
                702, 1178, 932278, 1317, 862, 1082, 1410, 721, 1142, 932541,
                715, 1067, 293868, 918, 1285
            ]
        }, {
            id: 25,
            name: "Erlauftal", elements: [
                849, 932276, 1006, 932308, 710, 932595, 969, 811, 1277, 975,
                963, 932563, 1287, 1416, 1096770, 958, 1174, 1172, 1150, 866,
                985
            ]
        }
    ]

    constructor() {
    }

    getTripForId(tripId: number): Trip  {
        return this.TRIPS.filter(f => f.id == tripId)?.[0]
    }

    filterDataForTrips(response: NoeCardResponse, trip: Trip): NoeCardResponse {
        response.entries = response.entries.filter(entry => trip.elements.includes(entry.id))
        return response;
    }
}
