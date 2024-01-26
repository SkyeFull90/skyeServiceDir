import os
from motor import motor_asyncio
from dotenv import load_dotenv
from model import Todo

load_dotenv()
client = motor_asyncio.AsyncIOMotorClient(os.environ("MONGODB_URI"))
database = client.TodoList
colection = database.todo

async def fetch_one_todo(title):
    document = await colection.find_one({"title": title})
    return document

