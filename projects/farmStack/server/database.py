import os
from motor import motor_asyncio
from dotenv import load_dotenv
from model import Todo

load_dotenv()
client = motor_asyncio.AsyncIOMotorClient(os.environ["MONGODB_URI"])
database = client.TodoList
collection = database.todo


async def fetch_one_todo(title):
    document = await collection.find_one({"title": title})
    return document


async def fetch_all_todos():
    todos = []
    cursor = collection.find({})
    async for document in cursor:
        todos.append(Todo(**document))
    return todos


async def create_todo(todo):
    document = todo
    result: object = await collection.insert_one(document)
    return document


async def update_todo(title, desc):
    await collection.find_one_and_update({"title": title}, {"$set": {
        "description": desc
    }})
    document: object = await collection.find_one({"title": title})
    return document


async def delete_todo(title):
    await collection.delete_one({"title": title})
    return True
