import {Injectable} from '@angular/core';
import {ARCHITEKTUR, ATTRAKTION, BAHN, BIER, BLUMEN, BOGENSCHIESSEN, EISLAUFEN, ERLEBNISWELT, GESCHICHTE, HOEHLE, KLETTERGARTEN, KLETTERN, KUNST, MINIGOLF, MUSEUM, NATURAKTIVITAET, PARK, RELIGION, RIDING, SCHIFF, SCHLOSS, SCHNAPS, SCHWIMMEN, SKI, SOMMERRODELBAHN, STADTRUNDGANG, TECHNIK, TRAMPOLIN, VERKEHR, WANDERN, WEIN, ZOO} from "./TAGS";

const IMAGES_FOR_TAGS: {[key: string]: string} = {
    [BAHN]: "train-svgrepo-com.svg",
    [WANDERN]: "mountain-svgrepo-com.svg",
    [BLUMEN]: "flower-tulip-svgrepo-com.svg",
    [ATTRAKTION]: "ferris-wheel-svgrepo-com.svg",
    [SCHLOSS]: "castle-svgrepo-com.svg",
    [PARK]: "tree-2-svgrepo-com.svg",
    [ZOO]: "paw-3-svgrepo-com.svg",
    [MUSEUM]: "museum-svgrepo-com.svg",
    [SCHWIMMEN]: "swimming-svgrepo-com.svg",
    [SOMMERRODELBAHN]: "bobsled-svgrepo-com.svg",
    [RIDING]: "cycling-2-svgrepo-com.svg",
    [BOGENSCHIESSEN]: "bow-and-arrow-svgrepo-com.svg",
    [NATURAKTIVITAET]: "forest-svgrepo-com.svg",
    [GESCHICHTE]: "mammoth-svgrepo-com.svg",
    [ARCHITEKTUR]: "architecture-svgrepo-com.svg",
    [KUNST]: "palette-svgrepo-com.svg",
    [SCHIFF]: "ferry-svgrepo-com.svg",
    [RELIGION]: "cross-svgrepo-com.svg",
    [SKI]: "ski-equipment-svgrepo-com.svg",
    [WEIN]: "wine-glass-svgrepo-com.svg",
    [TRAMPOLIN]: "jumping-svgrepo-com.svg",
    [STADTRUNDGANG]: "map-location-pin-svgrepo-com.svg",
    [KLETTERGARTEN]: "climbing-svgrepo-com.2.svg",
    [SCHNAPS]: "booze-svgrepo-com.3.svg",
    [TECHNIK]: "gear-10-svgrepo-com.svg",
    [ERLEBNISWELT]: "stars-03-svgrepo-com.svg",
    [BIER]: "beer-foam-drink-svgrepo-com.svg",
    [VERKEHR]: "train-svgrepo-com.svg",
    [HOEHLE]: "cave-svgrepo-com.svg",
    [KLETTERN]: "climbing-svgrepo-com.svg",
    [EISLAUFEN]: "ice-skate-iceskating-svgrepo-com.5.svg",
    [MINIGOLF]: "golf-svgrepo-com.svg",

}


@Injectable({
    providedIn: 'root'
})
export class ImageService {

    constructor() {
    }

    getImageForTag(tag: string) {
        return IMAGES_FOR_TAGS[tag];
    }

}
