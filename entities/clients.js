import { DataTypes, Model } from "sequelize"
import sequelize from "../config/database.js"

class Client extends Model {
    // BIKES
    async _addBike(bike, amount) {
        return this.addBike(bike, { through: { amount } })
    }

    async _getBikes() {
        return this.getBikes()
    }

    // PARTS
    async _addPart(part, amount) {
        return this.addPart(part, { through: { amount } })
    }

    async _getParts() {
        return this.getParts()
    }

    // ACCESSORIES
    async _addAccessory(accessory, amount) {
        return this.addAccessory(accessory, { through: { amount } })
    }

    async _getAccessories() {
        return this.getAccessories()
    }
}

Client.init(
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
        
        phone: {
            type: DataTypes.STRING
        },
    
        email: {
            type: DataTypes.STRING
        }
    },

    {
        sequelize,
        tableName: 'clients',
        modelName: 'client'
    }
)




export default Client