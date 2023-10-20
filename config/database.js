import { Sequelize } from "sequelize"
// import { configDotenv } from "dotenv"

const {database, username, password, dialect, host, port} = process.env


const sequelize = new Sequelize(database, username, password, {
    dialect,
    host,
    port
})

sequelize.authenticate().then(() => console.log('Conected to the database'))

export default sequelize