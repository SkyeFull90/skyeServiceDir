from fastapi import FastAPI

app = FastAPI()


@app.get("/")
def read_root():
    return {"Hello": "World"}

@app.get("/api/")
def read_api():
    return {"Hello": "API"}

@app.get("/api/items/")
def get_items():
    return {"items": ["item1", "item2"]}

@app.get("/api/items/{id}")
def get_item(id):
    return {"item": "item1"}

@app.post("/api/create_items/")
def create_item():
    return {"item": "created"}

@app.put("/api/items/{id}")
def update_item(id):
    return {"item": id}

@app.delete("/api/delete-items/{id}")
def delete_item():
    return {"item deleted": "item1"}