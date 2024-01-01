from typing import List

from fastapi import FastAPI

from pydantic import BaseModel

app = FastAPI()


class Warframe(BaseModel):
    id: int
    name: str
    rank: int
    ability: str


DB: List[Warframe] = [
    Warframe(id=1, name="Ivara", rank=19, ability="Ripclaw, Poison Ivy"),
    Warframe(id=2, name="Excalibur", rank=30, ability="Enchanted Sword")
]


@app.get("/api")
def read_root():
    return DB
