#Module imports
from flask import Flask
import json

#Custom imports
from config import myData

app = Flask("Server")

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

@app.get(create_api_endpoint("/categories"))
def categories():
    all_cats = ["Fruits", "Cereals"]
    return json.dumps(all_cats)


# Start the server
app.run(debug=True)
