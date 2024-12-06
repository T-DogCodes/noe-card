import {Injectable} from '@angular/core';
import {Rating} from "../app/declarations";
import {ARCHITEKTUR, ATTRAKTION, BAHN, BIER, BLUMEN, EISLAUFEN, ERLEBNISWELT, GESCHICHTE, HOEHLE, KLETTERGARTEN, KLETTERN, KUNST, MINIGOLF, MUSEUM, NATURAKTIVITAET, PARK, RELIGION, RIDING, SCHIFF, SCHLOSS, SCHNAPS, SCHWIMMEN, SKI, SOMMERRODELBAHN, STADTRUNDGANG, TECHNIK, TRAMPOLIN, VERKEHR, WANDERN, WEIN, ZOO} from "./TAGS";

const ratings: {
    [key: string]: Rating
} = {
    "1265": {rating: 1, tag: [BAHN, WANDERN]},
    "1010": {rating: 2, tag: [BLUMEN]},
    "1394": {rating: 1, tag: [ATTRAKTION]},
    "1190": {rating: 2, tag: [WANDERN]},
    "826": {rating: 2, tag: [BLUMEN]},
    "18692": {rating: 2, tag: [SCHLOSS]},
    "1295": {rating: 1, tag: [ATTRAKTION, SOMMERRODELBAHN]},
    "838": {rating: 2, tag: [ATTRAKTION]},
    "1067": {rating: 2, tag: [WANDERN]},
    "1196": {rating: 3, tag: [SCHLOSS]},
    "1343": {rating: 3, tag: [ZOO]},
    "1289": {rating: 4, tag: [SCHWIMMEN]},
    "1138": {rating: 1, tag: [PARK]},
    "1210": {rating: 1, tag: [MUSEUM]},
    "1414": {rating: 3, tag: [ZOO]},
    "1293": {rating: 1, tag: [ATTRAKTION, SOMMERRODELBAHN]},
    "1212": {rating: 4, tag: [SCHWIMMEN]},
    "719": {rating: 1, tag: [MUSEUM]},
    "789": {rating: 1, tag: [WANDERN, RIDING]},
    "932563": {rating: 2, tag: [NATURAKTIVITAET]},
    "1246": {rating: 3, tag: [MUSEUM]},
    "707": {rating: 3, tag: [NATURAKTIVITAET, ZOO]},
    "710": {rating: 4, tag: [SCHWIMMEN]},
    "1301": {rating: 3, tag: [ZOO]},
    "721": {rating: 3, tag: [WANDERN]},
    "724": {rating: 2, tag: [MUSEUM]},
    "730": {rating: 4, tag: [SCHWIMMEN]},
    "856": {rating: 4, tag: [SCHWIMMEN]},
    "734": {rating: 2, tag: [SCHLOSS]},
    "293664": {rating: 1, tag: [MUSEUM, GESCHICHTE]},
    "743": {rating: 2, tag: [MUSEUM, ARCHITEKTUR]},
    "747": {rating: 4, tag: [SCHWIMMEN]},
    "750": {rating: 4, tag: [SCHWIMMEN]},
    "753": {rating: 3, tag: [PARK]},
    "755": {rating: 2, tag: [MUSEUM, KUNST]},
    "758": {rating: 2, tag: [MUSEUM]},
    "763": {rating: 4, tag: [BAHN, SCHIFF]},
    "766": {rating: 2, tag: [MUSEUM]},
    "1192": {rating: 1, tag: [BAHN]},
    "771": {rating: 1, tag: [ZOO]},
    "1234": {rating: 3, tag: [SCHLOSS]},
    "773": {rating: 3, tag: [MUSEUM]},
    "777": {rating: 1, tag: [MUSEUM, KUNST]},
    "782": {rating: 3, tag: [MUSEUM, RELIGION]},
    "1327": {rating: 3, tag: [MUSEUM, RELIGION]},
    "787": {rating: 4, tag: [SCHWIMMEN]},
    "791": {rating: 2, tag: [MUSEUM, KUNST]},
    "794": {rating: 2, tag: [ERLEBNISWELT, TECHNIK]},
    "932566": {rating: 3, tag: [NATURAKTIVITAET, RIDING]},
    "18932": {rating: 3, tag: [MUSEUM]},
    "932633": {rating: 1, tag: [ERLEBNISWELT]},
    "932595": {rating: 1, tag: [NATURAKTIVITAET]},
    "804": {rating: 3, tag: [ERLEBNISWELT, BIER]},
    "806": {rating: 3, tag: [SCHLOSS]},
    "808": {rating: 3, tag: [SCHLOSS]},
    "811": {rating: 3, tag: [SCHLOSS]},
    "814": {rating: 4, tag: [SCHWIMMEN]},
    "932342": {rating: 1, tag: [WANDERN, SCHLOSS]},
    "816": {rating: 4, tag: [SCHWIMMEN]},
    "818": {rating: 2, tag: [MUSEUM, KUNST]},
    "820": {rating: 3, tag: [SCHIFF]},
    "822": {rating: 3, tag: [ERLEBNISWELT, ZOO]},
    "824": {rating: 2, tag: [ERLEBNISWELT, SCHNAPS]},
    "944": {rating: 1, tag: [MUSEUM]},
    "830": {rating: 2, tag: [MUSEUM, KUNST]},
    "956": {rating: 4, tag: [SCHWIMMEN]},
    "833": {rating: 2, tag: [MUSEUM]},
    "702": {rating: 3, tag: [ERLEBNISWELT]},
    "18667": {rating: 2, tag: [MUSEUM, KUNST]},
    "713": {rating: 1, tag: [ATTRAKTION, SOMMERRODELBAHN]},
    "932641": {rating: 2, tag: [ERLEBNISWELT]},
    "840": {rating: 1, tag: [MUSEUM, VERKEHR]},
    "843": {rating: 1, tag: [MUSEUM, VERKEHR]},
    "293860": {rating: 1, tag: [MUSEUM]},
    "1099": {rating: 1, tag: [MUSEUM]},
    "849": {rating: 2, tag: [MUSEUM]},
    "728": {rating: 4, tag: [SCHWIMMEN]},
    "914": {rating: 4, tag: [SCHWIMMEN]},
    "938": {rating: 4, tag: [SCHWIMMEN]},
    "862": {rating: 4, tag: [SCHWIMMEN]},
    "864": {rating: 3, tag: [NATURAKTIVITAET]},
    "866": {rating: 2, tag: [WANDERN]},
    "868": {rating: 1, tag: [BAHN]},
    "885": {rating: 2, tag: [BAHN]},
    "870": {rating: 2, tag: [MUSEUM, KUNST]},
    "874": {rating: 2, tag: [MUSEUM]},
    "876": {rating: 3, tag: [MUSEUM]},
    "1226": {rating: 3, tag: [MUSEUM]},
    "883": {rating: 2, tag: [MUSEUM, VERKEHR]},
    "881": {rating: 2, tag: [MUSEUM, VERKEHR]},
    "887": {rating: 3, tag: [SKI]},
    "889": {rating: 2, tag: [ERLEBNISWELT, SCHNAPS]},
    "989": {rating: 3, tag: [MUSEUM]},
    "900": {rating: 2, tag: [ERLEBNISWELT]},
    "903": {rating: 4, tag: [SCHWIMMEN]},
    "905": {rating: 1, tag: [ATTRAKTION, TRAMPOLIN]},
    "894": {rating: 1, tag: [ERLEBNISWELT]},
    "907": {rating: 3, tag: [MUSEUM]},
    "912": {rating: 1, tag: [MUSEUM, GESCHICHTE]},
    "858": {rating: 4, tag: [SCHWIMMEN]},
    "715": {rating: 4, tag: [SCHWIMMEN]},
    "920": {rating: 4, tag: [SCHWIMMEN]},
    "922": {rating: 4, tag: [SCHWIMMEN]},
    "847": {rating: 4, tag: [SCHWIMMEN]},
    "924": {rating: 4, tag: [SCHWIMMEN]},
    "926": {rating: 1, tag: [MUSEUM, GESCHICHTE]},
    "928": {rating: 1, tag: [MUSEUM, GESCHICHTE]},
    "930": {rating: 1, tag: [MUSEUM, GESCHICHTE]},
    "934": {rating: 4, tag: [SCHWIMMEN]},
    "936": {rating: 4, tag: [SCHWIMMEN]},
    "932546": {rating: 4, tag: [SCHWIMMEN]},
    "940": {rating: 2, tag: [MUSEUM, KUNST]},
    "1285": {rating: 2, tag: [WANDERN, SKI]},
    "942": {rating: 2, tag: [MUSEUM, KUNST]},
    "1166": {rating: 1, tag: [MUSEUM]},
    "946": {rating: 4, tag: [NATURAKTIVITAET]},
    "948": {rating: 3, tag: [SCHLOSS]},
    "898": {rating: 2, tag: [MUSEUM]},
    "1144": {rating: 3, tag: [ERLEBNISWELT, ZOO]},
    "954": {rating: 2, tag: [MUSEUM]},
    "958": {rating: 4, tag: [SCHWIMMEN]},
    "961": {rating: 4, tag: [SCHWIMMEN]},
    "963": {rating: 2, tag: [MUSEUM]},
    "965": {rating: 2, tag: [MUSEUM]},
    "967": {rating: 4, tag: [ERLEBNISWELT, SCHWIMMEN]},
    "860": {rating: 4, tag: [SCHWIMMEN]},
    "969": {rating: 2, tag: [ERLEBNISWELT, MUSEUM]},
    "293858": {rating: 1, tag: [MUSEUM]},
    "971": {rating: 1, tag: [MUSEUM]},
    "973": {rating: 1, tag: [MUSEUM]},
    "975": {rating: 2, tag: [MUSEUM]},
    "977": {rating: 3, tag: [MUSEUM]},
    "979": {rating: 2, tag: [MUSEUM]},
    "981": {rating: 4, tag: [MUSEUM]},
    "1267": {rating: 1, tag: [MUSEUM]},
    "983": {rating: 1, tag: [WANDERN, HOEHLE]},
    "18921": {rating: 1, tag: [BAHN]},
    "996": {rating: 3, tag: [SCHLOSS]},
    "293870": {rating: 1, tag: [MUSEUM]},
    "932629": {rating: 1, tag: [ATTRAKTION, TRAMPOLIN]},
    "18842": {rating: 3, tag: [MUSEUM]},
    "994": {rating: 1, tag: [MUSEUM, KUNST]},
    "1096770": {rating: 3, tag: [MUSEUM, RELIGION]},
    "1000": {rating: 3, tag: [MUSEUM, RELIGION]},
    "1002": {rating: 2, tag: [MUSEUM, ERLEBNISWELT]},
    "1006": {rating: 2, tag: [MUSEUM, KUNST]},
    "1408": {rating: 4, tag: [BAHN]},
    "1013": {rating: 2, tag: [ERLEBNISWELT, WEIN]},
    "1015": {rating: 2, tag: [KLETTERN]},
    "932631": {rating: 2, tag: [KLETTERN]},
    "932278": {rating: 2, tag: [KLETTERN]},
    "1017": {rating: 2, tag: [ERLEBNISWELT]},
    "1160": {rating: 3, tag: [MUSEUM, KUNST]},
    "932637": {rating: 4, tag: [MUSEUM, VERKEHR]},
    "1021": {rating: 2, tag: [MUSEUM, GESCHICHTE]},
    "1023": {rating: 4, tag: [ERLEBNISWELT]},
    "1025": {rating: 1, tag: [MUSEUM]},
    "1027": {rating: 3, tag: [MUSEUM]},
    "952": {rating: 2, tag: [MUSEUM]},
    "1029": {rating: 4, tag: [SCHWIMMEN]},
    "1033": {rating: 3, tag: [EISLAUFEN]},
    "1031": {rating: 3, tag: [EISLAUFEN]},
    "1035": {rating: 3, tag: [EISLAUFEN]},
    "18942": {rating: 3, tag: [EISLAUFEN]},
    "1037": {rating: 2, tag: [MUSEUM, KUNST]},
    "1040": {rating: 2, tag: [MUSEUM, VERKEHR]},
    "1259": {rating: 2, tag: [PARK]},
    "918": {rating: 4, tag: [SCHWIMMEN]},
    "1042": {rating: 2, tag: [MUSEUM, KUNST]},
    "1048": {rating: 3, tag: [MUSEUM]},
    "1050": {rating: 1, tag: [MUSEUM]},
    "1052": {rating: 1, tag: [SCHLOSS]},
    "1055": {rating: 4, tag: [ERLEBNISWELT, ZOO]},
    "1168": {rating: 1, tag: [MUSEUM]},
    "1057": {rating: 1, tag: [MUSEUM, WEIN]},
    "1059": {rating: 1, tag: [MUSEUM, KUNST]},
    "1061": {rating: 1, tag: [MUSEUM, GESCHICHTE]},
    "1063": {rating: 1, tag: [MUSEUM, GESCHICHTE]},
    "828": {rating: 2, tag: [MUSEUM, ATTRAKTION, MINIGOLF]},
    "1069": {rating: 2, tag: [MUSEUM]},
    "1071": {rating: 1, tag: [NATURAKTIVITAET]},
    "1073": {rating: 3, tag: [ATTRAKTION, MINIGOLF]},
    "769": {rating: 2, tag: [ATTRAKTION, MINIGOLF]},
    "1078": {rating: 1, tag: [ATTRAKTION, MINIGOLF]},
    "1076": {rating: 2, tag: [ATTRAKTION, MINIGOLF]},
    "1082": {rating: 1, tag: [MUSEUM, ERLEBNISWELT, VERKEHR]},
    "1084": {rating: 1, tag: [MUSEUM, ERLEBNISWELT, VERKEHR]},
    "1086": {rating: 1, tag: [ERLEBNISWELT]},
    "1088": {rating: 2, tag: [ERLEBNISWELT, SCHNAPS]},
    "1345": {rating: 3, tag: [NATURAKTIVITAET, RIDING]},
    "293872": {rating: 1, tag: [MUSEUM, KUNST]},
    "1095": {rating: 3, tag: [MUSEUM, RELIGION, KUNST]},
    "1101": {rating: 2, tag: [MUSEUM, KUNST]},
    "1103": {rating: 3, tag: [MUSEUM]},
    "1105": {rating: 2, tag: [MUSEUM, RELIGION]},
    "1107": {rating: 3, tag: [MUSEUM, SCHLOSS]},
    "1109": {rating: 2, tag: [MUSEUM]},
    "1162": {rating: 2, tag: [MUSEUM]},
    "1111": {rating: 2, tag: [MUSEUM]},
    "1113": {rating: 3, tag: [MUSEUM, RELIGION]},
    "1115": {rating: 3, tag: [MUSEUM]},
    "1117": {rating: 2, tag: [MUSEUM]},
    "1119": {rating: 2, tag: [MUSEUM]},
    "1122": {rating: 2, tag: [MUSEUM]},
    "1124": {rating: 1, tag: [MUSEUM]},
    "932639": {rating: 1, tag: [ERLEBNISWELT]},
    "1126": {rating: 1, tag: [WANDERN]},
    "932339": {rating: 4, tag: [SCHWIMMEN]},
    "1130": {rating: 1, tag: [WANDERN]},
    "1132": {rating: 2, tag: [WANDERN]},
    "1134": {rating: 1, tag: [WANDERN]},
    "1136": {rating: 1, tag: [WANDERN]},
    "932541": {rating: 3, tag: [ERLEBNISWELT]},
    "1140": {rating: 4, tag: [SCHWIMMEN]},
    "1142": {rating: 1, tag: [WANDERN, HOEHLE]},
    "1146": {rating: 1, tag: [MUSEUM]},
    "1150": {rating: 1, tag: [WANDERN]},
    "1152": {rating: 3, tag: [ATTRAKTION]},
    "1154": {rating: 1, tag: [MUSEUM, KUNST]},
    "293804": {rating: 2, tag: [BLUMEN]},
    "1158": {rating: 2, tag: [MUSEUM, VERKEHR]},
    "932": {rating: 3, tag: [MUSEUM]},
    "1044": {rating: 2, tag: [MUSEUM]},
    "1172": {rating: 1, tag: [WANDERN,HOEHLE]},
    "1174": {rating: 4, tag: [SCHWIMMEN]},
    "1287": {rating: 2, tag: [WANDERN]},
    "932635": {rating: 2, tag: [MUSEUM]},
    "916": {rating: 4, tag: [SCHWIMMEN]},
    "1176": {rating: 4, tag: [SCHWIMMEN]},
    "852": {rating: 1, tag: [MUSEUM]},
    "1178": {rating: 4, tag: [SCHWIMMEN]},
    "293829": {rating: 3, tag: [MUSEUM]},
    "932625": {rating: 4, tag: [ATTRAKTION]},
    "987": {rating: 3, tag: [MUSEUM]},
    "1180": {rating: 1, tag: [MUSEUM, KUNST]},
    "1164": {rating: 1, tag: [MUSEUM]},
    "1186": {rating: 2, tag: [MUSEUM]},
    "1194": {rating: 4, tag: [SCHWIMMEN]},
    "1355": {rating: 1, tag: [MUSEUM, VERKEHR]},
    "1230": {rating: 3, tag: [SCHLOSS]},
    "293642": {rating: 3, tag: [SCHLOSS]},
    "1198": {rating: 3, tag: [ZOO]},
    "1200": {rating: 1, tag: [ERLEBNISWELT]},
    "1204": {rating: 1, tag: [ATTRAKTION]},
    "1206": {rating: 1, tag: [MUSEUM]},
    "1097": {rating: 1, tag: [MUSEUM, GESCHICHTE]},
    "1214": {rating: 2, tag: [MUSEUM]},
    "293868": {rating: 2, tag: [NATURAKTIVITAET, KLETTERGARTEN]},
    "1216": {rating: 2, tag: [SCHLOSS]},
    "1220": {rating: 2, tag: [MUSEUM, RELIGION]},
    "1222": {rating: 2, tag: [SKI]},
    "1224": {rating: 2, tag: [MUSEUM]},
    "992": {rating: 2, tag: [SCHLOSS]},
    "1228": {rating: 3, tag: [SCHLOSS]},
    "18844": {rating: 3, tag: [SCHLOSS, PARK]},
    "1232": {rating: 3, tag: [SCHLOSS]},
    "1255": {rating: 1, tag: [SCHLOSS]},
    "18656": {rating: 2, tag: [SCHLOSS]},
    "18696": {rating: 2, tag: [SCHLOSS]},
    "1242": {rating: 2, tag: [SCHLOSS, MUSEUM]},
    "1244": {rating: 3, tag: [SCHLOSS]},
    "293866": {rating: 1, tag: [SCHLOSS]},
    "18607": {rating: 3, tag: [SCHLOSS]},
    "1248": {rating: 2, tag: [SCHLOSS, MUSEUM]},
    "1250": {rating: 4, tag: [SCHWIMMEN]},
    "1257": {rating: 1, tag: [SCHLOSS, PARK, WANDERN]},
    "1261": {rating: 1, tag: [ERLEBNISWELT, WEIN]},
    "932627": {rating: 4, tag: []},
    "1263": {rating: 3, tag: [MUSEUM]},
    "1184": {rating: 2, tag: [WANDERN, SKI]},
    "1271": {rating: 4, tag: [SCHWIMMEN]},
    "1273": {rating: 1, tag: [MUSEUM]},
    "1275": {rating: 1, tag: [MUSEUM, KUNST]},
    "1277": {rating: 4, tag: [SCHWIMMEN]},
    "1279": {rating: 2, tag: [WANDERN]},
    "1281": {rating: 1, tag: [WANDERN]},
    "1283": {rating: 1, tag: [MUSEUM]},
    "1019": {rating: 2, tag: [SKI]},
    "1291": {rating: 4, tag: [SCHWIMMEN]},
    "1297": {rating: 2, tag: [MUSEUM]},
    "1252": {rating: 2, tag: [MUSEUM]},
    "1299": {rating: 2, tag: [MUSEUM]},
    "932605": {rating: 1, tag: [ATTRAKTION, TRAMPOLIN]},
    "1307": {rating: 4, tag: [SCHWIMMEN]},
    "293864": {rating: 3, tag: [MUSEUM]},
    "1311": {rating: 2, tag: [MUSEUM]},
    "1313": {rating: 3, tag: [MUSEUM]},
    "1315": {rating: 3, tag: [MUSEUM]},
    "1080": {rating: 1, tag: [STADTRUNDGANG]},
    "1317": {rating: 2, tag: [BLUMEN]},
    "293688": {rating: 2, tag: [MUSEUM, GESCHICHTE]},
    "779": {rating: 2, tag: [MUSEUM, RELIGION]},
    "1319": {rating: 3, tag: [MUSEUM, RELIGION]},
    "1321": {rating: 3, tag: [MUSEUM, RELIGION]},
    "1323": {rating: 3, tag: [MUSEUM, RELIGION]},
    "1325": {rating: 3, tag: [MUSEUM, RELIGION]},
    "1424": {rating: 3, tag: [MUSEUM, RELIGION]},
    "1329": {rating: 3, tag: [MUSEUM, RELIGION]},
    "1333": {rating: 1, tag: [MUSEUM, GESCHICHTE]},
    "1335": {rating: 4, tag: [SCHWIMMEN]},
    "1337": {rating: 4, tag: [ZOO]},
    "293818": {rating: 2, tag: [MUSEUM]},
    "1339": {rating: 4, tag: [SCHWIMMEN]},
    "1128": {rating: 3, tag: [ZOO]},
    "1347": {rating: 3, tag: [MUSEUM]},
    "1349": {rating: 2, tag: [MUSEUM]},
    "293262": {rating: 2, tag: [STADTRUNDGANG]},
    "1351": {rating: 2, tag: [ZOO]},
    "1353": {rating: 2, tag: [MUSEUM, GESCHICHTE]},
    "1357": {rating: 2, tag: [MUSEUM, WEIN]},
    "1359": {rating: 4, tag: [SCHWIMMEN]},
    "1361": {rating: 2, tag: [MUSEUM]},
    "1341": {rating: 4, tag: [SCHWIMMEN]},
    "1363": {rating: 1, tag: [BAHN]},
    "1365": {rating: 2, tag: [MUSEUM]},
    "1367": {rating: 4, tag: [SCHWIMMEN]},
    "1369": {rating: 3, tag: [MUSEUM]},
    "1371": {rating: 4, tag: [MUSEUM]},
    "1373": {rating: 2, tag: [ZOO]},
    "293856": {rating: 2, tag: [NATURAKTIVITAET, KLETTERGARTEN]},
    "1375": {rating: 1, tag: [BAHN]},
    "1377": {rating: 2, tag: [MUSEUM]},
    "1379": {rating: 3, tag: [MUSEUM]},
    "1381": {rating: 3, tag: [MUSEUM]},
    "985": {rating: 2, tag: [WANDERN]},
    "1383": {rating: 2, tag: [MUSEUM]},
    "1385": {rating: 4, tag: [SKI]},
    "892": {rating: 3, tag: [MUSEUM]},
    "1386": {rating: 4, tag: [SCHWIMMEN]},
    "1388": {rating: 2, tag: [MUSEUM]},
    "1390": {rating: 4, tag: [NATURAKTIVITAET, RIDING]},
    "1392": {rating: 2, tag: [ERLEBNISWELT, SCHNAPS]},
    "1396": {rating: 1, tag: [MUSEUM, ARCHITEKTUR]},
    "1398": {rating: 2, tag: [MUSEUM]},
    "1400": {rating: 4, tag: [SCHWIMMEN]},
    "932276": {rating: 3, tag: [ZOO]},
    "932271": {rating: 2, tag: [MUSEUM]},
    "1202": {rating: 1, tag: [MUSEUM]},
    "1404": {rating: 4, tag: [MUSEUM, WEIN]},
    "1406": {rating: 3, tag: [MUSEUM]},
    "1410": {rating: 2, tag: [MUSEUM]},
    "1412": {rating: 4, tag: [SCHWIMMEN]},
    "932308": {rating: 3, tag: [MUSEUM]},
    "1416": {rating: 4, tag: [SCHWIMMEN]},
    "1418": {rating: 1, tag: [BAHN]},
    "1420": {rating: 2, tag: [MUSEUM, GESCHICHTE]},
    "1422": {rating: 2, tag: [MUSEUM]},
    "1331": {rating: 3, tag: [MUSEUM, RELIGION]},
    "1426": {rating: 4, tag: [SCHWIMMEN]},
    "293862": {rating: 2, tag: [STADTRUNDGANG]},
    "1238": {rating: 3, tag: [SCHLOSS]},
    "1309": {rating: 3, tag: [MUSEUM]},












}


@Injectable({
    providedIn: 'root'
})
export class RatingService {

    constructor() {
    }

    getRatingForId(id: number): Rating | undefined {
        return ratings[id];
    }
}
