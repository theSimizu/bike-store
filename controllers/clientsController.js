import Client from "../entities/clients.js";
import { Bike } from "../entities/bikes.js";

// Get
async function getClient(req, res) {
    const clientId = req.params.id
    const client = await Client.findByPk(clientId)
    res.send(client)
}

// Post
async function registerClient(req, res) {
    const clientData = req.body.client
    const client = await Client.create(clientData)
    res.send(client)
}

async function registerPurchase(req, res) {
    // INCOMPLETE
    const clientId = req.params.id
    const client = await Client.findByPk(clientId)
    const { bikes, parts, accessories } = req.body
}


export { registerClient, getClient }