export type NoeCardResponse = {
    total: number, entries: Entry[]
}

export type Category = {
    id: string,
    title: string,
    idtype: string,
    color: string
}

export type Feature = {
    id: string,
    title: string,
    idtype: string,
    color: string
}

export type Region = {
    id: string,
    title: string
}

export type MainImage = {
    id: string
    altText: string,
    copyright: string,
    url: string,
    title: string,
    thumbUrl1x: string,
    thumbUrl2x: string,
    mobileUrl: string,
    cardUrl1x: string,
    cardUrl2x: string
}

export type Entry = {
    type: string,
    uri: string
    id: number,
    title: string,
    slug: string,
    lat: number,
    lng: number,
    categories: Category[],
    features: Feature[],
    region: Region,
    description: string,
    mainImage: MainImage,
    openingHours: {
        description: string
    },
    contact: {
        city: string,
        street: string,
        streetNumber: string,
        zipcode: number,
        email: string,
        website: string,
        phone: string,
        name: string
    },
    priceInformation: {
        adultsDescription: string,
        adults: number,
        young: number,
        youngDescription: number,
        offSeason: {
            sd: number,
            sm: number,
            ed: number,
            em: number,
            price: number,
            description: string
        }
    },
    score: number,
    onlineBookable: boolean
}

export type Rating = {
    rating: number,
    tag?: string[]

}


export enum State {
    IDLE, ACTIVE, INACTIVE
}

export type Filter = {[key: string]: State};
