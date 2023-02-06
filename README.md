# ELYADATA Angular Technical Assessment

## Angular - FastAPI - MongoDB

![](elyadata-logo.jpg)


### Frontend Routes (pages)
    | ROUTE                      | DESCRIPTION                         |
    |----------------------------|-------------------------------------|
    | /                          | the blogs list page                 |
    | /add-blog                  | form for adding blogs               |
    | /blog-details/:id          | upload a new pictures               |

### Backend API Endpoints
    | ENDPOINT                   | DESCRIPTION                                    |
    |----------------------------|------------------------------------------------|
    | GET /get-blogs             | fetch all the blogs from the mongodb database  |
    | GET /get-blog/:id          | fetch blog by id                               |
    | GET /search?keyword=value  | filter for the blog's content, title or author |
    | POST /add-blog             | add blog to the database                       |
    | PUT /edit-blog/:id         | update a blog                                  |