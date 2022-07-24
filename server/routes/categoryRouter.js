import express from "express";
import {categoryCtrl} from '../controllers/categoryCtrl.js'

const router = express.Router();

router.get('/all', categoryCtrl.getAll)
router.get('/:catid', categoryCtrl.getById)

export default router