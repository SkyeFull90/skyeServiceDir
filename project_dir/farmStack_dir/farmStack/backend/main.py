from fastapi import FastAPI
# from fastapi.middleware.cors import CORSMiddleware
# from fastapi import FastAPI, HTTPException
app = FastAPI()
"""
origins = [
    "http://localhost:5173",
    
app.add_middleware(
    CORSMiddleware,
    allow_origins=origins,
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)    
    
"""

@app.get("/")
def read_root():
    return {"Hello": "World"}

@app.get("/api/")
def read_api():
    return {"Hello": "API"}

@app.get("/api/todos/")
def get_items():
    return {"todos": ["todo1", "todo2"]}

@app.get("/api/items/{id}")
def get_item(id):
    return {"todos": "todo1"}

@app.post("/api/create-todo/")
def create_item():
    return {"todo": "created"}

@app.put("/api/todos/{id}")
def update_item(id):
    return {"todo": id}

@app.delete("/api/delete-todo/{id}")
def delete_item():
    return {"todo deleted": "todo"}