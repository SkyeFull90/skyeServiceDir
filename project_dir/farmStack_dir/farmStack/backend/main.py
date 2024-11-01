from fastapi import FastAPI, HTTPException
from fastapi.responses import FileResponse
from pathlib import Path
from fastapi.middleware.cors import CORSMiddleware
from model import Todo
from database import fetch_one_todo, fetch_all_todos, create_todo, update_todo, remove_todo
from fastapi.staticfiles import StaticFiles

app = FastAPI()

"""
app.mount("/assets", StaticFiles(directory="dist/assets"), name="assets")
"""

origins = [
    "http://localhost:5173",
    "http://localhost:3000",
]

 
app.add_middleware(
    CORSMiddleware,
    allow_origins=origins,
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)    
    


@app.get("/")
async def read_root():
    return {"Hello": "World"}


@app.get("/api/")
async def read_api():
    return {"Hello": "API"}


@app.get("/api/todo/")
async def get_items():
    response = await fetch_all_todos()
    return response


@app.get("/api/todo/{title}", response_model=Todo)
async def get_todo_by_id(title):
    response = await fetch_one_todo(title)
    if response:
        return response
    raise HTTPException(404, f"There is no todo with the title {title}")


@app.post("/api/todo/", response_model=Todo)
async def create_item(todo: Todo):
    response = await create_todo(todo.dict())
    if response:
        return response
    raise HTTPException(404, f"There is no todo with the title {todo.title}")


@app.put("/api/todo/{title}/", response_model=Todo)
async def update_item(title: str, description: str):
    response = await update_todo(title, description)
    if response:
        return response
    raise HTTPException(404, f"There is no todo with the title {title}")


@app.delete("/api/todo/{title}")
async def delete_item(title):
    response = await remove_todo(title)
    if response:
        return "Successfully deleted todo"
    raise HTTPException(404, f"There is no todo with the title {title}")
