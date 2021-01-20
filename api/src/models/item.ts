import * as     mongoose            from 'mongoose'

export const Item = mongoose.model('Item',
    new mongoose.Schema({
        item: {
            type: String,
            required: true,
            minLength: [2, "Name must be 2 characters or more"],
            maxLength: [30, "Name must be 30 characters or less"],
        },
        quantity: {
            type: Number,
        },
        link: {
            type: String,
        }
    })
)