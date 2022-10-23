import { object, string, number, date, InferType, array, bool } from 'yup';

export const partySchema = object({
    title : string().required(),
    topic : string().required(),
    image : string().required(),
    info : string().required(),
    tag1 : string().required(),
    tag2 : string().required(),
    tag3 : string().required(),
    maxpeople : number().required().positive().integer(),
    isPublic:bool().default(false),
    masterid:number().required(),
    date:date().required(),
    starttime:date().required(),
    endtime:date().required(),
    privateDesc:string().required(),
});


