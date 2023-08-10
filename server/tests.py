from config import myData

def read():
    print(myData["name"])

def modify():
    myData["age"] = 22 
    print(myData)

def create(key : str, val):
    if key not in myData.keys():
        myData[key] = val
        print(myData)
    else:
        print(f"Cannot create key {key}, it already exists")
    
def remove(key: str):
    if key in myData.keys():
        myData.pop(key, None)
        print(myData)
    else:
        print(f"Cannot remove key {key}, it doesn't exist")

#Call fns
read()
modify()
create("favorite_color", "Black")
remove("name")