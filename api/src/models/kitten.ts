import * as mongoose from 'mongoose'

export const Kitten = mongoose.model('Kitten',
    new mongoose.Schema({
        name: {
            type: String,
            required: true,
            minLength: [2, "Name must be 2 characters or more"],
            maxLength: [30, "Name must be 30 characters or less"]
        }
    })
)