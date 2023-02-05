from fastapi import APIRouter
from bson import ObjectId
from models.blog import Blog
from config.db import conn
from schemas.blog import serializeDict, serializeList

blog_routes = APIRouter()

@blog_routes.get('/get-blogs') #-------------------------------------------------------------------GET /get-blogs
async def get_all_blogs():
  return serializeList(conn.elyadata.blog.find())

@blog_routes.get('/get-blog/{id}') #---------------------------------------------------------------GET /get-blog/:id
async def get_blog_by_id(id):
  if ObjectId.is_valid(id):
    return serializeDict(conn.elyadata.blog.find_one({'_id': ObjectId(id)}))

@blog_routes.get('/search') #----------------------------------------------------------------------GET /search?keyword=value
async def search_blog(keyword: str):
  if len(keyword) == 0: return []
  return serializeList(
    conn.elyadata.blog.find({
      '$or': [
          {'title': {'$regex':keyword, '$options':'i'}},
          {'author': {'$regex':keyword, '$options':'i'}},
          {'content': {'$regex':keyword, '$options':'i'}}
        ]
      })
  )

@blog_routes.post('/add-blog') #-------------------------------------------------------------------POST /add-blog
async def add_blog(blog: Blog):
  conn.elyadata.blog.insert_one(dict(blog))
  return serializeList(conn.elyadata.blog.find())

@blog_routes.put('/edit-blog/{id}') #--------------------------------------------------------------PUT /edit-blog/:id
async def edit_blog(id, blog: Blog):
  if ObjectId.is_valid(id):
    conn.elyadata.blog.find_one_and_update({'_id': ObjectId(id)}, {'$set': dict(blog)})
    return serializeList(conn.elyadata.blog.find())