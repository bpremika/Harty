import { prisma } from "../common/prisma";
import { Request, Response } from "express";
import {
  CreateParty,
  JoinParty,
  PartiesDTO,
  PartyCardDTO,
  PartyRoomDTO,
} from "../dto/party.dto";
import { partySchema } from "../common/partyValidator";
import { number, ValidationError } from "yup";
import session from "express-session";
import { Category } from "@prisma/client";

export const getOnePartyCard = async (req: Request, res: Response) => {
  const id = parseInt(req.params.id);
  if (Number.isNaN(id)) {
    res.status(400).json({ message: "Invalid ID" });
    return;
  }
  const party = await prisma.party.findUnique({
    where: { id },
    include: { user: true, activity: true },
  });
  if (party === null) {
    res.status(404).send({ message: "party not found" });
    return;
  }

  const partycardDto: PartyCardDTO = {
    id: party.id,
    title: party.partyname,
    topic: party.activity.name,
    image: party.img_url,
    info: party.public_desc,
    tag: [party.tag1, party.tag2, party.tag3],
    numpeople: party.current_member,
    maxpeople: party.member,
    time: party.created_at,
    isPublic: party.is_public,
    master: party.user.find((u) => u.id == party.masterID)!.username,
    date: party.date,
    starttime: party.start_time,
    endtime: party.end_time,
  };

  res.status(200).json(partycardDto);
};

export const getPartyPerUsers = async (req: Request, res: Response) => {
  try {
    const session = await prisma.session.findUnique({
      where: { id: req.session.token },
      include: {
        user: {
          include: {
            party: true,
          },
        },
      },
    });
    if (session == null || session == undefined) {
      res.status(401).json({ message: "session error" });
      return;
    }
    const parties = session.user.party;
    res.status(200).json(parties);
  } catch (error) {
    res.status(400).json(error);
  }
};
export const getPartyPerCategory = async (req: Request, res: Response) => {
  const category = req.query.category as string | null;
  if (category == null || category == undefined || category! in Category) {
    const party = await prisma.party.findMany();
    res.status(200).json(party);
  } else if (category in Category) {
    const party = await prisma.party.findMany({
      where: {
        activity: {
          category: category as Category,
        },
      },
    });
    res.status(200).json(party);
  } else {
    res.status(404).json({ message: "Not found" });
  }
};
export const getPartyPerActivity = async (req: Request, res: Response) => {
  if (req.params.id == null) {
    const parties = await prisma.party.findMany();
    res.status(200).json(parties);
  } else {
    try {
      const activityID = parseInt(req.params.id as string);
      if (Number.isNaN(activityID)) {
        res.status(400).json({ message: "Invalid ID" });
        return;
      }
      const parties = await prisma.party.findMany({
        where: { activityID },
        include: { activity: true, user: true },
      });
      if (parties === null) {
        res.status(404).json({ message: "party not found" });
        return;
      }
      const partiesDto: PartiesDTO = {
        total: parties.length,
        parties: parties.map((party) => ({
          id: party.id,
          title: party.partyname,
          topic: party.activity.name,
          image: party.img_url,
          info: party.public_desc,
          tag: [party.tag1, party.tag2, party.tag3],
          numpeople: party.current_member,
          maxpeople: party.member,
          time: party.created_at,
          isPublic: party.is_public,
          master: party.user.find((u) => u.id == party.masterID)!.username,
          date: party.date,
          starttime: party.start_time,
          endtime: party.end_time,
        })),
      };

      res.status(200).json(partiesDto);
    } catch (error) {
      res.status(400).json({ message: "activityID must be number!" });
    }
  }
};

export const getManyPartyCards = async (req: Request, res: Response) => {
  const parties = await prisma.party.findMany({
    include: { user: true, activity: true },
  });
  if (parties === null) {
    res.status(404).json({ message: "party not found" });
    return;
  }

  const partiesDto: PartiesDTO = {
    total: parties.length,
    parties: parties.map((party) => ({
      id: party.id,
      title: party.partyname,
      topic: party.activity.name,
      image: party.img_url,
      info: party.public_desc,
      tag: [party.tag1, party.tag2, party.tag3],
      numpeople: party.current_member,
      maxpeople: party.member,
      time: party.created_at,
      isPublic: party.is_public,
      master: party.user.find((u) => u.id == party.masterID)!.username,
      date: party.date,
      starttime: party.start_time,
      endtime: party.end_time,
    })),
  };

  res.status(200).json(partiesDto);
};

export const getPartyRoom = async (req: Request, res: Response) => {
  const id = parseInt(req.params.id);
  if (Number.isNaN(id)) {
    res.status(400).json({ message: "Invalid ID" });
    return;
  }
  const party = await prisma.party.findUnique({
    where: { id },
    include: { user: true, activity: true },
  });
  if (party === null) {
    res.status(404).send({ message: "party not found" });
    return;
  }

  const partyroomDto: PartyRoomDTO = {
    id: party.id,
    title: party.partyname,
    topic: party.activity.name,
    image: party.img_url,
    info: party.public_desc,
    tag: [party.tag1, party.tag2, party.tag3],
    numpeople: party.current_member,
    maxpeople: party.member,
    time: party.created_at,
    isPublic: party.is_public,
    master: party.user.find((u) => u.id == party.masterID)!.username,
    date: party.date,
    starttime: party.start_time,
    endtime: party.end_time,
    privateDesc: party.private_desc,
    members: party.user.map((v) => v.username),
  };

  res.status(200).json(partyroomDto);
};
export const createParty = async (req: Request, res: Response) => {
  const party: CreateParty = req.body;
  try {
    const parsedParty = partySchema.validateSync(party);
    const { tag1, tag2, tag3, date } = parsedParty;
    const session = await prisma.session.findUnique({
      where: { id: req.session.token },
    });
    if (session == null || session == undefined) {
      res.status(401).json({ message: "session error" });
      return;
    }
    const newParty = await prisma.party.create({
      data: {
        partyname: parsedParty.title,
        is_public: parsedParty.isPublic,
        img_url: parsedParty.image,
        masterID: session.userID,
        activityID: parsedParty.topicID,
        start_time: parsedParty.starttime,
        end_time: parsedParty.endtime,
        tag1,
        tag2,
        tag3,
        date,
        member: parsedParty.maxpeople,
        public_desc: parsedParty.info,
        private_desc: parsedParty.privateDesc,
        user: { connect: [{ id: session.userID }] },
      },
    });
    res.status(200).json({ message: "create party successful" });
  } catch (error) {
    res.status(400).json({ message: (error as ValidationError).message });
  }
};

export const joinParty = async (req: Request, res: Response) => {
  const partyid = parseInt(req.params.id as string);
  if (Number.isNaN(partyid)) {
    res.status(400).json({ message: "Invalid ID" });
    return;
  }
  try {
    const session = await prisma.session.findUnique({
      where: { id: req.session.token },
    });
    if (session == null || session == undefined) {
      res.status(401).json({ message: "session error" });
      return;
    }
    const party = await prisma.party.findUnique({
      where: { id: partyid },
      include: { user: true },
    });
    if (party == null) {
      res.status(400).json({ message: "party not found" });
      return;
    }
    if (party.user.find((v) => v.id == session.userID) !== undefined) {
      res.status(400).json({ message: "user already in party" });
      return;
    }
    if (party.current_member >= party.member) {
      res.status(400).json({ message: "this party is already full" });
      return;
    }
    const updateParty = await prisma.party.update({
      where: { id: partyid },
      data: {
        current_member: { increment: 1 },
        user: { connect: { id: session.userID } },
      },
    });
    res.status(200).json({ message: "join party successful" });
  } catch (error) {
    res.status(400).json({ message: "something went wrong" });
  }
};
