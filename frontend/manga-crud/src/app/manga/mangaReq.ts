export enum Demographic {
    Shounen = 'SHOUNEN',
    Shoujo = 'SHOUJO',
    Seinen = 'SEINEN',
    Josei = 'JOSEI',
    Kodomo ='KODOMO'
}

export enum Status {
    Ongoing = 'ONGOING',
    Completed = 'COMPLETED',
    Cancelled = 'CANCELLED',
    Hiatus = 'HIATUS',
}

export interface IMangaReq {
    title: string;
    author: string;
    releaseDate: string;
    demographic: Demographic;
    status: Status;
    description: string;
}