import "reflect-metadata"
import { DataSource } from "typeorm"
import { CreateUserTable1728868039589 } from './migrations/1728868039589-CreateUserTable'
import { CreateFestasTable1728905643210 } from './migrations/1728905643210-createFestasTable'
import User from "./entities/User"
import Festas from "./entities/Festa"

export const AppDataSource = new DataSource({
    type: "mysql",
    host: "localhost",
    port: 3306,
    username: "root",
    password: "Ms@122015",
    database: "local",
    synchronize: true,
    logging: false,
    entities: [User, Festas], 
    migrations: [CreateUserTable1728868039589, CreateFestasTable1728905643210 ],
    subscribers: [],
})
