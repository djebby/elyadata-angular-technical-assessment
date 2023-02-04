import { Injectable } from "@angular/core";
import { faker } from "@faker-js/faker";

@Injectable({providedIn: 'root'})
export class BlogsService {
  blogs: any[] = [];

  constructor() {
    for(let i = 0; i < 20; i++) {
      const blog = {
        id: faker.datatype.uuid(),
        title: faker.lorem.sentence(),
        author: faker.name.fullName(),
        content: faker.lorem.paragraphs(Math.floor(20 + Math.random() * 80)), // random paragraphs between 20..100
        date: faker.date.past(20), // It would be nice if we give each blog the date it was written at
        upvote: Math.floor(Math.random() * 50), // just a random number of upvote initially between 0..50
        downvote: Math.floor(Math.random() * 25), // random number of downvote initially between 0..25
        userVote: 0, // 1 if user like the blog, -1 for dislike and 0 if no reaction has been received yet
      };
      this.blogs.push(blog);
    }
  }

  fetchBlogs() {
    return this.blogs;
  }

  fetchBlogById(id: string) {
    for(const blog of this.blogs) if(blog.id == id) return blog;
    return false;
  }
  
  addBlog(title: string, author: string, content: string) {
    this.blogs.push({
      id: faker.datatype.uuid(),
      title,
      author,
      content,
      date: new Date(),
      upvote: 0,
      downvote: 0,
      userVote: 0
    })
  }
}