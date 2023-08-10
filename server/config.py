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

mongodb_conn_str = os.getenv('MONGODB_CONN_STRING')