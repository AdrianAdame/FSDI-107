//At least 8 products
const catalog = [
    {
        "title": "Woods Backpack",
        "category":"Backpacks",
        "price": 79.99,
        "image": "woods.jpg",
        "_id" : 1
    },
    {
        "title": "Maloga Coat",
        "category":"Clothing",
        "price": 59.99,
        "image": "orange_coat.jpg",
        "_id" : 2
    },
    {
        "title": "Salomon Hiking shoes",
        "category":"Shoes",
        "price": 44.99,
        "image": "salomon.jpg",
        "_id" : 3
    },
    {
        "title": "Knife",
        "category":"Accesories",
        "price": 24.99,
        "image": "knife.jpg",
        "_id" : 4
    },
    {
        "title": "Cimalp jacket",
        "category":"Clothing",
        "price": 59.99,
        "image": "yellow_coat.jpg",
        "_id" : 5
    },
    {
        "title": "Black backpack",
        "category":"Backpacks",
        "price": 39.99,
        "image": "black_back.jpg",
        "_id" : 6
    },
]

class DataService {
    getProducts = () => {
        return catalog
    }
}

export default DataService;