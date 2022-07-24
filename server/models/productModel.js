import db from '../utils/db.js'

export default {
    async findById(proID) {
        if (proID === null) return null;
        return await db.select('ProID', 'ProName', 'Price', 'Description', 'Status')
                    .from('product')
                    .where({ ProID:  proID})
    },

    async findFeaturedProduct(limit) {
        return await db.select('ProID', 'ProName', 'Price')
                .from('product')
                .where('Featured', 1)
                .limit(limit)
    },

    async findBestProduct(limit) {
        return await db.select('ProID', 'ProName', 'Price')
                .from('product')
                .whereNot('Sold', 0)
                .orderBy('Sold', 'desc')
                .limit(limit) 
    },

    async findAllCategoryProduct(catID) {
        return await db.select('ProID', 'ProName', 'Price')
                .from('product')
                .join('categorychild', 'product.catidchild', '=', 'categorychild.catidchild')
                .where({ CatID:  catID}) 
    },
    
    async findAllCategoryChildProduct(catChildID) {
        return await db.select('ProID', 'ProName', 'Price')
                .from('product')
                .where({ CatIDChild:  catChildID}) 
    },

}