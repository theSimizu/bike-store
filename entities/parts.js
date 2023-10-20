import { DataTypes, Model } from "sequelize"
import sequelize from "../config/database.js"
import Client from "./clients.js"

class Part extends Model {}

Part.init(
    {
        id: {
            type: DataTypes.UUID,
            primaryKey: true,
            defaultValue: DataTypes.UUIDV4
        },
        
        name: {
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
            type: DataTypes.STRING
        },
    
        description: {
            type: DataTypes.TEXT
        },
    
        price: {
            type: DataTypes.DOUBLE
        },
    
        bikeType: {
            type: DataTypes.STRING,
        }
    },

    {
        sequelize,
        tableName: 'parts',
        modelName: 'part'
    }
)

class BoughtParts extends Model {}

BoughtParts.init(
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
        tableName: 'bought_parts',
        modelName: 'bought_part',
    }
)


Part.belongsToMany(Client, {through: BoughtParts})
Client.belongsToMany(Part, {through: BoughtParts})


export { Part, BoughtParts }