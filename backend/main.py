from fastapi import FastAPI
from routes.blog import blog_routes

app = FastAPI()
app.include_router(blog_routes)

# uvicorn main:app --reload