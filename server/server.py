#Module imports
from flask import Flask, abort, request
from bson import ObjectId
import json

from flask_cors import CORS

#Custom imports
from config import myData, db

app = Flask("Server")

CORS(app) # THIS LINE WILL REMOVE CORS POLICY

BASE_API_URL = "/api"

def create_api_endpoint(endpoint : str):
    """
        Function to create api endpoint using BASE API URL
        -------------------------------

        Parameters:

        endpoint (String) -> Endpoint name for api to create
    """
    return BASE_API_URL + endpoint

@app.get("/")
def home():
    return "Hello world!"

@app.get("/test")
def test():
    return "This is a test page"

@app.get("/about")
def about():
    return "Adrian Adame :)"

##########################################
############# API - Products #############
#############     JSON       #############
##########################################

@app.get(create_api_endpoint("/about"))
def about_data():
    return json.dumps(myData)

@app.get(create_api_endpoint("/about/developer"))
def developer_name():
    return json.dumps(myData["name"] + " " + myData["last_name"])


# Function utility to fix ObjectID object from mongodb
def fix_id(record):
    record["_id"] = str(record["_id"])

    return record


"""
Categories related routes
--------------------------

API Endpoints:

GET categories     -> Returns a unique list of the categories in products
GET category/<cat> -> Return the products given a category as <cat>
"""
@app.get(create_api_endpoint("/categories"))
def categories():

    all_cats = []

    cursor = db.products.find({})

    for p in cursor:
        fixed_p = fix_id(p)

        if fixed_p["category"] not in all_cats:
            all_cats.append(fixed_p["category"])


    return json.dumps(all_cats)


@app.get(create_api_endpoint("/products/category/<cat>"))
def get_by_category(cat):
    filtered_products = []

    cursor = db.products.find({"category" : cat})

    for prod in cursor:
        filtered_products.append(fix_id(prod))

    return json.dumps(filtered_products)


"""
Products related routes
--------------------------

API Endpoints:

GET products  -> Returns a list with all the products in DB
POST products -> Saves a product sendded in request body in DB 
"""
@app.get(create_api_endpoint("/products"))
def get_products():
    products = []

    cursor = db.products.find({})

    for prod in cursor:
        products.append(fix_id(prod))

    return json.dumps(products)


@app.post(create_api_endpoint("/products"))
def save_product():
    product = request.get_json()

    res = db.products.insert_one(product)

    if res.acknowledged:
        return json.dumps(fix_id(product))


@app.get(create_api_endpoint("/reports/total"))
def calculate_products_total():
    total = 0

    cursor = db.products.find({})

    for prod in cursor:
        total += prod["price"]

    return json.dumps(total)



@app.get(create_api_endpoint("/coupons"))
def get_coupons():
    results = []
    cursor = db.coupons.find({})
    for coupon in cursor:
        results.append(fix_id(coupon))
    return json.dumps(results)

@app.post(create_api_endpoint("/coupons"))
def save_coupon():
    coupon = request.get_json()

    #There must be a code
    #There must be a discount
    #The discount can't be bigger than 35%

    if not "code" in coupon:
        return abort(404, "Coupon title is missing")

    if not "discount" in coupon:
        return abort(404, "Discount is not provided")

    if coupon["discount"] > 35:
        return abort(400, "Discount must be lower than 35% !")

    db.coupons.insert_one(coupon)
    return json.dumps(fix_id(coupon))

@app.get(create_api_endpoint("/coupons/code/<code>"))
def get_coupon_code(code):
    coupon = db.coupons.find_one({"code" : code})

    if not coupon:
        return abort(404, "Coupon not found")
    
    return json.dumps(fix_id(coupon))

@app.get(create_api_endpoint("/coupons/id/<id>"))
def get_coupon_id(id):
    if not ObjectId.is_valid(id):
        return abort(400, "Invalid id")

    obj_id = ObjectId(id)
    coupon = db.coupons.find_one({"_id" : obj_id})

    if not coupon:
        return abort(404, "Coupon not found")
    
    return json.dumps(fix_id(coupon))

@app.get(create_api_endpoint("/products/id/<id>"))
def get_product(id):
    if not ObjectId.is_valid(id):
        return abort(400, "Invalid Id")
    
    db_id = ObjectId(id)

    product = db.products.find_one({"_id" : db_id})

    if not product:
        abort(404, "Product not found")
    
    return json.dumps(fix_id(product))

# Start the server
app.run(debug=True)
