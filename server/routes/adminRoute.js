import express from "express"
import { adminLogin, adminLogout, isAdminAuth } from "../controllers/adminController.js"
import authAdmin from "../middlewares/authAdmin.js"

const adminRouter = express.Router()
adminRouter.post('/login', adminLogin)
adminRouter.post('/logout', adminLogout)
adminRouter.post('/is-auth', authAdmin, isAdminAuth)

export default adminRouter