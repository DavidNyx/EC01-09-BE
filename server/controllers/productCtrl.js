//const productModel = require("../models/productModel")
import productModel from '../models/productModel.js' 


export const productCtrl = {
    getDetailProduct: async (req, res) => {
        try {
            const { id } = req.params
            const productDetail = await productModel.findById(id)
            res.status(200).json({data: productDetail })
        } catch (err) {
            return res.status(500).json({msg: err.message})
        }
    },
    
    getFeaturedProduct: async (req, res) => {
        try {
            const limit = 6
            const productFeatured = await productModel.findFeaturedProduct(limit)
            res.status(200).json({data: productFeatured })

        } catch (err) {
            return res.status(500).json({msg: err.message})
        }
    },

    getBestProduct: async (req, res) => {
        try {
            const limit = 6
            const productBestSeller = await productModel.findBestProduct(limit)
            res.status(200).json({data: productBestSeller })
        } catch (err) {
            return res.status(500).json({msg: err.message})
        }
    },

    getAllCategoryProduct: async (req, res) => {
        try {
            const { catid } = req.params
            const allCategoryProduct = await productModel.findAllCategoryProduct(catid)
            res.status(200).json({data: allCategoryProduct })
        } catch (err) {
            return res.status(500).json({msg: err.message})
        }
    },

    getAllCategoryChildProduct: async (req, res) => {
        try {
            const { catchildid } = req.params
            const allCategoryChildProduct = await productModel.findAllCategoryChildProduct(catchildid)
            res.status(200).json({data: allCategoryChildProduct })
        } catch (err) {
            return res.status(500).json({msg: err.message})
        }
    },
    
 }