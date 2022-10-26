import { Router } from "express";
import { getActivitylist } from "../controllers/other.controller";
import {
  createParty,
  getManyPartyCards,
  getOnePartyCard,
  getPartyPerActivity,
  getPartyPerUsers,
  getPartyRoom,
  joinParty,
} from "../controllers/party.controller";

export const partyRouter = Router();
partyRouter.get("/", getManyPartyCards);
partyRouter.get("/activitylist", getActivitylist);
partyRouter.get("/:id", getOnePartyCard);
partyRouter.get("/room/:id", getPartyRoom);
partyRouter.get("/activity/:id", getPartyPerActivity);
partyRouter.post("/", createParty);
partyRouter.post("/join/:id", joinParty);
partyRouter.post("/myparty", getPartyPerUsers);
