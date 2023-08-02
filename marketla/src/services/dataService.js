//At least 8 products
const catalog = [
    {
        "title": "Orange",
        "category":"Fruit",
        "price": 12.99,
        "image": "orange.png",
        "_id" : 1
    },
    {
        "title": "Apple",
        "category":"Fruit",
        "price": 12.99,
        "image": "apple.png",
        "_id" : 2
    },
    {
        "title": "Carrot",
        "category":"Fruit",
        "price": 12.99,
        "image": "carrot.png",
        "_id" : 3
    },
    {
        "title": "Banana",
        "category":"Fruit",
        "price": 12.99,
        "image": "banana.png",
        "_id" : 4
    },
    {
        "title": "Watermelon",
        "category":"Fruit",
        "price": 12.99,
        "image": "watermelon.png",
        "_id" : 5
    },
    {
        "title": "Melon",
        "category":"Fruit",
        "price": 12.99,
        "image": "melon.png",
        "_id" : 6
    },
    {
        "title": "Grapes",
        "category":"Fruit",
        "price": 12.99,
        "image": "grapes.png",
        "_id" : 7
    },
    {
        "title": "Cereal",
        "category":"Fruit",
        "price": 24.99,
        "image": "cereal.png",
        "_id" : 8
    }
]

class DataService {
    getProducts = () => {
        return catalog
    }
}

export default DataService;