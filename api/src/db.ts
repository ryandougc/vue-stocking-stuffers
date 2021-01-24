import * as     mongoose            from 'mongoose'
import * as     dotenv              from 'dotenv'

export default class Db {
    public mongoose: mongoose.Connection

    constructor() {
        this.initEnvVariables()
        this.connect()
    }

    private initEnvVariables(): void {
        dotenv.config({ path: 'env_variables.env' })
    }

    private connect(): void {
        mongoose
            .connect(process.env.MONGO_URL, {
                useNewUrlParser: true,
                useUnifiedTopology: true
            })
            .then(() => console.log('MongoDB Connected'))
            .catch(err => console.log(err))
    }
}