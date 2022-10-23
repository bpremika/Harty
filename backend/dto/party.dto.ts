export interface PartyCardDTO{
    id : number;
    title : string;
    topic : string;
    image : string;
    info : string;
    tag : string[];
    numpeople : number;
    maxpeople : number;
    time: Date;
    isPublic:boolean;
    master:string;
    date:Date;
    starttime:Date;
    endtime:Date;
}

export interface PartyRoomDTO{
    id :number;
    title : string;
    topic : string;
    image : string;
    info : string;
    tag : string[];
    numpeople : number;
    maxpeople : number;
    time: Date;
    isPublic:boolean;
    master:string;
    date: Date;
    starttime: Date;
    endtime:Date;
    privateDesc:string;
    members : string[];
}

export interface CreatePartyCard{
    activity : string[];
}

export interface CreateParty{
    title : string;
    topic : string;
    image : string;
    info : string;
    tag1 : string;
    tag2 :string;
    tag3 :string;
    numpeople : number;
    maxpeople : number;
    isPublic:boolean;
    master:string;
    date:Date;
    starttime:Date;
    endtime:Date;
    privateDesc:Date;
}

export interface JoinRequest{
    partyid: number;
    userid: number;
    username : string;
}


