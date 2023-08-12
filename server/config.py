import os
from dotenv import load_dotenv

import pymongo
import certifi

load_dotenv()

myData = {
    "name": "Adrian",
    "last_name": "Adame",
    "age": 21,
    "hobbies": [],
    "address": {"street": "Salina Cruz", "city": "Tijuana", "zip": 22404},
}

#Database configuration

CONN_STR = os.getenv('MONGODB_CONN_STRING')

DB_NAME = "marketla"

client = pymongo.MongoClient(CONN_STR, tlsCAFile = certifi.where())

db = client.get_database(DB_NAME)





