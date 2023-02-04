from fastapi import APIRouter
from bson import ObjectId
from models.blog import Blog
from config.db import conn
from schemas.blog import serializeDict, serializeList

blog_routes = APIRouter()

@blog_routes.get('/get-blogs')
async def get_all_blogs():
  return serializeList(conn.elyadata.blog.find())

@blog_routes.get('/get-blog/{id}')
async def get_blog_by_id(id):
  if ObjectId.is_valid(id):
    return serializeDict(conn.elyadata.blog.find_one({'_id': ObjectId(id)}))

@blog_routes.post('/add-blog')
async def add_blog(blog: Blog):
  conn.elyadata.blog.insert_one(dict(blog))
  return serializeList(conn.elyadata.blog.find())

@blog_routes.put('/edit-blog/{id}')
async def edit_blog(id, blog: Blog):
  if ObjectId.is_valid(id):
    conn.elyadata.blog.find_one_and_update({'_id': ObjectId(id)}, {'$set': dict(blog)})
    return serializeList(conn.elyadata.blog.find())