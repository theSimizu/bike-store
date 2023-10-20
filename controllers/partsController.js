import { Part } from "../entities/parts.js";

// Get
async function getPart(req, res) {
    const partId = req.params.id
    const part = await Part.findByPk(partId)
    res.send(part)
}

// Post
async function registerPart(req, res) {
    const partData = req.body.part
    const part = await Part.create(partData)
    res.send(part)
}

export { getPart, registerPart }