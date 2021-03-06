import * as     express             from 'express'
import * as     dotenv              from 'dotenv'
import * as     bodyParser          from 'body-parser'
import * as     cors                from 'cors'

import * as     routes              from './routes/routes'

class App {
    public express

    constructor () {
        this.express = express()
        this.initEnvVariables()
        this.initCors()
        this.initBodyParser()
        this.mountRoutes()
    }

    private initEnvVariables(): void {
        dotenv.config({ path: 'env_variables.env' })
    }

    private initCors(): void {
        this.express.use(cors())
        this.express.options('*', cors())
    }

    private initBodyParser(): void {
        this.express.use(bodyParser.urlencoded({ extended: true }))
        this.express.use(bodyParser.json())
    }

    private mountRoutes(): void {
        this.express.use('/item', routes)

        this.express.use('/', (req, res) => {
            res.status(404).send(
                'Error 404: The page you are looking for could not be found'
            )
        })
    }
}

export default new App().express