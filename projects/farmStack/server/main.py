from fastapi import FastAPI
from fastapi.middleware.cors import CORSMiddleware
#from fastapi.staticfiles import StaticFiles

# app object
app = FastAPI()

# CORS
origins = [
    "http://localhost:5173",
]