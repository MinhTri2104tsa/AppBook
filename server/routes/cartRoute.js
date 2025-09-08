import express from "express"
import { addToCart } from "../controllers/cartController.js"
import authUser from "../middlewares/authUser.js"
import { updateCart } from "../controllers/cartController.js"

const cartRouter = express.Router()

cartRouter.post('/add', authUser,addToCart)
cartRouter.post('/update', authUser,updateCart)

export default cartRouter