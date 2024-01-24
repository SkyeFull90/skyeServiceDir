from fastapi import FastAPI
from fastapi.middleware.cors import CORSMiddleware
#from fastapi.staticfiles import StaticFiles

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

@app.get("/api/todo/{id}")
async def todo_id(id: int):
    return {"message": f"Todo {id}"}

@app.post("/api/todo")
async def todo_post():
    return {"message": "Todo POST"}

@app.put("/api/todo/{id}")
async def todo_put(id: int):
    return {"message": f"Todo PUT {id}"}

@app.delete("/api/todo/{id}")
async def todo_delete(id: int):
    return {"message": f"Todo DELETE {id}"}
