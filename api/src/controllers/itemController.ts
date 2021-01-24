import          Db                          from '../db'
import          { Item }                    from '../models/item'
import          { validate, checkErrors }   from '../validators/itemValidator'

new Db()

export const get_items = (req, res): void => {
    Item.find()
        .then(items => {
            res.status(200).send(items)
        })
        .catch(err => {
            console.log(err)
            res.status(500).send(err)
        })
}

export const post_item = [
    validate,
    checkErrors,
    (req, res): void => {
        const new_item = new Item({
            item: req.body.item,
            quantity: req.body.quantity,
            link: req.body.link
        })

        new_item.save()
            .then(item => {
                res.status(200).send(item)
            })
            .catch(err => {
                console.log(err)
                res.status(500).send(err)
            })
    }
]

export const get_item = (req, res): void => {
    Item.findById(req.params.id)
        .then(item => {
            res.status(200).send(item)
        })
        .catch(err => {
            console.log(err)
            res.status(500).send(err)
        })
}

export const put_item = [
    validate,
    checkErrors,
    (req, res): void => {
        const updated_item = new Item({
            _id: req.params.id,
            item: req.body.item,
            quantity: req.body.quantity,
            link: req.body.link
        })

        Item.updateOne({_id: updated_item._id }, updated_item, {runValidators: true})
            .then(item => {
                res.status(200).send(item)
            })
            .catch(err => {
                console.log(err)
                res.status(500).send(err)
            })
    }
]

export const delete_item = (req, res): void => {
    Item.deleteOne({ _id: req.params.id })
        .then(item => {
            res.status(200).send(item)
        })
        .catch(err => {
            console.log(err)
            res.status(500).send(err)
        })
}