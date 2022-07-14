import express from "express";
import {userCtrl} from '../controllers/userCtrl.js'
import {auth} from '../middlewares/auth.js'
import {authAdmin} from '../middlewares/authAdmin.js'

const router = express.Router();

router.post('/register', userCtrl.register)
router.post('/activation', userCtrl.activateEmail)
router.post('/login', userCtrl.login)
router.post('/refresh_token', userCtrl.getAccessToken)
router.post('/forgot', userCtrl.forgotPassword)
router.post('/reset', auth, userCtrl.resetPassword)
router.get('/logout', userCtrl.logout)



export default router