import { Bike } from "../entities/bikes.js";

// Get
async function getBike(req, res) {
    const bikeId = req.params.id
    const bike = await Bike.findByPk(bikeId)
    res.send(bike)
}

// Post
async function registerBike(req, res) {
    const bikeData = req.body.bike
    const bike = await Bike.create(bikeData)
    res.send(bike)
}

export { getBike, registerBike }