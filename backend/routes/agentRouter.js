
import express from "express";

// import controllers
// import {getAllAgents, getAgent, addAgent, updateAgent, deleteAgent} from "../controllers/agentController.js";


/**
    # 5.Agent controller:
        - getAllAgents: for fetching all the agents
        - getAgent: for fetching a specific agent
        - addAgent: for adding a new agent
        - updateAgent: for updating an existing agent
        - deleteAgent: for deleting an existing agent

*/
const agentRouter = express.Router();

// agentRouter.get("/", getAllAgents);
// agentRouter.get("/:id", getAgent);
// agentRouter.post("/:id", addAgent);
// agentRouter.put("/:id", updateAgent);
// agentRouter.delete("/:id", deleteAgent);

export default agentRouter;
