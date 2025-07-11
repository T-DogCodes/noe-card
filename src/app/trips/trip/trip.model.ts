export interface Trip {
    stops: TripStop[] | TripStop[][];
    name: string;
}

export interface BasicTripStop {
    type: "basic",
    id: string;
    connections?: Connection[]
    address?: string
    duration?: string
    durationCaption?: string
}

export interface ConnectionTripStop {
    type: "connection"
    title: string
    headers: ConnectionHeader[]
    connection: string[][]
    connectionInfo?: string;
}

export interface HeaderTripStop {
    type: "header",
    title: string
}

export interface ConnectionHeader {
    type: "time" | "line" | "info"
    title?: string
}

export interface CustomStop {
    type: "custom",
    templateName: string,
    info?: any
}

export interface FillerTripStop {
    type: "filler"
}

export type TripStop = BasicTripStop | ConnectionTripStop | CustomStop | HeaderTripStop | FillerTripStop;

export interface Connection {
    station: string
    lines: Line[]
}

export interface Line {
    name: string
    type: ("WLB" | "SB" | "Tram" | "Bus" | "S45" | "Regio-Bus" | "REX" | "R" | "S" | "U1" | "U2" | "U3" | "U4" | "U6")
}
