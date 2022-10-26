import { Router } from "express";
import { getActivitylist } from "../controllers/other.controller";
import {
  createParty,
  getManyPartyCards,
  getOnePartyCard,
  getPartyPerActivity,
  getPartyPerCategory,
  getPartyPerUsers,
  getPartyRoom,
  joinParty,
} from "../controllers/party.controller";

export const partyRouter = Router();
partyRouter.get("/", getManyPartyCards);
partyRouter.get("/activitylist", getActivitylist);
partyRouter.get("/room/:id", getPartyRoom);
partyRouter.get("/activity/:id", getPartyPerActivity);
partyRouter.get("/category", getPartyPerCategory);
partyRouter.post("/", createParty);
partyRouter.post("/join/:id", joinParty);
partyRouter.get("/myparty", getPartyPerUsers);
partyRouter.get("/:id", getOnePartyCard);
