import { Accessory } from "../entities/accessories.js";

// Get
async function getAccessory(req, res) {
    const accessoryId = req.params.id
    const accessory = await Accessory.findByPk(accessoryId)
    res.send(accessory)
}

// Post
async function registerAccessory(req, res) {
    const accessoryData = req.body.accessory
    const accessory = await Accessory.create(accessoryData)
    res.send(accessory)
}

export { getAccessory, registerAccessory }