import os
from dotenv import load_dotenv

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
