import Client from "../entities/clients.js"
import { Model } from "sequelize"
import {Bike, BoughtBikes} from "../entities/bikes.js"



// // Post
// async function registerClient(req: Request, res: Response) {
//     const clientData = req.body.client
// }

// async function registerBikePurchase(req: Request, res: Response) {
//     const amount = req.body.amount 

//     const clientId = req.body.userId
//     const client = await Client.findByPk(clientId)

//     const bikeId = req.body.bikeId
//     const bike = await Bike.findByPk(bikeId)

//     if (!client || !bike) {
//         res.status(500).send({error: 'Client or bike not found'})
//         return
//     }

//     await client._addBike(bike, amount)

//     res.status(200).send({msg: 'Success'})

// }

// async function registerPartPurchase(req: Request, res: Response) {
    
// }

// async function registerAccessoryPurchase(req: Request, res: Response) {
    
// }

// export {registerAccessoryPurchase, registerBikePurchase, registerClient, registerPartPurchase}
