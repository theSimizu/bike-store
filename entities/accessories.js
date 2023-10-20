import { DataTypes, Model } from "sequelize"
import sequelize from "../config/database.js"
import Client from "./clients.js"

class Accessory extends Model {}

Accessory.init(
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
    
        ageRange: {
            type: DataTypes.STRING
        },
    
        size: {
            type: DataTypes.STRING
        },
    }, 

    {
        sequelize,
        tableName: 'accessories',
        modelName: 'accessory'
    }
)

class BoughtAccessories extends Model {}

BoughtAccessories.init(
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
        tableName: 'bought_accessories',
        modelName: 'bought_accessory'
    }
)


Accessory.belongsToMany(Client, {through: BoughtAccessories})

export { Accessory, BoughtAccessories }