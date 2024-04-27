from fastapi import FastAPI, HTTPException
# from fastapi.middleware.cors import CORSMiddleware
from model import Todo
from database import fetch_one_todo, fetch_all_todos, create_todo, update_todo, remove_todo

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
async def get_items():
    response = await fetch_all_todos()
    return response


@app.get("/api/items/{title}", response_model=Todo)
def get_item(title: str):
    response = fetch_one_todo(title)
    if response:
        return response
    raise HTTPException(404, f"There is no todo with the title {title}")


@app.post("/api/create-todo/", response_model=Todo)
def create_item(todo: Todo):
    response = create_todo(todo)
    if response:
        return response
    raise HTTPException(404, f"There is no todo with the title {todo.title}")


@app.put("/api/todos/{id}")
def update_item(id):
    return {"todo": id}


@app.delete("/api/delete-todo/{id}")
def delete_item():
    return {"todo deleted": "todo"}
