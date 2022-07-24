import categoryModel from '../models/categoryModel.js'


export const categoryCtrl = {
    getAll: async (req, res) => {
        try {
            const categories = await categoryModel.findAll()
            res.status(200).json({data: categories })
        } catch (err) {
            return res.status(500).json({msg: err.message})
        }
    },

    getById: async (req, res) => {
        try {
            const { catid } = req.params
            const category = await categoryModel.findById(catid)
            res.status(200).json({data: category })
        } catch (err) {
            return res.status(500).json({msg: err.message})
        }
    },
    
 }