from fastapi import FastAPI
from fastapi.middleware.cors import CORSMiddleware

# from fastapi.staticfiles import StaticFiles
from database import (
    fetch_one_todo,
    fetch_all_todos,
    create_todo,
    update_todo,
    delete_todo,
)
# app object
app = FastAPI()

# CORS
origins = [
    "http://localhost:5173",
]

app.add_middleware(
    CORSMiddleware,
    allow_origins=origins,
    allow_credentials=True,
    allow_methods=["GET", "OPTIONS", "POST"],
    allow_headers=["*"],
)


@app.get("/")
async def root():
    return {"message": "Hello World"}


@app.get("/api")
async def api():
    return {"message": "Welcome to the Todo API"}


@app.get("/api/todo")
async def todo():
    return {"message": "Todo"}


@app.get("/api/todo/{title}")
async def todo_title(title):
    return {"message": f"Todo {title}"}


@app.post("/api/todo")
async def todo_post():
    return {"message": "Todo POST"}


@app.put("/api/todo/{title}")
async def todo_put(title):
    return {"message": f"Todo PUT {title}"}


@app.delete("/api/todo/{title}")
async def todo_delete(title):
    return {"message": f"Todo DELETE {title}"}
