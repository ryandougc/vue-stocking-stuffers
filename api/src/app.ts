import * as     express         from 'express'
import * as     bodyParser      from 'body-parser'
import * as     kittenRoutes    from './routes/kittenRoutes'

class App {
    public express

    constructor () {
        this.express = express()
        this.initBodyParser()
        this.mountRoutes()
    }

    private initBodyParser(): void {
        this.express.use(bodyParser.urlencoded({ extended: true }))
        this.express.use(bodyParser.json())
    }

    private mountRoutes(): void {
        this.express.use('/kitten/', kittenRoutes)

        this.express.use('/', (req, res) => {
            res.status(404).send(
                'Error 404: The page you are looking for could not be found'
            )
        })
    }
}

export default new App().express