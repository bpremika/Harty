import { Router } from "express";
import {
  createParty,
  getManyPartyCards,
  getOnePartyCard,
  getPartyPerActivity,
  getPartyRoom,
  joinParty,
} from "../controllers/party.controller";

export const partyRouter = Router();
partyRouter.get("/", getManyPartyCards);
partyRouter.get("/:id", getOnePartyCard);
partyRouter.get("/room/:id", getPartyRoom);
partyRouter.get("/activity/:id", getPartyPerActivity);
partyRouter.post("/", createParty);
partyRouter.post("/join/:id", joinParty);
