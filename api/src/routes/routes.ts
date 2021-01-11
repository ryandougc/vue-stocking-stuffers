import * as     express             from 'express'
import * as     itemController      from '../controllers/itemController'

const router = express.Router()

router.get('/', itemController.get_items)

router.post('/', itemController.post_item)

router.get('/:id', itemController.get_item)

router.put('/:id', itemController.put_item)

router.delete('/:id', itemController.delete_item)

// //GET firearms list CSV file
// router.get('/csv', firearm_controller.firearm_create_csv)

module.exports = router