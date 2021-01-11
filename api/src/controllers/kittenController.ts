import Db from '../db'
import { Kitten } from '../models/kitten'

new Db()

export const get_kittens = async (req, res): Promise<void> => {
    try{
        const kittens = await Kitten.find()

        res.status(200).send(kittens)
    } catch(err){
        console.log(err)
        res.status(500).send("Error 500: Couldn't find the kittens you're looking for")
    }
}

export const post_kitten = async (req, res): Promise<void> => {
    const kitty = new Kitten({ name: req.body.name })

    try {
        const kitten = await kitty.save()

        res.status(200).send(kitten)
    } catch(err){
        console.log(err)
        res.status(500).send("Error 500: Couldn't add kitten to the database")
    }
}

export const get_kitten = async (req, res): Promise<void> => {
    try {
        const kitten = await Kitten.findById(req.params.id)

        res.status(200).send(kitten)
    } catch(err){
        console.log(err)
        res.status(500).send("Error 500: Couldn't find the kitten you're looking for")
    }
}

export const put_kitten = async (req, res): Promise<void> => {
    const kitty = new Kitten({
        _id: req.params.id,
        name: req.body.name
    })

    try {
        const kitten = await Kitten.updateOne({ _id: kitty._id }, { name: req.body.name })

        res.status(200).send(kitten)
    } catch(err){
        console.log(err)
        res.status(500).send("Error 500: Couldn't find the kitten you're looking for")
    }
}

export const delete_kitten = async (req, res): Promise<void> => {
    try {
        const kitten = await Kitten.deleteOne({ _id: req.params.id })

        res.status(200).send(kitten)
    } catch(err){
        console.log(err)
        res.status(500).send("Error 500: Couldn't find the kitten you're looking for")
    }
}