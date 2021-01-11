import * as mongoose from 'mongoose'

export default class Db {
    public mongoose: mongoose.Connection

    constructor() {
        this.productionCheck()
        this.connect()
    }

    private productionCheck(): void {
        require('dotenv').config({path:'env_variables.env'})
    }

    private connect(): void {
        mongoose.connect(process.env.DB_CONNECTION, {
            useNewUrlParser: true,
            useUnifiedTopology: true
        })

        const db = mongoose.connection

        db.on('error', console.error.bind(console, 'connection error:'))
        db.once('open', function() {
            console.log("Mongo DB Connection Established")
            this.db = db
        })
    }
}