import { prisma } from "../common/prisma";
import {Request, Response} from "express"
import { CreateParty, PartyCardDTO, PartyRoomDTO } from "../dto/party.dto";
import { partySchema } from "../common/partyValidator"; 
import { ValidationError } from "yup";

export const getOnePartyCard = async (req: Request, res: Response) => {
    const id = parseInt(req.params.id)
    const party = await prisma.party.findUnique({ where: { id } ,include :{user:true}})
    if (party === null) {
      res.status(404).send({ message: 'party not found' })
      return
    }
  
    const partycardDto: PartyCardDTO = {
        id : party.id,
        title : party.partyname,
        topic : party.activityname,
        image : party.img_url,
        info : party.public_desc,
        tag : [party.tag1,party.tag2,party.tag3],
        numpeople : party.current_member,
        maxpeople : party.member,
        time: party.created_at,
        isPublic: party.is_public,
        master:party.user.find(u => u.id == party.masterID)!.username,
        date:party.date,
        starttime:party.start_time,
        endtime:party.end_time
    }
  
    res.status(200).json(partycardDto)
  
  }

  export const getPartyRoom = async (req: Request, res: Response) => {
    const id = parseInt(req.params.id)
    const party = await prisma.party.findUnique({ where: { id } ,include :{user:true}})
    if (party === null) {
      res.status(404).send({ message: 'party not found' })
      return
    }
  
    const partyroomDto: PartyRoomDTO = {
      id : party.id,
      title : party.partyname,
      topic : party.activityname,
      image : party.img_url,
      info : party.public_desc,
      tag : [party.tag1,party.tag2,party.tag3],
      numpeople : party.current_member,
      maxpeople : party.member,
      time: party.created_at,
      isPublic: party.is_public,
      master:party.user.find(u => u.id == party.masterID)!.username,
      date:party.date,
      starttime:party.start_time,
      endtime:party.end_time,
      privateDesc:party.private_desc,
      members : party.user.map(v => v.username)
    }
  
    res.status(200).json(partyroomDto)
  
  }
export const createParty =async (req:Request,res:Response) => {
    const party:CreateParty = req.body
    try {
        const parsedParty = partySchema.validateSync(party)
        const {tag1,tag2,tag3,date} = parsedParty
        const newParty = await prisma.party.create({data:{
        partyname:parsedParty.title
        ,is_public :parsedParty.isPublic
        ,img_url : parsedParty.image
        ,masterID : parsedParty.masterid
        ,activityname:parsedParty.topic
        ,start_time:parsedParty.starttime
        ,end_time:parsedParty.endtime
        ,tag1,tag2,tag3
        ,updated_at : new Date()
        ,member : parsedParty.maxpeople
        ,date
        ,public_desc: parsedParty.info
        ,private_desc: parsedParty.privateDesc
        }})
        res.status(200).json({"message" : "create party successful"})
    } catch (error) {
        res.status(400).json({"message": (error as ValidationError).message})
    }
} 
    
