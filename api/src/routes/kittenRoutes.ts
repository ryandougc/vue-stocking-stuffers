import { Router } from 'express'
import * as kittenController from '../controllers/kittenController'

const router = Router()

router.get('/', kittenController.get_kittens)

router.post('/', kittenController.post_kitten)

router.get('/:id', kittenController.get_kitten)

router.put('/:id', kittenController.put_kitten)

router.delete('/:id', kittenController.delete_kitten)

// //GET firearms list CSV file
// router.get('/csv', firearm_controller.firearm_create_csv)

module.exports = router