import { User } from "@prisma/client";

export interface PartyCardDTO{
    id : number;
    title : string;
    topic : string;
    image : string;
    info : string;
    tag : string[];
    numpeople : number;
    maxpeople : number;
    master : string;
    time: Date;
    isPublic:boolean;
    date:Date;
    starttime:Date;
    endtime:Date;
}

export interface PartiesDTO {
    total: number
    parties : PartyCardDTO[]
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
    master : string;
    time: Date;
    isPublic:boolean;
    date: Date;
    starttime: Date;
    endtime:Date;
    privateDesc:string;
    members : string[];
}
export interface ActivitywithID{
    id: number;
    topic : string;
}
export interface CreatePartyCard{
    topics : ActivitywithID[];
}

export interface CreateParty{
    title : string;
    topicID : number;
    image : string;
    info : string;
    tag1 : string;
    tag2 :string;
    tag3 :string;
    maxpeople : number;
    isPublic:boolean;
    date:Date;
    starttime:Date;
    endtime:Date;
    privateDesc:string;
}

export interface JoinRequest{
    partyid: number;
    userid: number;
    username : string;
}


