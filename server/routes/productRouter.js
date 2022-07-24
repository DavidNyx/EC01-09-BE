import express from "express";
import {productCtrl} from '../controllers/productCtrl.js'

const router = express.Router();

//find featured product
router.get('/featured', productCtrl.getFeaturedProduct)
//find best product
router.get('/best', productCtrl.getBestProduct)
//find detail product by id
router.get('/:id', productCtrl.getDetailProduct)
//find all product in category by category id
router.get('/all/:catid', productCtrl.getAllCategoryProduct)
//find all product in category child by category child id
router.get('/category/:catchildid', productCtrl.getAllCategoryChildProduct)
export default router