from fastapi import FastAPI
from typing import Optional
import json

app = FastAPI()

with open("data.json") as f:
    events = json.load(f)


@app.get("/")
async def root():
    return {"message": "Hello World"}


@app.get("/api/events")
def read_events(skip: Optional[int] = 0, limit: Optional[int] = 10):
    return events['allEvents'][skip: skip + limit]
