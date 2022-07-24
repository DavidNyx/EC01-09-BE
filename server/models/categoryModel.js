import db from '../utils/db.js'

export default {
    async findAll() {
        const categories = await db.select('CatID', 'CatName')
                            .from('category')
        const allCategory = await Promise.all(categories.map(async (category) => {
            const catChild = await db.select('CatIDChild', 'CatIDName')
                                    .from('categorychild')
                                    .where({ CatID:  category.CatID}) 
            
            let fullCategory = {};
            fullCategory.CatID =  category.CatID
            fullCategory.CatName = category.CatName
            fullCategory.CatChild = catChild
            return fullCategory
        }))
        return allCategory
    },

    async findById(catID) {
        if (catID === null) return null;
        const category = await db.select('CatID', 'CatName')
                    .from('category')
                    .where({ CatID:  catID})
        
        return category
    },

}
