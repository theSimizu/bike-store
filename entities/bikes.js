import { DataTypes, Model } from "sequelize"
import sequelize from "../config/database.js"
import Client from "./clients.js"

class Bike extends Model {}

Bike.init(
    {
        id: {
            type: DataTypes.UUID,
            primaryKey: true,
            defaultValue: DataTypes.UUIDV4
        },

        model: {
            type: DataTypes.STRING,
            allowNull: false
        },

        manufacturer: {
            type: DataTypes.STRING
        },

        brand: {
            type: DataTypes.STRING
        },

        color: {
            type: DataTypes.STRING
        },

        type: {
            type: DataTypes.STRING
        },

        material: {
            type: DataTypes.STRING
        },

        weight: {
            type: DataTypes.DOUBLE
        },

        dimensions: {
            type: DataTypes.STRING,
        },

        description: {
            type: DataTypes.TEXT
        },

        price: {
            type: DataTypes.DOUBLE
        },

        year: {
            type: DataTypes.STRING
        },

        certification: {
            type: DataTypes.STRING
        },

        brakes: {
            type: DataTypes.STRING
        },

        gears: {
            type: DataTypes.INTEGER
        },

        cyclistHeightRecomendation: {
            type: DataTypes.DOUBLE
        },

        wheel: {
            type: DataTypes.DOUBLE
        },

        supply: {
            type: DataTypes.STRING
        },

        specialCharacteristics: {
            type: DataTypes.STRING
        }
    }, 
    {
        sequelize, 
        tableName: 'bikes', 
        modelName: 'bike',
        
    }
)

class BoughtBikes extends Model {
    static async from(client) {
        return BoughtBikes.findAll({
            where: {
                clientId: client.getDataValue('id'),
            }
        })
    }
}

BoughtBikes.init(
    {
        id: {
            type: DataTypes.UUID,
            primaryKey: true,
            defaultValue: DataTypes.UUIDV4
        },
        amount: {
            type: DataTypes.INTEGER
        }
    }, 
    {
        sequelize,
        tableName: 'bought_bikes',
        modelName: 'bought_bike'
    }
)

Bike.belongsToMany(Client, {through: BoughtBikes})
Client.belongsToMany(Bike, {through: BoughtBikes})


export {Bike, BoughtBikes}  