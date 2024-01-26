import os
from motor import motor_asyncio
from dotenv import load_dotenv

load_dotenv()
client = motor_asyncio.AsyncIOMotorClient(os.environ("MONGODB_URI"))
database = client.TodoList
colection = database.todo