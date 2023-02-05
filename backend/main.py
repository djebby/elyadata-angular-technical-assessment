from fastapi import FastAPI
from fastapi.middleware.cors import CORSMiddleware
from routes.blog import blog_routes

app = FastAPI()
app.add_middleware(
    CORSMiddleware,
    allow_origins=['*'],
    allow_credentials=True,
    allow_methods=['*'],
    allow_headers=['*']
  )
app.include_router(blog_routes)

# uvicorn main:app --host 0.0.0.0 --reload