import { DataTypes, Model } from "sequelize"
import sequelize from "../config/database.js"

class User extends Model {}

User.init(
    {
        id: {
            type: DataTypes.UUID,
            primaryKey: true
        },
        usename: {
            type: DataTypes.STRING,
            allowNull: false
        },
        password: {
            type: DataTypes.STRING
        },
        admin: {
            type: DataTypes.BOOLEAN
        },
    },

    {
        sequelize,
        tableName: 'users',
        modelName: 'user'
    }
)




export default User