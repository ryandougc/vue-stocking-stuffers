import          Db                          from '../db'
import          { Item }                    from '../models/item'
import          { validate, checkErrors }   from '../validators/itemValidator'

new Db()

export const get_items = async (req, res): Promise<void> => {
    try{
        const items = await Item.find()

        res.status(200).send(items)
    } catch(err){
        console.log(err)
        res.status(500).send(err)
    }
}

export const post_item = [
    validate,
    checkErrors,
    async (req, res): Promise<void> => {
        const new_item = new Item({
            item: req.body.item,
            quantity: req.body.quantity,
            link: req.body.link
        })

        try {
            const item = await new_item.save()

            res.status(200).send(item)
        } catch(err){
            console.log(err)
            res.status(500).send(err)
        }
    }
]

export const get_item = async (req, res): Promise<void> => {
    try {
        const item = await Item.findById(req.params.id)

        res.status(200).send(item)
    } catch(err){
        console.log(err)
        res.status(500).send(err)
    }
}

export const put_item = [
    validate,
    checkErrors,
    async (req, res): Promise<void> => {

        const updated_item = new Item({
            _id: req.params.id,
            item: req.body.item,
            quantity: req.body.quantity,
            link: req.body.link
        })

        try {
            const item = await Item.updateOne({ _id: updated_item._id }, updated_item, {runValidators: true})

            res.status(200).send(item)
        } catch(err){
            console.log(err)
            res.status(500).send(err)
        }
    }
]

export const delete_item = async (req, res): Promise<void> => {
    try {
        const item = await Item.deleteOne({ _id: req.params.id })

        res.status(200).send(item)
    } catch(err){
        console.log(err)
        res.status(500).send(err)
    }
}