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